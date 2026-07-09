'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <footer className="p-4 bg-gray-900 text-white text-center mt-10">
      &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
    </footer>
  );
}