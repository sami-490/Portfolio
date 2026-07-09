'use client';
import React from 'react';

const certificates = [
  {
    title: "Full Stack Web Developer Program",
    issuer: "Global Academy of Technology & Innovation",
    date: "July 2025",
    image: "/Full stack web developer .jpg"
  },
  {
    title: "Excel for Beginners",
    issuer: "Great Learning Academy",
    date: "December 2023",
    image: "/Excel.jpg"
  },
  {
    title: "Introduction to SQL",
    issuer: "Sololearn",
    date: "May 2025",
    image: "/SQL.jpg"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-teal-400">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Professional certifications and courses I have completed to continuously improve my skills and stay updated with industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1e2125] rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-400/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full aspect-[1.4] overflow-hidden relative bg-[#1a1d21] border-b border-gray-800">
                <div className="absolute inset-0 bg-teal-400/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                
                {/* Fallback styling for when image is missing initially */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 text-xs p-6 text-center z-0">
                  <span className="mb-2 uppercase tracking-widest text-teal-500/50">Image Missing</span>
                  <span>Please save your image as:</span>
                  <code className="mt-2 text-teal-400 bg-teal-400/10 px-2 py-1 rounded">public{cert.image}</code>
                </div>
                
                {/* Actual Image */}
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    // Hide the broken image icon so the fallback text shows clearly
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex-grow flex flex-col justify-center text-center">
                <p className="text-teal-400 font-mono text-[10px] tracking-widest uppercase mb-3">
                  {cert.issuer}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium mt-auto">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
