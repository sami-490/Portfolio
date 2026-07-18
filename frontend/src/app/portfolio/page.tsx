'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheck, FaThLarge, FaFileAlt, FaImage, FaPlay, FaHeart } from 'react-icons/fa';

const projectsList = [
  {
    title: "Edu Nexora LMS",
    category: "GALLERY",
    tabType: "Gallery",
    description: "A comprehensive Learning Management System designed to facilitate online education. Features include course management, student enrollment, progress tracking, and interactive assignments.",
    details: "Edu Nexora is a state-of-the-art Learning Management System designed to streamline educational content delivery and student engagement. It provides teachers with course builder tools, grading sheets, and direct student messaging, while students enjoy a responsive layout, dashboard, and quiz progress tracking.",
    features: [
      "Modular Course Builder & File Manager",
      "Interactive Quiz Engine with Instant Feedback",
      "Real-time Direct messaging & Announcements",
      "Grade Book & Performance Analytics",
      "Responsive Student Dashboard"
    ],
    image: "/lms_dashboard.png",
    github: "https://github.com/sami-490/Edu-Nexora-LMS",
    live: "#",
    tech: "Next.js, TypeScript, Tailwind CSS, PostgreSQL, Node.js",
    icon: <FaThLarge className="w-3.5 h-3.5" />,
    likes: 1878
  },
  {
    title: "NexBank",
    category: "STANDARD",
    tabType: "Standard",
    description: "A secure and user-friendly banking portal. Users can manage their accounts, transfer funds, view transaction history, and apply for loans. Features robust authentication and real-time data updates.",
    details: "A high-performance promotional landing page and client portal for NexBank, a modern digital banking startup. The website features interactive interest rate calculators, savings goal visualizers, secure contact requests, and a clean, high-end responsive layout.",
    features: [
      "Interactive Loan & Interest Calculators",
      "Dynamic Savings Goal Trackers",
      "Secure Encrypted Lead Forms",
      "Neomorphic Dashboard Demos",
      "High-Performance Next.js SSG Rendering"
    ],
    image: "/bank_website.png",
    github: "https://github.com/sami-490/NexBank",
    live: "#",
    tech: "Next.js, React, Tailwind CSS, Framer Motion",
    icon: <FaFileAlt className="w-3.5 h-3.5" />,
    likes: 892
  },
  {
    title: "NexBank-app",
    category: "EXTERNAL LINK",
    tabType: "External Link",
    description: "A mobile-first banking application that brings the full functionality of our banking website directly to your smartphone. Includes biometric login, mobile check deposit, and instant notifications.",
    details: "A secure, features-rich web app simulating a mobile banking interface for NexBank clients. Users can view balances, transfer funds to mocked accounts, download PDF statements, and lock/unlock cards instantly.",
    features: [
      "Instant Mock Fund Transfers",
      "Historical Transactions Filtering & Search",
      "PDF Statement Generation",
      "Virtual Card Locking & Controls",
      "Responsive Mobile-First UI Layout"
    ],
    image: "/bank_app.png",
    github: "https://github.com/sami-490/NexBank-app",
    live: "#",
    tech: "React, Context API, Tailwind CSS, Chart.js",
    icon: <FaExternalLinkAlt className="w-3.5 h-3.5" />,
    likes: 1120
  },
  {
    title: "My mealway restaurant",
    category: "IMAGE",
    tabType: "Image",
    description: "An elegant online ordering and reservation system for the Mealway Restaurant. Customers can browse the interactive menu, customize their orders, book tables in advance, and earn loyalty points.",
    details: "An elegant online ordering and reservation platform for the Mealway Restaurant. Customers can browse the interactive menu, customize toppings, select table reservations with real-time slot checking, and collect loyalty points.",
    features: [
      "Interactive Customizable Menu & Search",
      "Real-Time Table Slot Reservation Calendar",
      "Custom Order Toppings configurator",
      "Loyalty Point Ledger & Discount vouchers",
      "Instant Email Order Confirmations"
    ],
    image: "/restaurant_website.png",
    github: "https://github.com/sami-490/Portfolio",
    live: "#",
    tech: "Next.js, React, Node.js, Express, MongoDB, Tailwind CSS",
    icon: <FaImage className="w-3.5 h-3.5" />,
    likes: 620
  },
  {
    title: "Python Automation Showcase",
    category: "VIDEO",
    tabType: "Video",
    description: "A video walkthrough demonstrating a scalable web scraping engine built in Python. Shows automation scripts, database ingestion, and real-time dashboard updates.",
    details: "Leveraging Python to build scalable backend services, custom automation scripts, web scrapers, and data analysis pipelines. I focus on writing clean, efficient, and well-documented Python scripts that automate manual processes and parse data.",
    features: [
      "Backend APIs (FastAPI/Flask)",
      "Custom Automation Scripts",
      "Web Scraping & Data Extraction",
      "Data Cleaning & Analysis",
      "Cron jobs & task scheduling"
    ],
    image: "/coding_showcase.png",
    github: "https://github.com/sami-490",
    live: "#",
    tech: "Python, FastAPI, Pandas, BeautifulSoup, PostgreSQL",
    icon: <FaPlay className="w-3.5 h-3.5" />,
    likes: 600
  }
];

