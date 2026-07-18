'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;

  return (
    <footer className="w-full bg-inbio-bg border-t border-[#1a1c1e] pt-24 pb-12 px-6 md:px-12 font-montserrat">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Upper Footer: Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand & Socials (Colspan 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Logo + Avatar Flex Container */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1a1c1e] shadow-inbio-sunken shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt="Sami Ullah Avatar" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <Link href="/" className="text-2xl font-bold tracking-widest text-inbio-text group">
                SAMI<span className="text-inbio-pink group-hover:animate-pulse">.</span>
              </Link>
            </div>
            
            {/* Social Icons */}
            <p className="text-[11px] tracking-[2px] text-inbio-text font-bold uppercase mb-5 font-montserrat">
              Find with me
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
              <Link 
                href="https://github.com/sami-490" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (Colspan 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left lg:pl-10">
            <h4 className="text-[13px] tracking-[2px] text-inbio-pink font-bold uppercase mb-6">
              Quick Link
            </h4>
            <ul className="flex flex-col gap-4 font-inter text-sm text-inbio-text-muted font-medium">
              <li>
                <Link href="#home" className="hover:text-inbio-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-inbio-pink transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-inbio-pink transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#resume" className="hover:text-inbio-pink transition-colors">Resume</Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-inbio-pink transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (Colspan 2) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[13px] tracking-[2px] text-inbio-pink font-bold uppercase mb-6">
              Resources
            </h4>
            <ul className="flex flex-col gap-4 font-inter text-sm text-inbio-text-muted font-medium">
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">System Status</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Over Right</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Developers (Colspan 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[13px] tracking-[2px] text-inbio-pink font-bold uppercase mb-6">
              Developers
            </h4>
            <ul className="flex flex-col gap-4 font-inter text-sm text-inbio-text-muted font-medium">
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">API Reference</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Support Forums</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-inbio-pink transition-colors">Open Source</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#1a1c1e] my-4"></div>

        {/* Lower Footer: Copyright Bar */}
        <div className="w-full pt-8 flex flex-col items-center gap-3 text-center font-inter text-sm text-inbio-text-muted">
          <p>
            &copy; {new Date().getFullYear()}. All rights reserved by <span className="text-inbio-text font-medium font-montserrat">SAMI ULLAH</span>.
          </p>
          <p className="text-xs">
            Design by <span className="text-inbio-pink font-semibold font-montserrat">SAMI ULLAH</span>
          </p>
        </div>

      </div>
    </footer>
  );
}