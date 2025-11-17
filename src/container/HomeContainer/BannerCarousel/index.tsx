'use client';

import Image from 'next/image';
import Carousel from '@/components/Carousel';
import { useIsMobile } from '@/hooks/useIsMobile';
import './styles.scss';
import type { JSX } from 'react';

const BannerCarousel = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-[180px] md:h-[450px]">
      <Carousel
        dots
        autoplay
        autoplaySpeed={3000}
        arrows={false}
        slidesToShow={1}
        dotsClass="slick-dots custom-dots"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="relative h-[180px] w-full md:h-[450px]">
            <Image
              src={`/images/${isMobile ? 'banner-mobile.png' : 'banner.png'}`}
              fill
              alt={`Banner ${index}`}
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
