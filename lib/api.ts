const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // replace with your backend URL

export const postsApi = {
  getPosts: async () => {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  },

  getPost: async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
  },

  createPost: async (data: { title: string; body: string; userId: number }) => {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create post');
    return res.json();
  },

  updatePost: async (data: { id: number; title: string; body: string; userId: number }) => {
    const res = await fetch(`${BASE_URL}/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
      }),
    });
    if (!res.ok) throw new Error('Failed to update post');
    return res.json();
  },

  deletePost: async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete post');
    return id;
  },
};
