import { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "../styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Meteor E-Commerce</title>
        <link
          rel="shortcut icon"
          href="/img/icon-192.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-192.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled-Components!"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
