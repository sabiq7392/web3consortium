import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {

  return (
    <>
      <Head>
				<title>Web3 Consortium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}