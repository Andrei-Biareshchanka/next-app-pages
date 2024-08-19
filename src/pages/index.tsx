'use client';

import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';
import {
  Button,
  Htag,
  Input,
  P,
  Rating,
  Tag,
  Textarea,
} from '@/components/index';
import { useState } from 'react';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import { API } from '../../helpers/api';

const inter = Noto_Sans({ subsets: ['latin', 'cyrillic'] });

function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Head>
        <title>Next JS Page App</title>
      </Head>
      <main className={`${inter.className}`}>
        <Htag tag="h1">Title</Htag>
        <Button appearance="primary" arrow="down">
          btn 1
        </Button>
        <Button appearance="ghost" arrow="right">
          btn 2
        </Button>
        <P size="s">some text s</P>
        <P size="m">some text m</P>
        <P size="l">some text l</P>
        <Tag size="s" color="ghost">
          ghost
        </Tag>
        <Tag size="m" color="red">
          red
        </Tag>
        <Tag size="m" color="green">
          green
        </Tag>
        <Tag size="m" color="grey">
          grey
        </Tag>
        <Tag size="m" color="primary">
          primary
        </Tag>
        <Rating rating={rating} setRating={setRating} isEditable />
        <Input placeholder="test" />
        <Textarea placeholder="test 2" />
      </main>
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
