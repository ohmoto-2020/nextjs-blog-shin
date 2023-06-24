import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { Layout } from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import Link from "next/link"
import { getPostsData } from "@/lib/post"

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return{
//     props: {

//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>私はエンジニアです</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, thumbnail, date }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utilStyles.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
