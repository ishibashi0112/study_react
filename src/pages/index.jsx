import Head from 'next/head'
import { Header } from 'src/components/Header'

const  Index = (props) => {
  return (
    <div>
      <Head>
        <title>index page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <h1>Next.jsで学ぶreact講座</h1>
      <p>json placeholderでAPIを叩いてみるよ</p>
    </div>
  )
}

export default Index;
