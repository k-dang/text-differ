import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Comparator from '@/components/comparator/comparator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Text Difference</title>
        <meta name="description" content="Text Difference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Text Difference</h1>
      </header>
      <div className={styles.main}>
        <Comparator />
      </div>
    </>
  );
}
