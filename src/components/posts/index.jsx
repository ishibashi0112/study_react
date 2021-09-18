import { usePosts } from "src/hooks/usePosts";
import Link from "next/link"

export const Posts = () =>{
  const {data,error, isloading,isEmpty} = usePosts();

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
      {data.map((post)=>{
        return(
          <li key={post.id}>
            <Link  href={`/post/${post.id}`}> 
              <a>{post.title} </a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}