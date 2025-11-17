import Carousel from '@/components/Carousel';
import Image from 'next/image';
import type { JSX } from 'react';

const NFT_ITEMS = [
  'slide-1.png',
  'slide-2.png',
  'slide-3.png',
  'slide-4.png',
  'slide-5.png',
  'slide-1.png',
  'slide-2.png',
  'slide-3.png',
  'slide-4.png',
  'slide-5.png',
];

const NewNFTCollections = (): JSX.Element => (
  <Carousel
    title="New Nft Collections"
    variableWidth
    arrows
    classNameArrows="pr-5 md:pr-0"
  >
    {NFT_ITEMS.map((item, index) => (
      <div key={`${item}-${index}`} className="pr-2 md:pr-4">
        <Image
          src={`/images/${item}`}
          alt="NFT"
          width={180}
          height={245}
          className="h-[140px] w-[102px] cursor-pointer rounded-[6.86px] transition-transform duration-300 hover:scale-110 md:h-[245px] md:w-[180px] md:rounded-xl"
        />
      </div>
    ))}
  </Carousel>
);

export default NewNFTCollections;
