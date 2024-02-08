import { usePosts } from '@/features/posts/usePosts';
import Post from './Post';

import Loader from '@/components/createdUi/Loader';

function Home() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <Loader />;
  if (error) return <p>error loading data</p>;
  return (
    <div className='grid grid-cols-1 gap-1  place-items-center md:grid-cols-2 lg:grid-cols-3'>
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Home;
