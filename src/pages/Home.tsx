import { usePosts } from '@/features/posts/usePosts';

function Home() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>error loading data</p>;
  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
