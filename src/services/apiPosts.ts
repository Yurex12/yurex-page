import { supabase } from './supabase';

export async function fetchPosts<T>(): Promise<T> {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error(error);
    throw new Error('posts could not be found');
  }

  return data as T;
}
