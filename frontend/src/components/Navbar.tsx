'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (pathname.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'HOME', href: '/#home' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'RESUME', href: '/#resume' },
    { name: 'CLIENTS', href: '/#clients' },
    { name: 'TESTIMONIAL', href: '/#testimonials' },
    { name: 'BLOG', href: '/#blog' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#212428]/90 backdrop-blur-md border-b border-[#1a1c1e] shadow-lg">
      <nav className="px-6 py-5 flex justify-between items-center max-w-7xl mx-auto w-full font-montserrat">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity flex items-baseline z-50 text-[#c4cfde] group">
          SAMI<span className="text-inbio-pink group-hover:animate-pulse">.</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[#c4cfde] hover:text-inbio-pink text-[13px] tracking-widest font-semibold transition-all duration-300 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Let's Talk Button & Hamburger */}
        <div className="flex items-center gap-4 z-50">
          <Link 
            href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-transparent text-inbio-pink text-xs font-bold px-6 py-3 rounded-md tracking-wider transition-all duration-300 uppercase shadow-inbio-raised hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white"
          >
            LET&apos;S TALK
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-11 h-11 rounded-full shadow-inbio-raised flex items-center justify-center text-[#c4cfde] hover:text-inbio-pink transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#212428] z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-24 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#c4cfde] hover:text-inbio-pink text-sm tracking-widest font-semibold py-4 border-b border-[#1a1c1e] transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 text-center bg-transparent text-inbio-pink text-xs font-bold px-6 py-4 rounded-md tracking-wider transition-all duration-300 uppercase shadow-inbio-raised hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </div>
    </header>
  );
}