import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

const Repository: NextPage = () => {
  const router = useRouter()
  const { repo } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Repository { repo }</title>
        <meta name="description" content="This is a repository" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Repository '{ repo }'</h1>

        <p>repo details will go here</p>
      </main>
    </div>
  )
}

export default Repository
