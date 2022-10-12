import type { NextPage } from 'next';

import NaverMap from '@/components/NaverMap';

import wasteBetteryCollectorLatlngs from '@/data/wasteBetteryCollectorLatlngs.json';

const Home: NextPage = () => {
  return <NaverMap latlngs={wasteBetteryCollectorLatlngs} />;
};

export default Home;
