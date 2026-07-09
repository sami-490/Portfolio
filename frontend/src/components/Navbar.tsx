'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (pathname.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOGS', href: '#blogs' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CERTIFICATES', href: '#certificates' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#16181b]/90 backdrop-blur-md border-b border-gray-800">
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="text-3xl font-light tracking-tight hover:opacity-80 transition-opacity flex items-baseline z-50">
          𝕊𝔸𝕄𝕀
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-teal-400 text-xs xl:text-sm tracking-widest font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Let's Talk Button & Hamburger */}
        <div className="flex items-center gap-4 z-50">
          <Link 
            href="https://www.linkedin.com/in/sami-ullah-b5691b2b2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block bg-teal-400 hover:bg-teal-300 text-black text-xs md:text-sm font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-sm tracking-widest transition-colors shadow-[0_0_15px_rgba(45,212,191,0.3)]"
          >
            LET&apos;S TALK
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-teal-400 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#16181b]/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-teal-400 text-sm tracking-widest font-medium transition-colors py-2 w-full text-center"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://www.linkedin.com/in/sami-ullah-b5691b2b2" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden bg-teal-400 hover:bg-teal-300 text-black text-sm font-bold px-6 py-2.5 rounded-sm tracking-widest transition-colors shadow-[0_0_15px_rgba(45,212,191,0.3)] mt-2"
          >
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </header>
  );
}