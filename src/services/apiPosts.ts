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

export async function createEditPost(newPost: Partial<Post>, id?: number) {
  const hasImagePath = newPost.image?.startsWith?.(supabaseUrl);

  const imageName = `${uuidv4()}-${newPost?.image?.name}`;

  const imagePath = hasImagePath
    ? newPost.image
    : `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  let query = supabase.from('posts');

  //Create a new post
  if (!id) query = query.insert([{ ...newPost, image: imagePath }]);

  //to edit
  if (id) {
    query = query.update({ ...newPost, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();

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
