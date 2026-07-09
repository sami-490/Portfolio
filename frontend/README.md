# Sami Ullah - Personal Portfolio & Developer Blog 🚀

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

A modern, highly interactive, and fully responsive personal portfolio website built to showcase my skills, projects, certifications, and development process. It includes a fully functional contact form and a secure Admin Dashboard for managing content.

## ✨ Features

- **Modern UI/UX:** Built with Tailwind CSS featuring dark mode aesthetics, glassmorphism, and smooth micro-animations.
- **Responsive Design:** Flawless experience across desktops, tablets, and mobile devices (includes a custom mobile hamburger menu).
- **Secure Admin Dashboard:** JWT-authenticated admin portal for content management.
- **Integrated Email System:** Contact form submissions are instantly routed to my inbox via Nodemailer and Next.js API Routes.
- **Vercel Ready:** Consolidated backend and frontend into Next.js API routes for zero-config serverless deployment.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Email:** Nodemailer
- **Authentication:** JSON Web Tokens (JWT)

## 🚀 Getting Started

Follow these steps to run the portfolio locally.

### 1. Clone the repository
```bash
git clone https://github.com/sami-490/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add the following variables:
```env
# JWT Authentication Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Credentials
ADMIN_USER=admin
ADMIN_PASS=admin123

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply import the repository, configure your environment variables in the Vercel dashboard, and deploy!

---
*Designed and built by [Sami Ullah](https://github.com/samiullahshafiq14)*
