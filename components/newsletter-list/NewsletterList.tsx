'use client';

import Image from 'next/image';

export interface NewsletterListItemData {
  id: string; // from API
  title: string; // from API
  authorName: string; // from API
  readMinutes: number; // from API
  thumbnailUrl: string; // from API
}

export interface NewsletterListProps {
  items: NewsletterListItemData[]; // from API
}

export const NewsletterList: React.FC<NewsletterListProps> = ({ items }) => {
  return (
    <div className="bg-white">
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                // Using mock data; dev team will replace with real navigation/action.
                console.log('newsletter clicked', item.id);
              }}
              className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 active:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-900 focus-visible:outline-offset-2"
              aria-label={`Open newsletter: ${item.title}`}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="min-w-0 flex-1">
                  <h2
                    className="text-base sm:text-3xl font-medium text-black leading-snug break-words"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-black uppercase">
                    <span className="break-words">{item.authorName}</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="bg-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      aria-hidden="true"
                      width={96}
                      height={96}
                      className="h-20 w-20 sm:h-24 sm:w-24 object-cover"
                    />
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
