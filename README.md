<div align="center">

# 🚀 Sami Ullah — Portfolio

**A modern, full-stack developer portfolio built with Next.js & Express.js**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** — Sleek, responsive design with TailwindCSS v4 and smooth animations
- 📱 **Fully Responsive** — Optimized for all screen sizes (mobile, tablet, desktop)
- 🔐 **Admin Dashboard** — Secure JWT-authenticated admin panel for content management
- 📝 **Blog System** — Create, edit, and manage blog posts
- 💼 **Projects Showcase** — Highlight your best work with rich project cards
- 📬 **Contact Form** — Working contact form with email notifications via Nodemailer
- 🛡️ **Type-Safe** — Built with TypeScript for reliable, maintainable code
- ⚡ **Server-Side Rendering** — Next.js App Router for optimal performance and SEO

---

## 🛠️ Tech Stack

| Layer       | Technology                                           |
| ----------- | ---------------------------------------------------- |
| **Frontend** | Next.js 16, React 19, TypeScript, TailwindCSS 4     |
| **Backend**  | Node.js, Express.js 5, Mongoose                     |
| **Database** | MongoDB                                              |
| **Auth**     | JWT (JSON Web Tokens), bcrypt.js                     |
| **Email**    | Nodemailer (SMTP)                                    |
| **Styling**  | TailwindCSS 4, PostCSS                              |

---

## 📁 Project Structure

```
Portfolio/
├── frontend/                  # Next.js App Router application
│   ├── src/
│   │   ├── app/               # Pages & API routes
│   │   │   ├── about/         # About page
│   │   │   ├── admin/         # Admin dashboard
│   │   │   ├── api/           # API routes (auth, contact)
│   │   │   ├── blog/          # Blog pages
│   │   │   ├── contact/       # Contact page
│   │   │   ├── projects/      # Projects page
│   │   │   └── skills/        # Skills page
│   │   ├── components/        # Reusable React components
│   │   │   ├── admin/         # Admin-specific components
│   │   │   └── sections/      # Page section components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   └── types/             # TypeScript type definitions
│   └── public/                # Static assets (images, PDFs)
│
├── backend/                   # Express.js REST API
│   └── src/
│       ├── config/            # Database & app configuration
│       ├── controllers/       # Request handlers
│       ├── middleware/        # Auth & validation middleware
│       ├── models/            # Mongoose schemas
│       ├── routes/            # API route definitions
│       └── server.js          # Application entry point
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **MongoDB** instance — local or [MongoDB Atlas](https://www.mongodb.com/atlas)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sami-490/Portfolio.git
cd Portfolio
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Edit `.env` with your actual credentials:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the backend server:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file from the example:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
JWT_SECRET=your_super_secret_jwt_key_here
ADMIN_USER=admin
ADMIN_PASS=your_admin_password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

### Backend → [Render](https://render.com/) / [Railway](https://railway.app/)

1. Connect your GitHub repository
2. Set environment variables from your `.env` file
3. Set the start command: `node src/server.js`

### Frontend → [Vercel](https://vercel.com/)

1. Import your GitHub repository on Vercel
2. Set environment variables from your `.env.local` file
3. Set `NEXT_PUBLIC_API_URL` to your deployed backend URL
4. Vercel will auto-build and deploy on every push

---

## 📸 Screenshots

> Coming soon — deploy the project and add screenshots here!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Sami Ullah](https://github.com/sami-490)**

</div>
