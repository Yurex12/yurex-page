import { TPostSchema, postSchema } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormRow from './FormRow';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePost } from '@/features/posts/useCreatePosts';
import Spinner from './Spinner';

type FormProps = {
  setOpen: (state: boolean) => void;
};

function Form({ setOpen }: FormProps) {
  const { createPost, isCreating } = useCreatePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPostSchema>({
    resolver: zodResolver(postSchema),
  });

  function onSubmit(data: TPostSchema) {
    createPost(
      { ...data, image: data.image[0] },
      {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
      }
    );
    // const image = typeof data.image === 'string' ? data.image : data.image[0];

    // console.log(image, image.name);

    // const imageName = `${Math.random()}-${
    //   (data?.image[0] as { name: string })?.name
    // }`
    //   .replace(' ', '-')
    //   .replace('/', '');

    // createPost(
    //   { ...data, image },
    //   {
    //     onSuccess: () => {
    //       setOpen(false);
    //       reset();
    //     },
    //   }
    // );
    // createPost(data, {
    //   onSuccess: () => {
    // setOpen(false);
    //     reset();
    //   },
    // });

    console.log(data);
  }
  return (
    <form
      className='grid w-full items-center gap-4 p-4  h-[500px] overflow-y-scroll'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label='photo' error={errors?.image?.message}>
        <Input
          {...register('image')}
          type='file'
          id='image'
          disabled={isCreating}
          accept='image/*'
        />
      </FormRow>
      <FormRow label='username' error={errors?.username?.message}>
        <Input
          {...register('username')}
          type='text'
          disabled={isCreating}
          defaultValue='johndoe'
          id='username'
        />
      </FormRow>

      <FormRow label='firstname' error={errors?.firstname?.message}>
        <Input
          {...register('firstname')}
          type='text'
          disabled={isCreating}
          defaultValue='John'
          id='firstname'
        />
      </FormRow>

      <FormRow label='lastname' error={errors?.lastname?.message}>
        <Input
          {...register('lastname')}
          type='text'
          disabled={isCreating}
          defaultValue='Doe'
          id='lastname'
        />
      </FormRow>

      <FormRow label='rating' error={errors?.rating?.message}>
        <Input
          {...register('rating', {
            setValueAs: (value) => Number(value),
          })}
          disabled={isCreating}
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
          disabled={isCreating}
          id='title'
        />
      </FormRow>

      <FormRow label='text' error={errors?.text?.message}>
        <Textarea
          placeholder="Tell us what's on your mind"
          className='resize-none'
          {...register('text')}
          disabled={isCreating}
          id='text'
        />
      </FormRow>

      {isCreating ? (
        <Button>
          <Spinner className='border-t-white' />
        </Button>
      ) : (
        <Button type='submit'>Add Post</Button>
      )}
    </form>
  );
}

export default Form;
