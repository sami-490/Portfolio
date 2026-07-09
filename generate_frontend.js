const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'frontend', 'src');

const filesToCreate = {
  'components/Navbar.tsx': `export default function Navbar() {\n  return (\n    <nav className="p-4 bg-gray-900 text-white flex justify-between">\n      <div>Logo</div>\n      <div className="flex gap-4">\n        <a href="/">Home</a>\n        <a href="/about">About</a>\n        <a href="/projects">Projects</a>\n      </div>\n    </nav>\n  );\n}`,
  'components/Footer.tsx': `export default function Footer() {\n  return (\n    <footer className="p-4 bg-gray-900 text-white text-center mt-10">\n      &copy; {new Date().getFullYear()} Portfolio. All rights reserved.\n    </footer>\n  );\n}`,
  
  'components/sections/Hero.tsx': `export default function Hero() { return <section className="py-20 text-center"><h1>Welcome to my Portfolio</h1></section>; }`,
  'components/sections/Skills.tsx': `export default function Skills() { return <section className="py-20"><h2 className="text-center">Skills</h2></section>; }`,
  'components/sections/Projects.tsx': `export default function Projects() { return <section className="py-20"><h2 className="text-center">Projects</h2></section>; }`,
  'components/sections/Testimonials.tsx': `export default function Testimonials() { return <section className="py-20"><h2 className="text-center">Testimonials</h2></section>; }`,
  'components/sections/CTA.tsx': `export default function CTA() { return <section className="py-20 text-center"><h2>Let's Work Together</h2></section>; }`,
  'components/sections/Stats.tsx': `export default function Stats() { return <section className="py-20 text-center"><h2>Stats</h2></section>; }`,
  
  'hooks/useTheme.ts': `import { useState, useEffect } from 'react';\n\nexport function useTheme() {\n  const [theme, setTheme] = useState('dark');\n  useEffect(() => {\n    const root = window.document.documentElement;\n    root.classList.remove('light', 'dark');\n    root.classList.add(theme);\n  }, [theme]);\n  return [theme, setTheme];\n}`,
  
  'app/about/page.tsx': `export default function About() { return <div className="p-10"><h1>About Me</h1></div>; }`,
  'app/projects/page.tsx': `export default function Projects() { return <div className="p-10"><h1>My Projects</h1></div>; }`,
  'app/skills/page.tsx': `export default function Skills() { return <div className="p-10"><h1>My Skills</h1></div>; }`,
  'app/blog/page.tsx': `export default function Blog() { return <div className="p-10"><h1>Blog</h1></div>; }`,
  'app/contact/page.tsx': `export default function Contact() { return <div className="p-10"><h1>Contact Me</h1></div>; }`,
  'app/admin/page.tsx': `export default function Admin() { return <div className="p-10"><h1>Admin Dashboard</h1></div>; }`,
  
  'lib/utils.ts': `import { clsx, type ClassValue } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`,
  
  'types/index.ts': `export interface Project {\n  id: string;\n  title: string;\n  description: string;\n}`
};

for (const [filePath, content] of Object.entries(filesToCreate)) {
  const fullPath = path.join(baseDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
}
console.log('Frontend files generated successfully!');
