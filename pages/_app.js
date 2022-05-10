import React from 'react';
import Head from 'next/head';
import packageInfo from '../package.json';
import stylesheet from '../styles/style.styl';


export default function SyntaxApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={packageInfo.description} />
        <meta name='theme-color' content='#F1C15D' />
        <meta charSet='utf-8' />
        <meta property='og:description' content={packageInfo.description} />
        <meta
          property='og:image'
          content='https://syntax.fm/static/syntax-banner.png'
        />
        <link rel='icon' href='https://syntax.fm/static/favicon.png' />
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
