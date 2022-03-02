import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Web3 Consortium is a website to sign a pledge to migrate to web 3.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<link rel="icon" href="" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}