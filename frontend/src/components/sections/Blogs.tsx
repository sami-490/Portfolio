'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="blogs" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Mouse Icon */}
          <div className="w-8 h-12 rounded-full border-2 border-teal-400 flex justify-center pt-2 mb-2 relative">
            <div className="w-1.5 h-3 bg-teal-400 rounded-full"></div>
          </div>
          {/* Dashed Line */}
          <div className="w-px h-16 border-l-2 border-dashed border-teal-400/50 mb-6 relative">
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rotate-45"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-teal-400 mb-2">Blogs</h2>
          
          {/* Solid line with circles */}
          <div className="flex items-center w-48 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <div className="h-0.5 flex-grow bg-teal-400"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          </div>
          
          <p className="text-gray-400 font-mono text-sm tracking-wide text-center">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </div>

        <div className="w-full h-px bg-gray-700 mb-12"></div>

        {/* Blog Post Item */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* Image */}
          <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-lg overflow-hidden shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
              alt="Web Developer"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-2/3 flex flex-col pt-2">
            <h3 className="text-2xl md:text-3xl text-teal-400 font-medium mb-4">
              What does it take to become a web developer?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...
            </p>
            <a href="/blogs_document.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-sm hover:underline mb-8 inline-block w-max">
              Read More &gt;&gt;
            </a>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
              <span className="bg-gray-600/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600">
                Web Developer
              </span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">Text</span> Sami Ullah
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">Date</span> 1 Jan 2025
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">Read</span> 1 Min
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-700 mb-12"></div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a href="/blogs_document.pdf" target="_blank" rel="noopener noreferrer" className="bg-teal-400 hover:bg-teal-300 text-black font-semibold px-8 py-3 rounded-full transition-colors w-40 flex items-center justify-center">
            View More
          </a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent hover:bg-gray-800 border-2 border-teal-400 text-white font-semibold px-8 py-3 rounded-full transition-colors w-40"
          >
            Subscribe
          </button>
        </div>

        {/* Subscribe Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="bg-[#1a1d21] p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>
              
              <h3 className="text-2xl font-bold text-teal-400 mb-2">Subscribe to my Newsletter</h3>
              <p className="text-gray-400 text-sm mb-6">Get the latest articles directly in your inbox.</p>
              
              {status === 'success' ? (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center font-medium">
                  Thanks for subscribing! Check your email.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#24272c] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="bg-teal-400 text-black font-bold py-3 rounded-lg hover:bg-teal-300 disabled:opacity-50 transition-colors"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Failed to subscribe. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
