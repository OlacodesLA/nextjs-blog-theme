import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Main from '../components/Main';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Construction from '../assets/SCHOOL.png';
import Cone from '../assets/cone.png';
import Image from 'next/image';

export default function Index({ posts, globalData }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <Image
        src={Construction}
        alt="Construction"
        className="rounded border-2 border-violet-400 mx-2"
        layout="intrinsic"
        data-aos="fade-right"
        data-aos-duration="3000"
        width={755}
        height={354}
      />
      <div className="pt-6 text-center">
        <Image
          src={Cone}
          alt="Cone"
          className="rounded border-2 border-violet-400 pt-10"
          layout="intrinsic"
          data-aos="zoom-in"
          data-aos-duration="2000"
          width={60}
          height={73.8}
        />
        <p className="text-2xl  text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600 dark:bg-gradient-to-r dark:from-blue-200 dark:to-blue-100">
          This Site Is Under Construction!
        </p>
      </div>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
