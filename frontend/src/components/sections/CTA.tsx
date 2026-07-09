'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please check if the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-20 flex flex-col justify-between min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full flex-grow flex flex-col items-center">
        
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
          
          <h2 className="text-4xl md:text-5xl font-semibold text-teal-400 mb-2">Contact</h2>
          
          {/* Solid line with circles */}
          <div className="flex items-center w-48 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <div className="h-0.5 flex-grow bg-teal-400"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          </div>
          
          <p className="text-gray-400 font-mono text-sm tracking-wide text-center">
            I&apos;m currently available for freelance work
          </p>
        </div>

        {/* Send Me A Message Decorative Box */}
        <div className="border-2 border-teal-400 rounded-xl px-12 py-4 mb-16 inline-block text-center shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <h3 className="text-teal-400 text-2xl font-mono tracking-wider">Send Me A Message</h3>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full mb-20 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-8 mb-10">
            
            {/* Name Field */}
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-teal-400 text-sm font-medium mb-3">Your name *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-teal-400 py-2 text-white outline-none transition-colors placeholder-gray-500 text-sm"
              />
            </div>
            
            {/* Email Field */}
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-teal-400 text-sm font-medium mb-3">Your email *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-teal-400 py-2 text-white outline-none transition-colors placeholder-gray-500 text-sm"
              />
            </div>
          </div>
          
          {/* Message Field */}
          <div className="w-full flex flex-col mb-12">
            <label htmlFor="message" className="text-teal-400 text-sm font-medium mb-3">Your message *</label>
            <input 
              type="text"
              id="message"
              name="message"
              required
              placeholder="Enter your needs"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 focus:border-teal-400 py-2 text-white outline-none transition-colors placeholder-gray-500 text-sm"
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-teal-400 hover:bg-teal-300 text-black font-semibold px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2 w-56 shadow-[0_0_15px_rgba(45,212,191,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-[#16181b] py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
        <div className="text-center md:text-left">
          © 2025 Sami Ullah. All rights reserved.
        </div>
        
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a>
        </div>
        
        <div className="flex gap-4 items-center">
          <a href="#" className="w-8 h-8 rounded-full bg-teal-400/20 text-teal-400 flex items-center justify-center hover:bg-teal-400 hover:text-black transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-teal-400/20 text-teal-400 flex items-center justify-center hover:bg-teal-400 hover:text-black transition-colors">
            <FaLinkedin />
          </a>
        </div>
        
        <div className="text-center md:text-right">
          Design By <a href="#" className="text-teal-400 hover:underline font-medium">Sami Ullah</a>
        </div>
      </footer>
    </section>
  );
}