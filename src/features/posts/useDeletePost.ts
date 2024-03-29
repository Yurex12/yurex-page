import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost as deletePostApi } from '../../services/apiPosts';
import toast from 'react-hot-toast';

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success('post deleted succesfully');
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });

  return { deletePost, isLoading };
}
