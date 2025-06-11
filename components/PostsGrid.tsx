'use client';

import { useState } from 'react';
import { Post } from '@/types/types';
import { PostCard } from './PostCard';
import { Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostsGridProps {
  posts: Post[];
}

export function PostsGrid({ posts }: PostsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const visiblePosts = posts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="h-72 bg-muted rounded-lg animate-pulse"
            />
          ))}
      </div>

      {visibleCount < posts.length && !loading && (
        <div className="flex justify-center mt-6">
          <Button
            variant="ghost"
            onClick={handleLoadMore}
            className="group gap-2 text-muted-foreground hover:text-primary"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            Load More
          </Button>
        </div>
      )}

      {loading && (
        <div className="flex justify-center mt-6">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </div>
      )}
    </div>
  );
}
