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
              className="w-full min-h-0 text-left px-4 sm:px-6 py-1.5 sm:py-5 hover:bg-gray-50 active:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-900 focus-visible:outline-offset-2"
              aria-label={`Open newsletter: ${item.title}`}
            >
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="shrink-0">
                  <div className="bg-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      aria-hidden="true"
                      width={56}
                      height={56}
                      className="h-10 w-10 sm:h-20 sm:w-20 object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2
                    className="text-[12px] sm:text-3xl font-medium text-black leading-[1.15] truncate sm:whitespace-normal"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.title}
                  </h2>
                  <div className="mt-0.5 flex items-center gap-2 text-[9px] sm:text-sm font-semibold tracking-wide text-black uppercase leading-none">
                    <span className="truncate">{item.authorName}</span>
                    <span aria-hidden="true">•</span>
                    <span>{item.readMinutes} MIN</span>
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
