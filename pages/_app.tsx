import "../styles/globals.css";
import "../styles/home.scss";
import "../styles/contacts.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
