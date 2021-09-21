import Link from "next/link"
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props)=>{
  const {data,error,isLoading,isEmpty} = usePost(props.id)

  if(isLoading){
    return <div>ローディング中です</div>
  }

  if(error){
    return <div>{error.message}</div>
  }

  if(isEmpty){
    return <div>データは空です</div>
  }

  return (
    <div>
      <h2>元の記事</h2>
      <Link href={`/posts/${data?.id}`}> 
        <a>{data?.title} </a>
      </Link>
    </div>
  )
}