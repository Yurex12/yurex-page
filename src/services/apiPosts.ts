import { supabase } from './supabase';

export async function fetchPosts<T>(): Promise<T> {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error(error);
    throw new Error('posts could not be found');
  }

  return data as T;
}

export async function deletePost(id: number) {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('posts could not be found');
  }
}
