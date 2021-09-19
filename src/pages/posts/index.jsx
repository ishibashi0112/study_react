import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import {Posts as PostCompornent} from "src/components/posts"

const  Posts = () =>{
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <PostCompornent /> 
    </div>
  )
}

export default Posts;