
import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  body: z.string().min(1, 'Body is required').max(5000, 'Body must be less than 5000 characters'),
  userId: z.number().min(1, 'User ID is required'),
});

export type PostFormData = z.infer<typeof postSchema>;
