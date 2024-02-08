import { useQuery } from '@tanstack/react-query';

import { fetchPosts } from '@/services/apiPosts';
import { PostProps } from '@/types';

export function usePosts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts<PostProps>,
  });

  return { posts, error, isLoading };
}
