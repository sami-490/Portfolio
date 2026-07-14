<div align="center">

# 🚀 Sami Ullah — Full Stack Developer Portfolio

**A production-grade, full-stack developer portfolio showcasing modern web development practices**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[**Live Demo**](#-live-demo) • [**Get Started**](#-getting-started) • [**Architecture**](#-architecture) • [**License**](#-license)

</div>

---

## 📋 Overview

This is a **professional, full-stack portfolio website** designed to showcase development skills, projects, and expertise. Built with cutting-edge technologies, it demonstrates real-world full-stack development practices including:

- **Modern Frontend**: Next.js 16 with React 19, TypeScript, and TailwindCSS v4
- **Robust Backend**: Express.js with JWT authentication and MongoDB
- **Secure Admin Dashboard**: Authenticated content management system
- **Production-Ready**: Optimized for performance, SEO, and deployment

---

## ✨ Key Features

### 🎨 **Frontend Excellence**
- Modern, responsive UI/UX built with TailwindCSS v4
- Dark mode support with smooth transitions
- Glassmorphism design patterns and micro-animations
- Optimized for all devices (mobile, tablet, desktop)
- Server-side rendering for better SEO

### 🔐 **Secure Admin Dashboard**
- JWT-based authentication system
- Secure content management interface
- Password hashing with bcrypt.js
- Protected API routes

### 📝 **Dynamic Content Management**
- Create, edit, and manage blog posts
- Projects showcase with rich metadata
- Skills inventory management
- Real-time content updates

### 💌 **Contact & Communication**
- Functional contact form with validation
- Email notifications via Nodemailer
- SMTP configuration for sending emails
- Professional email templates

### ⚡ **Performance & Security**
- Type-safe code with TypeScript
- Optimized API routes
- CORS protection
- Environment variable management
- Production-ready error handling

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router for SSR/SSG |
| **React 19** | UI component library |
| **TypeScript** | Type safety and developer experience |
| **TailwindCSS 4** | Utility-first CSS framework |
| **React Icons** | Icon library for UI elements |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js 5** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure authentication |
| **bcrypt.js** | Password hashing |
| **Nodemailer** | Email sending (SMTP) |

---

## 📁 Project Structure

```
Portfolio/
│
├── 📂 frontend/                    # Next.js Frontend Application
│   ├── src/
│   │   ├── 📂 app/                 # App Router pages & routes
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── about/              # About page
│   │   │   ├── projects/           # Projects showcase
│   │   │   ├── blog/               # Blog articles
│   │   │   ├── skills/             # Skills listing
│   │   │   ├── contact/            # Contact form
│   │   │   ├── admin/              # Admin dashboard
│   │   │   └── api/                # API routes (auth, contact, blog)
│   │   │
│   │   ├── 📂 components/          # Reusable React Components
│   │   │   ├── 📂 admin/           # Admin-specific components
│   │   │   ├── 📂 sections/        # Page section components
│   │   │   ├── 📂 ui/              # Shared UI components
│   │   │   └── Navigation.tsx      # Main navigation
│   │   │
│   │   ├── 📂 hooks/               # Custom React Hooks
│   │   ├── 📂 lib/                 # Utility functions & helpers
│   │   ├── 📂 types/               # TypeScript type definitions
│   │   ├── 📂 styles/              # Global styles
│   │   └── layout.tsx              # Root layout
│   │
│   ├── 📂 public/                  # Static assets
│   │   ├── images/                 # Project screenshots
│   │   ├── pdfs/                   # Resume/CV
│   │   └── favicons/               # Favicon assets
│   │
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── .env.example
│
├── 📂 backend/                     # Express.js REST API
│   ├── src/
│   │   ├── 📂 config/              # Configuration files
│   │   │   └── database.ts         # MongoDB connection
│   │   │
│   │   ├── 📂 models/              # Mongoose Schemas
│   │   │   ├── User.ts             # User schema
│   │   │   ├── Project.ts          # Project schema
│   │   │   └── Blog.ts             # Blog post schema
│   │   │
│   │   ├── 📂 controllers/         # Request handlers
│   │   │   ├── authController.ts
│   │   │   ├── projectController.ts
│   │   │   └── blogController.ts
│   │   │
│   │   ├── 📂 middleware/          # Express middleware
│   │   │   ├── authMiddleware.ts   # JWT verification
│   │   │   └── validation.ts       # Input validation
│   │   │
│   │   ├── 📂 routes/              # API route definitions
│   │   │   ├── auth.ts
│   │   │   ├── projects.ts
│   │   │   └── blog.ts
│   │   │
│   │   └── server.ts               # Application entry point
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── .gitignore
├── .prettierrc
├── LICENSE
└── README.md
```

### 🔄 **How It Works**

1. **Frontend**: Next.js serves dynamic pages with React components styled using TailwindCSS
2. **API Routes**: Next.js API routes handle authentication, form submissions, and file uploads
3. **Backend**: Express.js REST API manages database operations and business logic
4. **Database**: MongoDB stores user data, projects, blog posts, and authentication tokens
5. **Authentication**: JWT tokens secure the admin dashboard and protected endpoints
6. **Email**: Nodemailer sends contact form submissions and notifications

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **MongoDB** instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas) cloud)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/sami-490/Portfolio.git
cd Portfolio
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```bash
cp .env.example .env
```

