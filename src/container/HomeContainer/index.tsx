import IconNav from '@/container/HomeContainer/IconNav';
import BannerCarousel from '@/container/HomeContainer/BannerCarousel';
import NFTCollections from '@/container/HomeContainer/NFTCollections';
import type { JSX } from 'react';

const HomeContainer = (): JSX.Element => (
  <>
    <BannerCarousel />
    <IconNav />
    <NFTCollections />
  </>
);

export default HomeContainer;
