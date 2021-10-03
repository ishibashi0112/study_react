import Link from "next/link"
import { useComments } from "src/hooks/useFetchArray";

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
    <ul className="space-y-2 ">
      {data.map((comment)=>{
        return(
          <li key={comment.id} className="border-b pb-2">
            <Link  href={`/comments/${comment.id}`} prefetch={false}> 
              <a className="block hover:text-blue-500">{comment.body} </a>
            </Link>
          </li>
        )
      })}
    </ul >
  )
}