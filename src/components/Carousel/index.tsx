'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Slider from 'react-slick';

import { cn } from '@/lib/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { FC, ReactNode, JSX } from 'react';

interface CarouselProps {
  children: ReactNode;
  title?: string;
  slidesToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  className?: string;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll?: number;
    };
  }[];
  dotsClass?: string;
  variableWidth?: boolean;
  classNameArrows?: string;
}

const Carousel: FC<CarouselProps> = ({
  children,
  title,
  slidesToShow = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  dots = false,
  arrows = true,
  className = '',
  responsive,
  dotsClass,
  variableWidth = false,
  classNameArrows,
}): JSX.Element => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    arrows: false,
    responsive,
    dotsClass,
    variableWidth,
  };

  return (
    <div className={className}>
      <div
        className={cn('flex items-center justify-between', {
          'mb-2': title || arrows,
        })}
      >
        {title && (
          <h3 className="text-[24px] font-black uppercase italic leading-8 text-primary-normal md:text-[32px] md:leading-[48px]">
            {title}
          </h3>
        )}
        {arrows && (
          <div className={cn('flex gap-2', classNameArrows)}>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-subdued text-paper-60 transition first-line:flex hover:bg-gray-700 md:h-10 md:w-10 md:rounded-xl"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-subdued text-paper-60 transition hover:bg-gray-700 md:h-10 md:w-10 md:rounded-xl"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
