import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About me</title>
        <meta name="description" content="About me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About me</h1>
      </main>
    </div>
  )
}

export default About
