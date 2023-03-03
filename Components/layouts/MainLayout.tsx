// import styles from '../Components/layouts/'
import styles from "../../Components/layouts/MainLayout.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren<{}> {
  title?: string;
}

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || "Fabian Cadavid"}</title>
        <meta name="description" content="Home App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.grid}>{children}</div>
      </main>
    </div>
  );
};
