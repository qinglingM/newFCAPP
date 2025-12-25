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
              className="w-full min-h-0 text-left px-4 sm:px-6 py-0 sm:py-5 hover:bg-gray-50 active:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-900 focus-visible:outline-offset-2"
              aria-label={`Open newsletter: ${item.title}`}
            >
              <div className="flex items-center gap-2.5 sm:gap-6">
                <div className="shrink-0">
                  <div className="bg-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="h-4 w-4 sm:h-20 sm:w-20 object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2
                    className="text-[10px] sm:text-3xl font-medium text-black leading-[1.1] overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{ fontFamily: 'Georgia, serif' }}
                    title={item.title}
                  >
                    {item.title}
                  </h2>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[8px] sm:text-sm font-semibold tracking-wide text-black uppercase leading-none">
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
