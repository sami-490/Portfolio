'use client';
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "James Anderson",
    role: "Chief Executive Officer",
    company: "TechVenture Inc.",
    image: "/testimonial_1.png",
    project: "Full-Stack Web Application",
    platform: "via Fiverr",
    date: "Jan 2024 – Apr 2024",
    rating: 5,
    text: "Sami delivered an outstanding full-stack web application that exceeded our expectations. His attention to detail in both frontend design and backend architecture was remarkable. The project was completed on time, communication was excellent throughout, and the final product was polished and production-ready. Highly recommended for any serious web development project.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "BrightEdge Digital",
    image: "/testimonial_2.png",
    project: "E-Commerce Store Setup",
    platform: "via Upwork",
    date: "Jun 2024 – Aug 2024",
    rating: 5,
    text: "Working with Sami on our Shopify store was an incredible experience. He understood our brand vision perfectly and translated it into a beautiful, conversion-optimized online store. The custom theme modifications and product page layouts he created significantly improved our bounce rate and sales. His expertise in e-commerce is truly exceptional.",
  },
  {
    name: "Michael Torres",
    role: "Startup Founder",
    company: "NexaLaunch Studios",
    image: "/testimonial_3.png",
    project: "React Dashboard & API",
    platform: "via Direct Contact",
    date: "Oct 2024 – Dec 2024",
    rating: 5,
    text: "Sami built us a custom React dashboard with a Node.js backend that handles real-time data beautifully. His code quality is top-notch — clean, well-documented, and easy to maintain. He also proactively suggested UX improvements that we hadn't considered. I will definitely be hiring him again for our next project phase.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 bg-inbio-bg border-t border-[#1a1c1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 font-montserrat">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
            Testimonial
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto shadow-inbio-raised rounded-3xl border border-[#1a1c1e] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

            {/* Left Column — Photo & Info */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col items-center lg:items-start text-center lg:text-left bg-[#1e2024]/40">
              {/* Portrait */}
              <div className="w-56 h-64 md:w-64 md:h-72 rounded-2xl overflow-hidden shadow-inbio-sunken border border-[#1a1c1e] mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>

              {/* Person Info */}
              <p className="text-inbio-pink text-[11px] font-bold tracking-widest uppercase mb-2">
                {testimonial.company}
              </p>
              <h3 className="text-xl font-extrabold text-inbio-text mb-1">
                {testimonial.name}
              </h3>
              <p className="text-inbio-text-muted text-sm font-inter">
                {testimonial.role}
              </p>
            </div>

            {/* Right Column — Quote & Content */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col relative">

              {/* Quote Mark & Nav Row */}
              <div className="flex items-start justify-between mb-8">
                {/* Large Quote Mark */}
                <span className="text-[#2a2d32] text-8xl md:text-9xl font-serif leading-none select-none -mt-4">
                  &#8220;&#8221;
                </span>

                {/* Navigation Arrows */}
                <div className="flex gap-3 shrink-0 mt-2">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-lg shadow-inbio-raised border border-[#1a1c1e] flex items-center justify-center text-inbio-text-muted hover:text-inbio-pink transition-colors duration-300"
                  >
                    <FaChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-lg shadow-inbio-raised border border-[#1a1c1e] flex items-center justify-center text-inbio-text-muted hover:text-inbio-pink transition-colors duration-300"
                  >
                    <FaChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Project Title */}
              <h4 className="text-2xl md:text-3xl font-extrabold text-inbio-text mb-3 leading-tight">
                {testimonial.project}
              </h4>

              {/* Platform & Date + Stars */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-inbio-text-muted text-sm font-inter">
                  {testimonial.platform} – {testimonial.date}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-inbio-text-muted font-inter text-sm leading-relaxed flex-grow">
                {testimonial.text}
              </p>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-2.5 mt-8 pt-6 border-t border-[#1a1c1e]">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === current
                        ? 'w-3 h-3 bg-inbio-pink'
                        : 'w-2.5 h-2.5 bg-[#2a2d32] hover:bg-inbio-text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}