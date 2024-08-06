'use client';

import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';
import { Buutton, Htag, P, Rating, Tag } from '@/components/index';
import { useState } from 'react';
import { withLayout } from '@/layout/Layout';

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
        <Buutton appearance="primary" arrow="down">
          btn 1
        </Buutton>
        <Buutton appearance="ghost" arrow="right">
          btn 2
        </Buutton>
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
      </main>
    </>
  );
}

export default withLayout(Home);
