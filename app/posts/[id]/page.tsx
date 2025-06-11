import { notFound } from 'next/navigation';
import { Post } from '@/types/types';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Fetch post from API
async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) return null;
  return res.json();
}

// SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params to get the id
  const post = await getPost(id);
  return {
    title: post?.title ?? 'Post Not Found',
    description: post?.body?.substring(0, 150) ?? '',
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params to get the id
  const post = await getPost(id);
  if (!post) return notFound();

  const imageUrl = `https://picsum.photos/800/400?random=${post.id}`;

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      {/* Breadcrumb */}
      <Breadcrumb className="text-lg font-medium mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/posts">Posts</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{post.title.slice(0, 20)}...</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Image */}
      <div className="relative w-full h-64 rounded-md overflow-hidden mb-6">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{post.body}</p>
      <span className="text-sm text-muted-foreground">Posted by User {post.userId}</span>
    </main>
  );
}