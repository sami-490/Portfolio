import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsList = [
  {
    title: "Edu Nexora LMS",
    description: "A comprehensive Learning Management System designed to facilitate online education. Features include course management, student enrollment, progress tracking, and interactive assignments. Built with modern web technologies for a seamless experience.",
    image: "/lms_dashboard.png",
    github: "https://github.com/samiullahshafiq14",
    live: "#"
  },
  {
    title: "NexBank",
    description: "A secure and user-friendly banking portal. Users can manage their accounts, transfer funds, view transaction history, and apply for loans. Features robust authentication and real-time data updates.",
    image: "/bank_website.png",
    github: "https://github.com/samiullahshafiq14",
    live: "#"
  },
  {
    title: "NexBank-app",
    description: "A mobile-first banking application that brings the full functionality of our banking website directly to your smartphone. Includes biometric login, mobile check deposit, and instant notifications for all account activities.",
    image: "/bank_app.png",
    github: "https://github.com/samiullahshafiq14",
    live: "#"
  },
  {
    title: "My mealway restaurant",
    description: "An elegant online ordering and reservation system for the Mealway Restaurant. Customers can browse the interactive menu, customize their orders, book tables in advance, and earn loyalty points.",
    image: "/restaurant_website.png",
    github: "https://github.com/samiullahshafiq14",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow Effects (Matching the screenshot vibe but in teal) */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[50%] left-[20%] w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="h-px bg-gray-700 flex-grow ml-4 max-w-sm"></div>
        </div>

        <div className="flex flex-col gap-32">
          {projectsList.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                
                {/* Content Box */}
                <div className={`md:col-span-7 lg:col-span-6 relative z-10 ${isEven ? 'order-2 md:order-1 md:text-left' : 'order-2 md:order-2 md:col-start-6 lg:col-start-7 md:text-right'}`}>
                  <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-teal-400 transition-colors cursor-pointer">{project.title}</h3>
                  
                  <div className={`bg-[#24272c]/95 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-gray-800 text-gray-400 shadow-2xl mb-6 text-sm md:text-base leading-relaxed ${isEven ? 'md:-mr-12' : 'md:-ml-12'} relative z-20 hover:border-teal-400/30 transition-colors`}>
                    {project.description}
                  </div>
                  
                  <div className={`flex gap-6 text-gray-400 ${isEven ? 'justify-start' : 'justify-start md:justify-end'} relative z-20`}>
                    <a href={project.github} className="hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href={project.live} className="hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="w-5 h-5 mt-0.5" />
                    </a>
                  </div>
                </div>

                {/* Image Box */}
                <div className={`md:col-span-7 lg:col-span-7 relative z-0 h-[300px] md:h-[400px] ${isEven ? 'order-1 md:order-2 md:col-start-6 lg:col-start-6' : 'order-1 md:order-1 md:col-start-1 lg:col-start-1'}`}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full rounded-xl overflow-hidden relative shadow-2xl border border-gray-800">
                    {/* Teal Overlay matching the vibe */}
                    <div className="absolute inset-0 bg-teal-400/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    {/* Standard img tag avoids next/image domain configuration errors */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}