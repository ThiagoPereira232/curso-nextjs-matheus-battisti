import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas, Calçados, boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você!"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello World nextjs</h1>
      </div>
    </>
  )
}
