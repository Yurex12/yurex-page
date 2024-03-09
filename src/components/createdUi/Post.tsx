import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';
import Spinner from './Spinner';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { HiPencil, HiStar, HiTrash } from 'react-icons/hi';
import { Post as PostProp } from '../../lib/utils';
import { useDeletePost } from '@/features/posts/useDeletePost';
import { useState } from 'react';

import AddEditPost from '@/components/createdUi/AddEditPost';

function Post({ postData }: { postData: PostProp }) {
  const { firstname, lastname, rating, text, title, username, id, image } =
    postData;
  const { deletePost, isLoading } = useDeletePost();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Card className='w-[300px] sm:w-[350px] mt-10 relative'>
        <CardHeader className='flex flex-row space-x-3'>
          <Avatar className='h-12 w-12 border-2'>
            <AvatarImage src={image} />
            <AvatarFallback>
              {firstname.charAt(0) + lastname.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className='text-sm'>
            <CardDescription className='text-md font-bold '>
              {firstname} {lastname}
            </CardDescription>
            <CardDescription className='text-md opacity-60 font-bold'>
              @{username}
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className='px-12'>
          <h3 className='font-bold opacity-70 mb-1'>{title}</h3>
          <p className='opacity-80 break-words'>{text}</p>
        </CardContent>
        <CardFooter className='flex justify-end gap-3 px-10'>
          <Button
            variant='secondary'
            className='rounded-full p-2 opacity-80'
            onClick={() => setShowDialog((cur) => !cur)}
          >
            <HiPencil size={20} />
          </Button>
          <Button
            variant='secondary'
            className='rounded-full p-2 opacity-80 text-red-400'
            onClick={() => deletePost(id)}
          >
            {isLoading ? <Spinner /> : <HiTrash size={20} />}
          </Button>
        </CardFooter>

        <p className='flex items-center top-[-20px] right-[10px] space-x-1 absolute bg-muted-foreground text-white  rounded-sm px-3 py-2'>
          <span> {rating} </span>
          <HiStar color='gold' />
        </p>
      </Card>

      {showDialog && (
        <AddEditPost postToEdit={postData} showDialog={showDialog} />
      )}
    </>
  );
}

export default Post;
