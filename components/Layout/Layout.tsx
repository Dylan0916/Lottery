import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Layout(props: Readonly<Props>) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Lottery</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}
