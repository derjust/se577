import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Repositories: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Repositories</title>
        <meta name="description" content="All my repositories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Repositories</h1>
      </main>
    </div>
  )
}

export default Repositories
