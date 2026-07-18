'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    image: "/blog_1.png",
    category: "QUOTE",
    readTime: "4 min read",
    title: "The Easiest Way to Become a Successful Writer and Authors."
  },
  {
    id: 2,
    image: "/blog_2.png",
    category: "TECHNICIAN",
    readTime: "4 min read",
    title: "The Quickest Way to Deliver Your Message? Make It Visual."
  },
  {
    id: 3,
    image: "/blog_3.png",
    category: "DEVELOPMENT",
    readTime: "4 min read",
    title: "Why We Don't Have Technical Interviews for Technical Roles at Buffer."
  }
];

export default function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(blogPosts[0]);

  const openModal = (blog: typeof blogPosts[0]) => {
    setActiveBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className="py-24 bg-inbio-bg border-t border-[#1a1c1e] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 font-montserrat">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            VISIT MY BLOG AND KEEP YOUR FEEDBACK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text mb-4">
            My Blog
          </h2>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => openModal(post)}
              className="group cursor-pointer shadow-inbio-raised p-6 rounded-3xl border border-[#1a1c1e] flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#1e2125] mb-6 shadow-inbio-sunken border border-[#1d2024]">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-inbio-pink text-[11px] font-bold tracking-widest uppercase">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-inbio-text-muted text-xs font-inter font-medium">
                  <FaRegClock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] text-inbio-text font-bold leading-snug group-hover:text-inbio-pink transition-colors duration-300">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-montserrat">
          <div className="bg-[#212428] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-[#1a1c1e]">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#212428] shadow-inbio-raised rounded-full flex items-center justify-center text-inbio-pink hover:bg-inbio-pink hover:text-white transition-colors duration-300 border border-[#1a1c1e]"
            >
              ✕
            </button>

            {/* Left side Image */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src={activeBlog.image} 
                alt={activeBlog.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Right side Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-inbio-pink text-xs font-bold tracking-widest uppercase">
                  {activeBlog.category}
                </span>
                <span className="text-inbio-text-muted text-xs font-inter flex items-center gap-1">
                  <FaRegClock /> {activeBlog.readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-inbio-text mb-6">
                {activeBlog.title}
              </h3>
              <p className="text-inbio-text-muted font-inter text-sm leading-relaxed mb-6">
                This is a placeholder for the full article content. In a complete application, this would contain the full text of the blog post, discussing the topic in depth and providing valuable insights to the reader.
              </p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="self-start text-inbio-pink text-sm font-bold uppercase tracking-wider hover:underline"
              >
                Close Window &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
