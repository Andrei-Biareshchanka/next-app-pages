'use client';

import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import { API } from '../../helpers/api';
import { YMInitializer } from 'react-yandex-metrika';

const inter = Noto_Sans({ subsets: ['latin', 'cyrillic'] });

function Home() {
  return (
    <>
      <Head>
        <title>Next JS Page App</title>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta property="og:url" content={process.env.NODE_ENV} />
      </Head>
      <YMInitializer
        accounts={[]} // [] - numbers of accounts in ym
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <main className={`${inter.className}`}></main>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
