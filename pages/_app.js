import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div >
    <Head>
      <title>Create Next documents</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main >
      <nav>
        <a href="/" >home</a>
        <a href="/rien" >rien</a>
        <a href="/documents" >documents</a>
    
  </nav><Component {...pageProps} />
  </main></div>)
}

export default MyApp
