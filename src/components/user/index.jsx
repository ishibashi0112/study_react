import { PostsByUserId } from "src/components/posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const UserCompornent = () => {
  const{data,error,isLoading} =  useUser();

  if(isLoading){
    return <div>ローディング中です</div>
  }

  if(error){
    return <div>{error.message}</div>
  }

  return(
    <div>
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <h2 className=" text-xl font-bold mt-10 ">詳細</h2>
      <ul className="list-disc text-xl mt-2">
        <li>メール：{data.email}</li>
        <li>アカウント名{data.username}</li>
        <li>住所：{data.address.city}</li>
        <li>電話番号：{data.phone}</li>
        <li>WEBサイト：{data.website}</li>
        <li>勤務先：{data.company.name}</li>
      </ul>
      <h2 className=" text-xl font-bold mt-10 ">投稿</h2>
      <div className="mt-2">
        <PostsByUserId id={data.id}/>
      </div>
    </div>
  );
};