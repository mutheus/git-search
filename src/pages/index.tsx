import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub App</title>
        <meta name="description" content="Search for githubers" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Hello, World!</h1>
      </main>
    </div>
  )
}
