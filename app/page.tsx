'use client';

import NavBar from "@/components/ui/nav-bar";
import { usePosts } from "@/hooks/usePosts";
import { PostsGrid } from '@/components/PostsGrid';

const Homepage = () => {
  const { data: posts } = usePosts();

  return (
    <div>
      <NavBar />
      <PostsGrid posts={posts || []} />
    </div>
  );
};

export default Homepage;
