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
      <h1>{data?.body}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.name}</li>
      
      </ul>
    </div>
  );
};