🚀 Next.js Dashboard App
A sleek, responsive dashboard built with Next.js to manage and view posts using the JSONPlaceholder API.

🔧 Features
Admin Panel (/admin): Create, edit, and delete posts with a rich text editor.

Public Site (/): View post titles and details at /posts/[id].

Responsive UI: Built with TailwindCSS and shadcn/ui.

API Handling: Fast requests & caching via React Query.

Feedback: Toast notifications for actions (success/error).

🛠 Tech Stack
Framework: Next.js (v15.3.2)

Styling: TailwindCSS v4, shadcn/ui

Data: React Query v5.80.6

Editor: Tiptap v2.14.0

Forms: React Hook Form v7 + Zod v3

Icons: Lucide React

Utils: Sonner, Tailwind Merge

Language: TypeScript v5

Linting: ESLint v9

⚙️ Setup
bash
Copy
Edit
git clone https://github.com/salik-dev/next-portal.git
cd next-portal
npm install
npm run dev
Visit: http://localhost:3000

📦 Scripts
npm run dev – Start dev server

npm run build – Build for production

npm run start – Run production build

npm run lint – Lint code

🌐 Demo
Live: next-portal-psi.vercel.app

Repo: github.com/salik-dev/next-portal

📌 Notes
No authentication required

Posts use mock data from JSONPlaceholder

Need to enhancement:
some react editor body field functionality not working like (headings, list, quote)
