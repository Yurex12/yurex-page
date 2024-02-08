import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';
import Spinner from '../components/createdUi/Spinner';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import user from '../assets/a.jpg';
import { HiPencil, HiStar, HiTrash } from 'react-icons/hi';
import { Post as PostProp } from '@/types';
import { useDeletePost } from '@/features/posts/useDeletePost';

function Post({
  firstName,
  lastName,
  rating,
  text,
  title,
  userName,
  id,
}: PostProp) {
  const { deletePost, isLoading } = useDeletePost();
  return (
    <Card className='w-[350px] mt-10 relative'>
      <CardHeader className='flex flex-row  space-x-3'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src={user} />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <CardTitle className='text-sm'>
          <CardDescription className='text-md text-gray-900 opacity-70 font-bold '>
            {firstName} {lastName}
          </CardDescription>
          <CardDescription className='text-md opacity-60 font-bold'>
            @{userName}
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className='px-12'>
        <h3 className='font-bold opacity-70 mb-1'>{title}</h3>
        <p className='opacity-80'>{text}</p>
      </CardContent>
      <CardFooter className='flex justify-end gap-3 px-10'>
        <Button variant='secondary' className='rounded-full p-2 opacity-80'>
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
  );
}

export default Post;
