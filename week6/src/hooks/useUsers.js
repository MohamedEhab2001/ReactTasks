import { useQuery } from 'react-query';
import { fetchUsers } from '../services/apiService';

export const useUsers = () => {
  return useQuery('users', fetchUsers, {
    staleTime: Infinity,
  });
};
