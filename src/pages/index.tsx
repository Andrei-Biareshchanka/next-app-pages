import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';

const inter = Noto_Sans({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS Page App</title>
      </Head>
      <main className={`${inter.className}`}>hello</main>
    </>
  );
}
