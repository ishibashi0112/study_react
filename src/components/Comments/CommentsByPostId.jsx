import Link from "next/link" 
import { useCommentsByPostsId } from "src/hooks/useFetchArray"
 

export const CommentsByPostId = (props)=>{
  const {data,error,isLoading,isEmpty} = useCommentsByPostId(props.id)

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
      <h2>Comments</h2>
      <ol>
        {data?.map((comment)=>{
          return(
            <li key={comment.id}>
              <Link  href={`/comments/${comment.id}`}> 
                <a>{comment.body} </a>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}