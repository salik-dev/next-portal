
import { Post } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PostsTableProps {
  posts: Post[];
  onDelete: (id: number) => void;
  onEdit: (post: Post) => void;
  isDeleting?: boolean;
}

export function PostsTable({ posts, onDelete, onEdit, isDeleting = false }: PostsTableProps) {
  const truncateText = (text: string, maxLength: number = 60) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    return plainText.length > maxLength 
      ? `${plainText.substring(0, maxLength)}...` 
      : plainText;
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b bg-muted/30">
                <TableHead className="w-16 h-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  ID
                </TableHead>
                <TableHead className="h-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Title
                </TableHead>
                <TableHead className="h-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Content
                </TableHead>
                <TableHead className="w-20 h-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  User
                </TableHead>
                <TableHead className="w-24 h-10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post, index) => (
                <TableRow 
                  key={post.id} 
                  className={`border-b border-border/40 hover:bg-muted/20 transition-colors ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                  }`}
                >
                  <TableCell className="px-3 py-3">
                    <Badge variant="outline" className="text-xs font-mono">
                      {post.id}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-3 py-3 max-w-[250px]">
                    <div className="font-medium text-sm leading-tight">
                      {truncateText(post.title, 45)}
                    </div>
                  </TableCell>
                  <TableCell className="px-3 py-3 max-w-[300px]">
                    <div className="text-sm text-muted-foreground leading-tight line-clamp-9">
                      {truncateText(post.body, 70)}
                    </div>
                  </TableCell>
                  <TableCell className="px-3 py-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.userId}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-3 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(post)}
                        className="h-7 w-7 p-0 hover:bg-blue-50 hover:text-blue-600"
                        title="Edit post"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={isDeleting}
                            className="h-7 w-7 p-0 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                            title="Delete post"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Post</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete &quot;{truncateText(post.title, 50)}&quot;? 
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="h-8">Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => onDelete(post.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-8"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
