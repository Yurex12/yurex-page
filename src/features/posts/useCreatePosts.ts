import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditPost as createPostApi } from '@/services/apiPosts';
import toast from 'react-hot-toast';

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending: isCreating } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success('New post succesfully created');

      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { createPost, isCreating };
}
