
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '@/lib/api';
import { toast } from 'sonner';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: postsApi.getPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postsApi.getPost(id),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postsApi.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post created successfully!');
    },
    onError: (error) => {
      toast.error('Failed to create post');
      console.error('Create post error:', error);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postsApi.updatePost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['post', data.id] });
      toast.success('Post updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update post');
      console.error('Update post error:', error);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postsApi.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post deleted successfully!');
    },
    onError: (error) => {
      toast.error('Failed to delete post');
      console.error('Delete post error:', error);
    },
  });
};
