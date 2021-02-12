import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <div className={styles.grid}>
        <iframe 
            title="Inline Frame Example"
            width="1000"
            height="700"
            src="https://pat.test.maiia.com">
            </iframe>
        </div>
    </>
  )
}
