import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel='icon' href='https://img.icons8.com/fluency/48/undefined/portfolio.png' type='image/x-icon' />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
