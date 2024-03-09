import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export type Post = {
  id: number;
  created_at: string;
  title: string;
  text: string;
  rating: number;
  firstname: string;
  lastname: string;
  username: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | any;
};

export type PostProps = Post[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const createPostSchema = (isEditingSession: boolean = true) => {
  return z.object({
    image: isEditingSession
      ? z.any()
      : z
          .any()
          .refine((file) => file?.[0], 'Cannot be empty')
          .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Max image size is 3MB.`
          )
          .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            'Only .jpg, .jpeg, .png and .webp formats are supported.'
          ),
    username: z.string().min(3, {
      message: 'username must be at least 3 characters',
    }),
    firstname: z.string().min(1, {
      message: 'firstname cannot be empty',
    }),
    lastname: z.string().min(1, {
      message: 'lastname cannot be empty',
    }),
    rating: z
      .number()
      .min(1, {
        message: 'Rating must be greater than 0',
      })
      .max(10, {
        message: 'Rating must be less than 10',
      }),
    text: z
      .string()
      .min(10, {
        message: 'text must be at least 10 characters.',
      })
      .max(100, {
        message: 'text must not be longer than 100 characters.',
      }),
    title: z
      .string()
      .min(3, {
        message: 'title must be at least 3 characters',
      })
      .max(15, {
        message: 'title must be more than 15 characters',
      }),
  });
};

const postSchema = createPostSchema();

export type TPostSchema = z.infer<typeof postSchema>;
