import Head from 'next/head';
import { Header } from 'src/components/Header';
import {Posts as PostComponent} from "src/components/posts"

const  Posts = () =>{
  return (
    <div>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <PostComponent /> 
    </div>
  )
}

export default Posts;