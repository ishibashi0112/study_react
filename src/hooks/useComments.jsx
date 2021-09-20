import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';

export const useComments = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/comments',
     fetcher
  );
  return{
    data,
    error,
    isloading : !error && !data,
    isEmpty: data && data.length === 0
  }
};