import Head from "next/head"
import styles from "./layout.module.css"
import utilStyles from "@/styles/utils.module.css"
import Link from "next/link"

export const Layout = ({ children, home }) => {
  const name = "Shin Code"

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/profile.png" className={utilStyles.borderCircle} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">ホームへ戻る</Link>}
    </div>
  )
}
