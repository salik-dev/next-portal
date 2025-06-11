'use client';

import { useRouter } from 'next/navigation';
import { Post } from '@/types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const excerpt = post.body.length > 150 ? `${post.body.substring(0, 150)}...` : post.body;

  // Generate consistent fake image
  const imageUrl = `https://picsum.photos/400/240?random=${post.id}`;

  const handleClick = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <div className="group perspective-1000 cursor-pointer" onClick={handleClick}>
      <Card className="h-full transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl group-hover:shadow-primary/20 border-border/50 bg-gradient-">
        {/* Image Section */}
        <div className="relative overflow-hidden w-full h-48 -mt-6">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="100%"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge
            variant="secondary"
            className="absolute -top-[1px] -right-4 bg-background/90 backdrop-blur-sm shadow-lg border border-4 rounded-none w-24 rotate-34 bg-white"
          >
            <span className='ml-6'>ID: {post.id}</span>
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200 -mt-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3 leading-reaxed mb-4 -mt-5">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              User {post.userId}
            </Badge>
            <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
