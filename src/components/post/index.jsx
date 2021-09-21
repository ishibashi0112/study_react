import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { CommentsByPostId } from 'src/components/Comments/CommentsByPostId';
import { UserByUserId } from 'src/components/user/UserByUserId';
import { usePost } from "src/hooks/usePost";

export const Post = () =>{
  const router = useRouter();
  const {data,error,isLoading} = usePost(router.query.id);
 
  if(isLoading){
    return <div>ローディング中です</div>
  }

  if(error){
    return <div>{error.message}</div>
  }

  return (      
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId id={data?.userId} />
        <CommentsByPostId id={data?.id} />
      </div>
    </div>
  );
};