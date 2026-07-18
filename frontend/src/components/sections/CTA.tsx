'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

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
    <section id="contact" className="py-24 bg-inbio-bg border-t border-[#1a1c1e] font-montserrat">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
            Contact With Me
          </h2>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Personal Card */}
          <div className="lg:col-span-5 shadow-inbio-raised p-6 rounded-2xl border border-[#1a1c1e] relative group flex flex-col h-full justify-between">
            <div>
              {/* Image Container */}
              <div className="w-full aspect-16/10 rounded-xl overflow-hidden bg-[#1e2125] relative mb-6 shadow-inbio-sunken border border-[#1d2024]">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
                  alt="Contact Me"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Personal Details */}
              <h3 className="text-2xl font-bold text-inbio-text mb-2">
                Sami Ullah
              </h3>
              <p className="text-inbio-text-muted font-inter text-sm mb-6">
                Full-Stack Developer
              </p>
              
              <p className="text-inbio-text-muted font-inter text-sm leading-relaxed mb-8">
                I am available for freelance work and full-time positions. Connect with me to discuss your project needs and bring your ideas to life!
              </p>
              
              {/* Quick Details */}
              <div className="space-y-4 font-inter text-sm text-inbio-text-muted mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-inbio-text font-semibold font-montserrat uppercase tracking-wider text-[11px]">Email:</span>
                  <a href="mailto:samiullahshafiq14@gmail.com" className="hover:text-inbio-pink transition-colors break-all">samiullahshafiq14@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-inbio-text font-semibold font-montserrat uppercase tracking-wider text-[11px]">Location:</span>
                  <span>Pakistan</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[#1a1c1e]">
              <p className="text-[11px] tracking-[2px] text-inbio-text font-semibold uppercase mb-4">
                Find with me
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://github.com/sami-490" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 shadow-inbio-raised p-8 rounded-2xl border border-[#1a1c1e]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-inter">
              
              {/* Name Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="text-inbio-text font-montserrat uppercase tracking-wider text-[11px] font-semibold mb-3">Your name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-inbio-sunken border border-transparent rounded-lg px-4 py-3.5 text-inbio-text outline-none focus:border-inbio-pink placeholder-inbio-text-muted/40 text-sm w-full"
                />
              </div>
              
              {/* Email Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-inbio-text font-montserrat uppercase tracking-wider text-[11px] font-semibold mb-3">Your email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-inbio-sunken border border-transparent rounded-lg px-4 py-3.5 text-inbio-text outline-none focus:border-inbio-pink placeholder-inbio-text-muted/40 text-sm w-full"
                />
              </div>
              
              {/* Message Field */}
              <div className="flex flex-col text-left mb-4">
                <label htmlFor="message" className="text-inbio-text font-montserrat uppercase tracking-wider text-[11px] font-semibold mb-3">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow-inbio-sunken border border-transparent rounded-lg px-4 py-3.5 text-inbio-text outline-none focus:border-inbio-pink placeholder-inbio-text-muted/40 text-sm w-full resize-none"
                />
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="shadow-inbio-raised text-inbio-pink font-bold py-4 rounded-lg hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-full font-montserrat uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}