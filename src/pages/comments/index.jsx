import Head from 'next/head';
import { Header } from 'src/components/Header';
import {Comments as CommentComponent} from "src/components/Comments"

const  Comments = () =>{
  return (
    <div>
      <Head>
        <title>Comments page</title>
      </Head>
      <Header />
      <CommentComponent /> 
    </div>
  )
}

export default Comments;