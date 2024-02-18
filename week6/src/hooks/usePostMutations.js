import { useMutation, useQueryClient } from 'react-query';
import { addPost, editPost, deletePost } from '../services/apiService';

export const usePostMutations = (selectedUserId) => {
  const queryClient = useQueryClient();

  const addMutation = useMutation(({ userId, title, body }) => addPost(userId, title, body), {
    onSuccess: (newPost) => {
      const currentPosts = queryClient.getQueryData(['posts', selectedUserId]);
      if (currentPosts) {
        queryClient.setQueryData(['posts', selectedUserId], [...currentPosts, newPost]);
      }
    },
  });

  const editMutation = useMutation(({ postId, title, body }) => editPost(postId, title, body), {
    onSuccess: (updatedPost) => {
      const currentPosts = queryClient.getQueryData(['posts', selectedUserId]);
      if (currentPosts) {
        const updatedPosts = currentPosts.map(post => post.id === updatedPost.id ? updatedPost : post);
        queryClient.setQueryData(['posts', selectedUserId], updatedPosts);
      }
    },
  });
  const deleteMutation = useMutation(postId => deletePost(selectedUserId, postId), {
    onSuccess: (_, postId) => {
        const currentPosts = queryClient.getQueryData(['posts', selectedUserId]);
        if (currentPosts) {
            const updatedPosts = currentPosts.filter(post => post.id !== postId);
            queryClient.setQueryData(['posts', selectedUserId], updatedPosts);
        }
    },
});

  return { addMutation, editMutation, deleteMutation };
};
