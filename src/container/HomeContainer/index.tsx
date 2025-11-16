import IconNav from '@/container/HomeContainer/IconNav';
import BannerCarousel from '@/container/HomeContainer/BannerCarousel';
import NFTCollections from '@/container/HomeContainer/NFTCollections';

const HomeContainer = () => {
  return (
    <>
      <BannerCarousel />
      <IconNav />
      <NFTCollections />
    </>
  );
};

export default HomeContainer;
