export type Post = {
  created_at: string;
  title: string;
  text: string;
  rating: number;
  id: number;
};

export type PostProps = Post[];
