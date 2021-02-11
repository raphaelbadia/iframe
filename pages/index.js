import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       

     

        <div className={styles.grid}>
        <iframe 
            title="Inline Frame Example"
            width="1600"
            height="900"
            src="https://pro.test.maiia.com">
            </iframe>
        </div>
      </main>

    


    </div>
  )
}
