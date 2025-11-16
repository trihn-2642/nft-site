import Image from 'next/image';
import Carousel from '@/components/Carousel';

const NFTDropsCalendar = () => {
  return (
    <div className="w-full lg:w-[600px]">
      <Carousel
        title="NFT Drops Calendar"
        autoplay
        arrows
        autoplaySpeed={3000}
        slidesToShow={1}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <Image
            key={index}
            src="/images/state-nft-drops.png"
            alt="state nft drops"
            width={600}
            height={240}
            className="h-[171px] cursor-pointer rounded-xl transition-transform duration-300 hover:scale-110 md:h-[240px]"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default NFTDropsCalendar;
