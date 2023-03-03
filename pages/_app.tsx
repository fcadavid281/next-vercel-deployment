import { NextPage } from "next";
import { ReactElement } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )

  return getLayout(<Component {...pageProps} />);
}
