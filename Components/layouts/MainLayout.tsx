// import styles from '../Components/layouts/'
import styles from "../../Components/layouts/MainLayout.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { FC } from "react";

export const MainLayout: FC = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fabian Cadavid</title>
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
