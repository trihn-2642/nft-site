'use client';

import {
  IconCashBack,
  IconHowToBuy,
  IconNewNFT,
  IconRanking,
  IconRoadmap,
  IconVideo,
} from '@/components/Icon';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { JSX } from 'react';

const ITEMS = [
  {
    icon: IconCashBack,
    label: 'Free To\nEarn',
    width: { mobile: 35.63, desktop: 52 },
    height: { mobile: 27.87, desktop: 42 },
  },
  {
    icon: IconRanking,
    label: 'Ranking',
    width: { mobile: 33.85, desktop: 51 },
    height: { mobile: 27.87, desktop: 42 },
  },
  {
    icon: IconVideo,
    label: 'Video\nNft',
    width: { mobile: 27.87, desktop: 42 },
    height: { mobile: 27.87, desktop: 42 },
  },
  {
    icon: IconHowToBuy,
    label: 'How To\nBuy',
    width: { mobile: 35.63, desktop: 54 },
    height: { mobile: 27.87, desktop: 42 },
  },
  {
    icon: IconNewNFT,
    label: 'New\nNfts',
    isShowNewBadge: true,
    width: { mobile: 27.87, desktop: 42 },
    height: { mobile: 27.87, desktop: 42 },
  },
  {
    icon: IconRoadmap,
    label: 'Roadmaps',
    width: { mobile: 27.87, desktop: 42 },
    height: { mobile: 28, desktop: 42 },
  },
];

const IconNav = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-neutral-normal">
      <div className="mx-auto w-full lg:w-[1128px]">
        <div className="flex h-[92px] items-center justify-between md:h-[121.88px]">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const width = isMobile ? item.width.mobile : item.width.desktop;
            const height = isMobile ? item.height.mobile : item.height.desktop;

            return (
              <div
                key={item.label}
                className="flex h-[60px] w-[65px] flex-col items-center gap-2 md:h-[74px] md:w-auto md:justify-center md:gap-3"
              >
                <span className="relative flex-shrink-0">
                  <Icon width={width} height={height} />
                  {item.isShowNewBadge && (
                    <span className="absolute -top-[6px] left-[20px] w-[18.33] rounded-[2.67px] bg-[#ff0000] px-[2.67px] py-[1.33px] text-center font-barlow text-[5.33px] font-medium uppercase leading-[8px] text-paper md:-top-2 md:left-[17px] md:w-[41px] md:rounded-[4px] md:px-[6px] md:py-[2px] md:text-xs">
                      New
                    </span>
                  )}
                </span>
                <span className="whitespace-pre-line text-center font-barlow text-[10px] font-normal uppercase leading-3 text-paper md:whitespace-normal md:text-sm">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconNav;
