import Image from 'next/image';

export interface ChannelHeaderProps {
  imageUrl: string; // from API
  name: string; // from API
  description: string; // from API
}

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({ imageUrl, name, description }) => {
  return (
    <div className="bg-white">
      <div className="px-4 sm:px-6 pt-2 pb-1.5 sm:pt-8 sm:pb-6">
        <div className="flex items-start gap-2.5 sm:gap-6">
          <div className="shrink-0">
            <div className="bg-white rounded-sm overflow-hidden">
              <Image
                src={imageUrl}
                alt={`${name} channel`}
                width={52}
                height={52}
                className="h-10 w-10 sm:h-20 sm:w-20 object-contain"
                priority
              />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h1
              className="text-[15px] sm:text-4xl font-semibold text-black leading-tight break-words"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {name}
            </h1>
            <p
              className="mt-0.5 text-[10px] sm:text-base text-gray-700 leading-tight break-words truncate"
              style={{ fontFamily: 'Georgia, serif' }}
              title={description}
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
