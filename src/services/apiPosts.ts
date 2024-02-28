import { Post } from '@/lib/utils';
import { supabase, supabaseUrl } from './supabase';

import { v4 as uuidv4 } from 'uuid';

export async function fetchPosts<T>(): Promise<T> {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error(error);
    throw new Error('posts could not be found');
  }

  return data as T;
}

export async function createPost(newPost: Partial<Post>) {
  const imageName = `${uuidv4()}-${newPost.image.name}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  const { data, error } = await supabase
    .from('posts')
    .insert([{ ...newPost, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('post could not be created');
  }

  const { error: storageError } = await supabase.storage
    .from('images')
    .upload(imageName, newPost.image);

  if (storageError) {
    await supabase.from('posts').delete().eq('id', data.id);
  }

  return data;
}

export async function deletePost(id: number) {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('posts could not be uploaded');
  }
}
