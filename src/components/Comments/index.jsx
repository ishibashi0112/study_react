import { useComments } from "src/hooks/useComments";
import Link from "next/link"

export const Comments = () =>{
  const {data,error, isloading,isEmpty} = useComments();

  if(isloading){
    return <div>ローディング中です</div>
  }

  if(error){
    return <div>{error.message}</div>
  }

  if(isEmpty){
    return <div>データは空です</div>
  }

  return (      
    <ol>
      {data.map((comment)=>{
        return(
          <li key={comment.id}>
            <Link  href={`/comments/${comment.id}`}> 
              <a>{comment.body} </a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}