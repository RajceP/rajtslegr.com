import Hero from '@/components/hero/Hero';
import MetaData from '@/components/meta-data/MetaData';
import Timeline from '@/components/timeline/Timeline';
import { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <>
    <MetaData title="Petr Rajtslegr" />
    <Hero />
    <Timeline />
  </>
);

export default IndexPage;