Configure environment variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/portfolio
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password  # Google App Password (not regular password)

# Admin Credentials
ADMIN_USER=admin
ADMIN_PASS=your_secure_password
```

Start backend server:

```bash
npm start
# Runs on http://localhost:5000
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Configure frontend variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# JWT & Admin
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Credentials (for login)
NEXT_PUBLIC_ADMIN_USER=admin
NEXT_PUBLIC_ADMIN_PASS=your_secure_password

# Email Configuration
NEXT_PUBLIC_EMAIL_USER=your_email@gmail.com
```

Start frontend development server:

```bash
npm run dev
# Opens http://localhost:3000
```

### 4️⃣ Verify Installation

- ✅ Frontend: http://localhost:3000
- ✅ Backend API: http://localhost:5000/api
- ✅ Admin Dashboard: http://localhost:3000/admin

---

## 📸 Live Demo

**Coming Soon!** — The portfolio will be deployed to:
- Frontend: [Vercel](https://vercel.com)
- Backend: [Render](https://render.com) or [Railway](https://railway.app)

---

## 🌐 Deployment

### Frontend → Vercel

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api.com
   JWT_SECRET=your_secret_key
   ```
4. Click "Deploy" — Vercel auto-builds and deploys

### Backend → Render / Railway

#### Option 1: Render

1. Connect GitHub repo to [Render](https://render.com)
2. Create new Web Service
3. Set environment variables
4. Start command: `node src/server.ts`

#### Option 2: Railway

1. Connect GitHub repo to [Railway](https://railway.app)
2. Add environment variables
3. Railway auto-detects and deploys Node.js app

### Database → MongoDB Atlas

1. Create free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Get connection string
3. Set `MONGO_URI` in backend `.env`

---

## 🔒 Security Best Practices

✅ **JWT Authentication** — Secure token-based auth  
✅ **Password Hashing** — bcrypt.js for secure storage  
✅ **Environment Variables** — Sensitive data in `.env` files  
✅ **CORS Protection** — Cross-origin resource sharing configured  
✅ **Input Validation** — Server-side validation on all inputs  
✅ **Error Handling** — Graceful error responses without exposing internals  

---

## 📚 Available Scripts

### Frontend

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Backend

```bash
npm start         # Start development server (localhost:5000)
npm run build     # Compile TypeScript
npm test          # Run tests (if configured)
```

---

## 🤝 Contributing

This is a personal portfolio project, but improvements are welcome!

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📖 API Documentation

### Authentication Endpoints

**POST** `/api/auth/login`
- Login with admin credentials
- Returns JWT token

**POST** `/api/auth/verify`
- Verify JWT token validity

### Projects Endpoints

**GET** `/api/projects`
- Fetch all projects

**POST** `/api/projects`
- Create new project (admin only)

**PUT** `/api/projects/:id`
- Update project (admin only)

**DELETE** `/api/projects/:id`
- Delete project (admin only)

### Blog Endpoints

**GET** `/api/blog`
- Fetch all blog posts

**POST** `/api/blog`
- Create blog post (admin only)

**PUT** `/api/blog/:id`
- Update blog post (admin only)

### Contact Endpoints

**POST** `/api/contact`
- Submit contact form
- Sends email notification

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
Check MONGO_URI is correct
Verify MongoDB service is running
For Atlas: Ensure IP is whitelisted
```

### Email Not Sending
```
Enable "Less secure app access" (Gmail)
Or use Google App Password
Verify EMAIL_USER and EMAIL_PASS are correct
```

### Port Already in Use
```bash
# Linux/Mac: Find process using port 5000
lsof -i :5000
kill -9 <PID>

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Support & Questions

For questions or issues, please open a [GitHub Issue](https://github.com/sami-490/Portfolio/issues).

---

<div align="center">

**Made with ❤️ by [Sami Ullah](https://github.com/sami-490)**

⭐ If this project helped you, please consider giving it a star!

</div>