const tabs = ['All Project', 'External Link', 'Gallery', 'Image', 'Standard', 'Video'];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All Project');
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsList[0]>(null);

  // Filter projects list based on selected tab
  const filteredProjects = activeTab === 'All Project'
    ? projectsList
    : projectsList.filter(project => project.tabType === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-inbio-bg text-inbio-text">
      <Navbar />
      
      {/* Main Content */}
      <main className="grow pt-32 pb-24 font-montserrat">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
              Visit my portfolio and keep your feedback
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
              My Portfolio
            </h1>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 max-w-4xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-[#1c1e22] ${
                  activeTab === tab
                    ? 'text-inbio-pink shadow-inbio-sunken bg-inbio-bg'
                    : 'text-inbio-text hover:text-inbio-pink shadow-inbio-raised bg-inbio-bg hover:-translate-y-0.5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer shadow-inbio-raised-hover p-6 rounded-2xl border border-[#1a1c1e] flex flex-col group transition-all duration-300 relative text-left"
              >
                {/* Image Container with Top-Right Icon */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#1e2125] relative mb-6 shadow-inbio-sunken border border-[#1d2024]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  
                  {/* corner category icon overlay */}
                  <div className="absolute top-4 right-4 bg-inbio-bg/80 text-inbio-text-muted hover:text-inbio-pink w-9 h-9 rounded-lg flex items-center justify-center border border-[#1a1c1e] shadow-inbio-raised backdrop-blur-xs transition-colors duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Meta Info: Category & Heart Likes */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-inbio-pink text-[11px] font-bold tracking-widest uppercase">
                    {project.category}
                  </span>
                  
                  {/* Heart Like Count */}
                  <div className="flex items-center gap-1.5 text-xs text-inbio-text-muted">
                    <FaHeart className="w-3.5 h-3.5 text-inbio-pink" />
                    <span className="font-semibold">{project.likes}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-inbio-text mb-4 group-hover:text-inbio-pink transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-inbio-text-muted font-inter text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4">
              <div className="bg-inbio-bg p-6 md:p-10 rounded-3xl border border-[#1a1c1e] w-full max-w-4xl shadow-inbio-raised relative max-h-[90vh] overflow-y-auto">
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 text-inbio-text-muted hover:text-inbio-pink text-xl transition-colors duration-300 shadow-inbio-raised w-10 h-10 rounded-full flex items-center justify-center border border-[#1a1c1e]"
                >
                  <FaTimes />
                </button>

                {/* Modal Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6 text-left">
                  
                  {/* Left Column: Image mockup */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1e2125] relative shadow-inbio-sunken border border-[#191b1f]">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Project details */}
                  <div className="lg:col-span-6 flex flex-col h-full font-montserrat">
                    <span className="text-[11px] tracking-[2px] font-bold text-inbio-pink uppercase mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-inbio-text mb-4">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-inbio-text-muted font-inter text-sm leading-relaxed mb-6">
                      {selectedProject.details}
                    </p>

                    {/* Features list */}
                    <h4 className="text-[11px] tracking-[2px] text-inbio-text font-bold uppercase mb-4">
                      Key Features & Deliverables
                    </h4>
                    <ul className="flex flex-col gap-2.5 font-inter mb-6">
                      {selectedProject.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-xs text-inbio-text">
                          <div className="w-5 h-5 rounded-full shadow-inbio-raised flex items-center justify-center text-inbio-pink shrink-0 text-[8px]">
                            <FaCheck />
                          </div>
                          <span className="text-inbio-text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech list */}
                    <div className="pt-4 border-t border-[#1a1c1e] mb-8 font-inter">
                      <span className="text-[11px] tracking-[2px] font-bold text-inbio-text font-montserrat uppercase block mb-1.5">Tech Stack</span>
                      <p className="text-inbio-pink text-xs font-semibold">{selectedProject.tech}</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shadow-inbio-raised text-inbio-pink font-bold py-3.5 px-6 rounded-lg hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white transition-all duration-300 uppercase tracking-widest text-xs flex items-center gap-2"
                      >
                        Source Code <FaGithub />
                      </a>
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shadow-inbio-raised text-inbio-pink font-bold py-3.5 px-6 rounded-lg hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white transition-all duration-300 uppercase tracking-widest text-xs flex items-center gap-2"
                      >
                        Live Demo <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
