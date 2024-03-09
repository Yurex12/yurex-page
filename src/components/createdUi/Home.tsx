import { usePosts } from '@/features/posts/usePosts';
import Post from './Post';

import Loader from '@/components/createdUi/Loader';
import ErrorMessage from './ErrorMessage';
import EmptyPage from './EmptyPage';

function Home() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage text={error?.message} />;
  if (posts.length === 0 && !error) return <EmptyPage />;
  return (
    <div className='grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-1 place-items-center'>
      {posts?.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  );
}

export default Home;
