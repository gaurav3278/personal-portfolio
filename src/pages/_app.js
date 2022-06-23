import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel='icon' href='/icons8-portfolio-16.png'/>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
