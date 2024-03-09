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

import { useState } from 'react';
import { Post } from '@/lib/utils';
import CreateEditForm from './CreateEditForm';

type AddPostProps = {
  showDialog?: boolean;
  postToEdit?: Post | object;
};

function AddEditPost({ postToEdit = {}, showDialog = false }: AddPostProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { id: editId, ...editValues } = postToEdit;

  const isEditSession = Boolean(editId);

  const { isLoading } = usePosts();
  const [open, setOpen] = useState(isEditSession ? showDialog : false);

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
      <DialogContent className='w-[320px] sm:w-[370px]'>
        <DialogHeader>
          <DialogTitle>
            {isEditSession ? 'Edit post' : 'Add a new post'}
          </DialogTitle>
          <DialogDescription>
            {isEditSession
              ? 'start editing... :)'
              : ' Add a new post and lets everyone see whats on your mind'}
          </DialogDescription>
        </DialogHeader>
        <CreateEditForm
          setOpen={setOpen}
          isEditSession={isEditSession}
          editValues={editValues}
          editId={editId}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddEditPost;
