import "../styles/globals.css";
import "../styles/home.scss";
import "../styles/contacts.scss";

import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { PROFILE_PIC_URL } from "../data/profile";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Евгений Родионов - Frontend разработчик</title>
        <meta
          name="description"
          content="Любимый фронтендер твоего любимого фронтендера"
        />
        <meta property="og:image" content={PROFILE_PIC_URL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter initial>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
