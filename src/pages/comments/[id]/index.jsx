import { useRouter } from 'next/dist/client/router';
import { CommnetsCompornent } from 'src/components/comment';
import { Header } from 'src/components/Header';
import { API_URL } from 'src/utils/const';
import { SWRConfig } from 'swr';

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((commnet) =>(
    {params: {id: commnet.id.toString()}}
  ));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps =  async (ctx) => {
  const {id} = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if(!comment.ok){
    return{
      notFound:true
    }
  }
  const commentData = await comment.json();

  return {
    props:{
      fallback:{
        [COMMENT_API_URL]: commentData,
      }
    },
  };
};

const CommentsId = (props) =>{
  const {fallback} = props;

  return (
    <div>
      <Header />
      <SWRConfig value={{fallback}}>
        <CommnetsCompornent/>
      </SWRConfig>
    </div>
  );
};

export default CommentsId;