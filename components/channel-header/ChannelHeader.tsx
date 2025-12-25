import Image from 'next/image';

export interface ChannelHeaderProps {
  imageUrl: string; // from API
  name: string; // from API
  description: string; // from API
}

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({ imageUrl, name, description }) => {
  return (
    <div className="bg-white">
      <div className="px-4 sm:px-6 pt-4 sm:pt-8 pb-3.5 sm:pb-6">
        <div className="flex items-start gap-3 sm:gap-6">
          <div className="shrink-0">
            <div className="bg-white rounded-sm overflow-hidden">
              <Image
                src={imageUrl}
                alt={`${name} channel`}
                width={96}
                height={96}
                className="h-14 w-14 sm:h-20 sm:w-20 object-contain"
                priority
              />
            </div>
          </div>
          <div className="min-w-0">
            <h1
              className="text-xl sm:text-4xl font-semibold text-black leading-tight break-words"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {name}
            </h1>
            <p
              className="mt-1.5 text-[13px] sm:text-base text-gray-700 leading-snug break-words"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-200" />
    </div>
  );
};
