Next.js Dashboard App
A simple dashboard app built with Next.js to manage and view posts using the JSONPlaceholder API.
Features

Admin Dashboard (/admin): Create, view, edit, and delete posts with a rich text editor.
Public Site (/): View post titles and excerpts, with details at /posts/[id].
Responsive UI: Clean design with TailwindCSS and shadcn/ui components.
Data Handling: React Query for fast API calls and caching.
Error Feedback: Toast notifications for user actions.

Tech Stack

Framework: Next.js (v15.3.2)
Styling: TailwindCSS (v4), shadcn/ui
Data: React Query (v5.80.6)
Editor: Tiptap (v2.14.0)
Forms: React Hook Form (v7.56.4), Zod (v3.25.46)
Icons: Lucide React
Utilities: Sonner, Tailwind Merge
Types: TypeScript (v5)
Linting: ESLint (v9)

Setup

Clone the repo:git clone https://github.com/salik-dev/next-portal.git
cd next-portal


Install dependencies:npm install


Start the app:npm run dev

Open http://localhost:3000.

Scripts

npm run dev: Run dev server.
npm run build: Build for production.
npm run start: Start production server.
npm run lint: Lint code.

Demo
Live: https://next-portal-psi.vercel.app/Repo: https://github.com/salik-dev/next-portal
Notes

Posts are mock data from JSONPlaceholder API.
