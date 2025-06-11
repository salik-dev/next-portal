
'use client';

import { useState } from 'react';
import { usePosts, useDeletePost, useCreatePost, useUpdatePost } from '@/hooks/usePosts';
import { PostsTable } from '@/components/PostTable';
import { PostFormSheet } from '@/components/PostFormSheet';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { PostFormData } from '@/lib/validations';
import { Post } from '@/types/types';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { data: posts, isLoading, error } = usePosts();
  const deletePostMutation = useDeletePost();
  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();

  const handleDelete = (id: number) => {
    deletePostMutation.mutate(id);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleCreateSubmit = async (data: PostFormData) => {
    try {
      const createData = {
        title: data.title,
        body: data.body,
        userId: data.userId,
      };
      await createPostMutation.mutateAsync(createData);
      setIsCreateSheetOpen(false);
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  const handleUpdateSubmit = async (data: PostFormData) => {
    if (!editingPost) return;

    try {
      const updateData = {
        id: editingPost.id,
        title: data.title,
        body: data.body,
        userId: data.userId,
      };
      await updatePostMutation.mutateAsync(updateData);
      setEditingPost(null);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your posts with full CRUD capabilities.
          </p>
        </div>

        <Button onClick={() => setIsCreateSheetOpen(true)} className="gap-2 h-8">
          <Plus className="h-4 w-4" />
          Create Post
        </Button>
      </div>

      <Breadcrumb className="text-lg font-medium mb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/admin">Posts</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-2">
              <div className="h-3 w-3 bg-primary rounded-full animate-pulse" />
              <div className="h-3 w-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="h-3 w-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <p className="text-muted-foreground animate-pulse">Loading posts...</p>
          </div>
        </div>
      )}

      {error && (
        <ErrorMessage
          title="Failed to load posts"
          message="We couldn't fetch the posts. Please try again later."
        />
      )}

      {posts && (
        <PostsTable
          posts={posts}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isDeleting={deletePostMutation.isPending}
        />
      )}

      <PostFormSheet
        open={isCreateSheetOpen}
        onOpenChange={setIsCreateSheetOpen}
        onSubmit={handleCreateSubmit}
        isLoading={createPostMutation.isPending}
        title="Create New Post"
        description="Fill in the details below to create a new post."
      />

      <PostFormSheet
        open={!!editingPost}
        onOpenChange={(open) => !open && setEditingPost(null)}
        onSubmit={handleUpdateSubmit}
        initialData={editingPost || undefined}
        isLoading={updatePostMutation.isPending}
        title="Edit Post"
        description="Update the post details below."
      />
    </div>
  );
}
