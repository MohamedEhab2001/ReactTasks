import { useQuery } from 'react-query';
import { fetchPostsByUser } from '../services/apiService';

export const useUserPosts = (selectedUserId) => {
  return useQuery(['posts', selectedUserId], () => fetchPostsByUser(selectedUserId), {
    enabled: !!selectedUserId,
    staleTime: 5 * 60 * 1000, 
    cacheTime: 5 * 60 * 1000, 
    refetchOnMountOrArgChange: true,
  });
};
