import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {

  return (
    <>
      <Head>
				<title>Web3 Consortium</title>
				<meta name="description" content="YuMeta is marketplace or gallery especially for NFTs" />
				<link rel="icon" href="" />
			</Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}