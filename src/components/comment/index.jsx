import { PostByCommentId } from "src/components/post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const CommnetsCompornent = () => {
  const{data,error,isLoading} =  useComment();

  if(isLoading){
    return <div>ローディング中です</div>
  }

  if(error){
    return <div>{error.message}</div>
  }

  return(
    <div>
      <div className="text-lg"> Created by {data.name} ({data.email}) </div>
      <h1 className="font-bold text-3xl">{data?.body}</h1>
 
      <h2 className=" text-xl font-bold mt-10 " >元の記事</h2>
      <div className="mt-2"> 
        <PostByCommentId id ={data.postId}/>
      </div>
      
    </div>
  );
};