
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { AdvancedRichTextEditor } from './AdvancedRichTextEditor';
import { postSchema, PostFormData } from '@/lib/validations';
import { Post } from '@/types/types';

interface PostFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: PostFormData) => void;
  initialData?: Post;
  isLoading?: boolean;
  title: string;
  description: string;
}

export function PostFormSheet({ 
  open, 
  onOpenChange, 
  onSubmit, 
  initialData, 
  isLoading = false,
  title,
  description
}: PostFormSheetProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || '',
      body: initialData?.body || '',
      userId: initialData?.userId || 1,
    },
  });

  const bodyValue = watch('body');

  const handleFormSubmit = (data: PostFormData) => {
    onSubmit(data);
    if (!initialData) { // Only reset for new posts
      reset();
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && !initialData) {
      reset(); // Reset form when closing for new posts
    }
    onOpenChange(newOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-[600px] w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3 py-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              {...register('title')}
              placeholder="Enter post title..."
              className={errors.title ? 'border-destructive h-8' : 'h-8'}
            />
            {errors.title && (
              <p className="text-xs text-destructive">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="userId">User ID</Label>
            <Input
              id="userId"
              type="number"
              {...register('userId', { valueAsNumber: true })}
              placeholder="Enter user ID..."
              className={errors.userId ? 'border-destructive h-8' : 'h-8'}
            />
            {errors.userId && (
              <p className="text-xs text-destructive">{errors.userId.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="body">Content</Label>
            <AdvancedRichTextEditor
              content={bodyValue}
              onChange={(content) => setValue('body', content)}
              placeholder="Write your post content..."
            />
            {errors.body && (
              <p className="text-xs text-destructive">{errors.body.message}</p>
            )}
          </div>

          <SheetFooter className="gap-2 mt-7">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => handleOpenChange(false)}
              disabled={isLoading}
              className='h-8'
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className='h-8'>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-pulse bg-current rounded-full" />
                  Saving...
                </div>
              ) : (
                initialData ? 'Update Post' : 'Create Post'
              )}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
