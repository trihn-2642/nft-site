import Image from 'next/image';
import NewNFTCollections from './NewNFTCollections';
import NFTDropsCalendar from './NFTDropsCalendar';
import type { JSX } from 'react';

const NFTCollections = (): JSX.Element => (
  <section className="mx-auto flex w-full flex-col gap-10 py-10 pl-5 pr-0 md:gap-[80px] md:px-10 md:py-[80px] lg:w-[1128px]">
    {/* New NFT Collections */}
    <NewNFTCollections />
    <div className="flex flex-col gap-10 pr-5 md:gap-6 md:pr-0 lg:flex-row">
      {/* NFT Drops Calendar */}
      <NFTDropsCalendar />

      <div className="flex w-full gap-4 md:gap-6 lg:w-[calc(100%-600px)]">
        {/* Hot NFT */}
        <div className="w-[50%]">
          <h3 className="mb-2 text-[24px] font-black uppercase italic leading-8 text-primary-normal md:text-[32px] md:leading-[48px]">
            Hot NFT
          </h3>
          <Image
            src="/images/hot-nft.png"
            alt="hot nft"
            width={240}
            height={240}
            className="h-[167px] w-full cursor-pointer rounded-xl transition-transform duration-300 hover:scale-110 md:h-[240px] lg:w-[240px]"
          />
        </div>

        {/* Promotion */}
        <div className="w-[50%]">
          <h3 className="mb-2 text-[24px] font-black uppercase italic leading-8 text-primary-normal md:text-[32px] md:leading-[48px]">
            Promotion
          </h3>
          <Image
            src="/images/promotion.png"
            alt="promotion"
            width={240}
            height={240}
            className="h-[167px] w-full cursor-pointer rounded-xl transition-transform duration-300 hover:scale-110 md:h-[240px] lg:w-[240px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default NFTCollections;
