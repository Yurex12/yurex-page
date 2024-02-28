import { useQuery } from '@tanstack/react-query';

import { fetchPosts } from '@/services/apiPosts';
import { PostProps } from '@/lib/utils';

export function usePosts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts<PostProps>,
  });

  const posts = data ? [...data].reverse() : [];

  return { posts, error, isLoading };
}
