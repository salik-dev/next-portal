# 🚀 Next.js Dashboard App

A sleek, responsive dashboard built with **Next.js** to manage and view posts using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

![App Screenshot](https://next-portal-psi.vercel.app/og.png) <!-- Replace with your actual screenshot or remove this line -->

---

## 🔧 Features

- **Admin Panel** (`/admin`)  
  Create, edit, and delete posts using a **rich text editor** (Tiptap).
  
- **Public Site** (`/`)  
  Browse post titles and read full content at `/posts/[id]`.

- **Responsive UI**  
  Built using **TailwindCSS** and **shadcn/ui** components.

- **API Handling**  
  Fast, cache-enabled API calls via **React Query**.

- **User Feedback**  
  Toast notifications (success/error) powered by **Sonner**.

---

## 🛠 Tech Stack

| Category      | Tools & Libraries                                   |
| ------------- | --------------------------------------------------- |
| **Framework** | [Next.js](https://nextjs.org) v15.3.2               |
| **Styling**   | [TailwindCSS](https://tailwindcss.com) v4, [shadcn/ui](https://ui.shadcn.com) |
| **Data**      | [React Query](https://tanstack.com/query/latest) v5.80.6 |
| **Editor**    | [Tiptap](https://tiptap.dev) v2.14.0                |
| **Forms**     | [React Hook Form](https://react-hook-form.com) v7 + [Zod](https://zod.dev) v3 |
| **Validations**     | [React Hook Form] ==> validate by using zod library with react-hook-form |
| **Icons**     | [Lucide React](https://lucide.dev)                  |
| **Utils**     | [Sonner](https://sonner.emilkowal.ski), Tailwind Merge |
| **Language**  | TypeScript v5                                       |
| **Linting**   | ESLint v9                                           |

---

## ⚙️ Setup

```bash
# Clone the repository
git clone https://github.com/salik-dev/next-portal.git
cd next-portal

# Install dependencies
npm install

# Start the development server
npm run dev

## ⚙️ Need to enhancement or active functionality
In React text editor for post body field headings, list, quotes not work

