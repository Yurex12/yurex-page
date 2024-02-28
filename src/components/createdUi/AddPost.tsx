import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { usePosts } from '@/features/posts/usePosts';
import { HiPlus } from 'react-icons/hi';

import Form from './Form';
import { useState } from 'react';

function Addpost() {
  const { isLoading } = usePosts();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={isLoading}
          className='fixed border bottom-10 right-10 bg-green-400 text-white rounded-lg shadow-2xl p-1'
        >
          <HiPlus size='30px' className='p-2' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[370px]'>
        <DialogHeader>
          <DialogTitle>Add a new post</DialogTitle>
          <DialogDescription>
            Add a new post and lets everyone see whats on your mind
          </DialogDescription>
        </DialogHeader>
        <Form setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default Addpost;
