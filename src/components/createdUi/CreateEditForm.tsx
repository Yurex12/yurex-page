import { Post, TPostSchema, createPostSchema } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormRow from './FormRow';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePost } from '@/features/posts/useCreatePosts';

import Spinner from './Spinner';
import { useEditPost } from '@/features/posts/useEditPost';

type FormProps = {
  setOpen: (state: boolean) => void;
  isEditSession: boolean;
  editValues: Partial<Post>;
  editId: number;
};

function CreateEditForm({
  setOpen,
  isEditSession,
  editValues,
  editId,
}: FormProps) {
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();

  const isWorking = isCreating || isEditing;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPostSchema>({
    resolver: zodResolver(createPostSchema(isEditSession)),

    defaultValues: isEditSession ? editValues : {},
  });

  function onSubmit(data: TPostSchema) {
    if (isEditSession) {
      data?.image[0]?.name === undefined
        ? (data.image = editValues.image)
        : (data.image = data.image[0]);

      editPost(
        { newPostData: data, id: editId },
        {
          onSuccess: () => {
            setOpen(false);
            reset();
          },
        }
      );
    } else {
      createPost(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            setOpen(false);
            reset();
          },
        }
      );
    }
  }
  return (
    <form
      className='grid w-full items-center gap-4 p-4  h-[500px] overflow-y-scroll'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow
        label='image'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        error={errors?.image?.message}
      >
        <Input
          {...register('image')}
          type='file'
          id='image'
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label='username' error={errors?.username?.message}>
        <Input
          {...register('username')}
          type='text'
          disabled={isWorking}
          defaultValue='johndoe'
          id='username'
        />
      </FormRow>
      <FormRow label='firstname' error={errors?.firstname?.message}>
        <Input
          {...register('firstname')}
          type='text'
          disabled={isWorking}
          defaultValue='John'
          id='firstname'
        />
      </FormRow>
      <FormRow label='lastname' error={errors?.lastname?.message}>
        <Input
          {...register('lastname')}
          type='text'
          disabled={isWorking}
          defaultValue='Doe'
          id='lastname'
        />
      </FormRow>
      <FormRow label='rating' error={errors?.rating?.message}>
        <Input
          {...register('rating', {
            setValueAs: (value) => Number(value),
          })}
          disabled={isWorking}
          defaultValue={1}
          id='rating'
          type='number'
        />
      </FormRow>
      <FormRow label='title' error={errors?.title?.message}>
        <Input
          {...register('title')}
          type='text'
          placeholder='start typing...'
          disabled={isWorking}
          id='title'
        />
      </FormRow>
      <FormRow label='text' error={errors?.text?.message}>
        <Textarea
          placeholder="Tell us what's on your mind"
          className='resize-none'
          {...register('text')}
          disabled={isWorking}
          id='text'
        />
      </FormRow>
      {isWorking ? (
        <Button disabled>
          <Spinner className='border-t-background' />
        </Button>
      ) : (
        <Button type='submit'>
          {isEditSession ? 'Edit Post' : 'Add Post'}
        </Button>
      )}
    </form>
  );
}

export default CreateEditForm;
