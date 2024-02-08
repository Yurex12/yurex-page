export type Post = {
  created_at: string;
  title: string;
  text: string;
  rating: number;
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
};

export type PostProps = Post[];
