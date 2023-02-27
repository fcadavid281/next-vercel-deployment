import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabian Cadavid</title>
        <meta name="description" content="Home App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a style={{ color: 'blueviolet' }} href='/about'>About</a>
        </h1>
        <p className={styles.desctipcion} >
          Get started by editing {''}
          <code className={styles.code}></code>
        </p>
      </main>
    </>
  )
}
