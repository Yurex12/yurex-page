import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditPost as createPostApi } from '../../services/apiPosts';
import toast from 'react-hot-toast';
import { Post } from '@/lib/utils';

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPost, isPending: isEditing } = useMutation({
    mutationFn: ({
      newPostData,
      id,
    }: {
      newPostData: Partial<Post>;
      id: number;
    }) => createPostApi(newPostData, id),
    onSuccess: () => {
      toast.success('Post succesfully edited');

      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { editPost, isEditing };
}
