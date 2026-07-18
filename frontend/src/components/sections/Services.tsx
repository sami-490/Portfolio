'use client';
import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaPython, FaPaintBrush, FaWordpress, FaShopify, FaArrowRight, FaTimes, FaCheck } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and robust websites tailored to your business needs using modern technologies.",
    icon: <FaCode className="w-8 h-8" />,
    details: "I create highly optimized, responsive, and search engine friendly websites. From standard landing pages to complex corporate portals, I ensure clean code, rapid loading times, and a flawless user experience across all devices.",
    features: [
      "Custom HTML5/CSS3 coding",
      "Responsive Grid Layouts",
      "SEO best practices",
      "Speed & Performance Optimization",
      "Cross-browser compatibility"
    ],
    tech: "HTML5, CSS3, Tailwind CSS, TypeScript, Next.js"
  },
  {
    title: "Web App Development",
    description: "Creating complex, interactive web applications with dynamic features and seamless user experiences.",
    icon: <FaLaptopCode className="w-8 h-8" />,
    details: "Building interactive, dynamic, and state-managed web applications that solve complex business tasks. I specialize in full-stack JavaScript architectures, database design, secure user authentication, and API integrations.",
    features: [
      "Full-Stack JavaScript (MERN)",
      "Secure User Authentication (JWT/OAuth)",
      "RESTful & GraphQL API Integrations",
      "Real-time state synchronization",
      "Cloud database setup (MongoDB, PostgreSQL)"
    ],
    tech: "React, Next.js, Node.js, Express, MongoDB, PostgreSQL"
  },
  {
    title: "Python Developer",
    description: "Developing scalable backend systems, automation scripts, and data-driven solutions using Python.",
    icon: <FaPython className="w-8 h-8" />,
    details: "Leveraging Python to build scalable backend services, custom automation scripts, web scrapers, and data analysis pipelines. I focus on writing clean, efficient, and well-documented Python scripts that automate manual processes and parse data.",
    features: [
      "Backend APIs (FastAPI/Flask)",
      "Custom Automation Scripts",
      "Web Scraping & Data Extraction",
      "Data Cleaning & Analysis",
      "Cron jobs & task scheduling"
    ],
    tech: "Python, FastAPI, Pandas, BeautifulSoup, PostgreSQL"
  },
  {
    title: "Website Design",
    description: "Crafting beautiful, intuitive, and user-centric UI/UX designs that elevate your brand and engage your audience.",
    icon: <FaPaintBrush className="w-8 h-8" />,
    details: "Designing modern, high-end interfaces that captivate users and accurately reflect your brand identity. I create wireframes and high-fidelity interactive prototypes in Figma, focusing on user journeys, color psychology, and conversion-optimized layouts.",
    features: [
      "Figma UI/UX Design",
      "Wireframing & Storyboarding",
      "Interactive Prototypes",
      "Custom Design Systems",
      "Typography & Iconography selection"
    ],
    tech: "Figma, Adobe Illustrator, Canva"
  },
  {
    title: "WordPress Developer",
    description: "Custom WordPress theme and plugin development, ensuring easy content management and high performance.",
    icon: <FaWordpress className="w-8 h-8" />,
    details: "Developing high-performance custom WordPress websites. I build bespoke themes from scratch, customize Elementor pages, write custom plugins, and optimize page speeds to convert visitors into customers.",
    features: [
      "Custom Theme Development",
      "Elementor Pro Customization",
      "Custom Plugin configurations",
      "WooCommerce Setup",
      "WordPress Speed & Security Audits"
    ],
    tech: "WordPress, Elementor, PHP, MySQL, CSS3"
  },
  {
    title: "Shopify",
    description: "Setting up and customizing powerful e-commerce stores on Shopify to help you sell your products online.",
    icon: <FaShopify className="w-8 h-8" />,
    details: "Setting up and customizing conversion-focused Shopify e-commerce stores. I assist with store setups, Shopify custom Liquid coding, payment gateways, shipping rules, and custom product layout designs.",
    features: [
      "Shopify Theme Customization",
      "Liquid Template Coding",
      "E-Commerce Funnel Optimization",
      "App Integrations & Settings",
      "Payment & Shipping setups"
    ],
    tech: "Shopify, Liquid, JavaScript, Tailwind CSS"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

  const handleDiscuss = () => {
    setSelectedService(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-inbio-bg border-t border-[#1a1c1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 font-montserrat text-left lg:text-left">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
            What I Do
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedService(service)}
              className="cursor-pointer shadow-inbio-raised-hover rounded-2xl p-10 flex flex-col items-start text-left border border-[#1a1c1e] group relative transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div className="text-inbio-pink mb-8 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-inbio-text mb-4 font-montserrat group-hover:text-inbio-pink transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-inbio-text-muted font-inter text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow link indicator */}
              <div className="text-inbio-pink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-auto">
                <FaArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4">
            <div className="bg-inbio-bg p-8 md:p-10 rounded-2xl border border-[#1a1c1e] w-full max-w-2xl shadow-inbio-raised relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-inbio-text-muted hover:text-inbio-pink text-xl transition-colors duration-300 shadow-inbio-raised w-10 h-10 rounded-full flex items-center justify-center border border-[#1a1c1e]"
              >
                <FaTimes />
              </button>
              
              {/* Modal Content */}
              <div className="text-left font-montserrat mt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-inbio-pink text-3xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-inbio-text">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-inbio-text-muted font-inter text-sm md:text-base leading-relaxed mb-8">
                  {selectedService.details}
                </p>

                {/* Key Deliverables */}
                <h4 className="text-[11px] tracking-[2px] text-inbio-text font-bold uppercase mb-4">
                  What you will get
                </h4>
                <ul className="flex flex-col gap-3 font-inter mb-8">
                  {selectedService.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-inbio-text">
                      <div className="w-6 h-6 rounded-full shadow-inbio-raised flex items-center justify-center text-inbio-pink shrink-0 text-[10px]">
                        <FaCheck />
                      </div>
                      <span className="text-inbio-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-6 border-t border-[#1a1c1e] mb-8 font-inter">
                  <span className="text-[11px] tracking-[2px] font-bold text-inbio-text font-montserrat uppercase block mb-2">Technologies Used</span>
                  <p className="text-inbio-pink text-sm font-semibold">{selectedService.tech}</p>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={handleDiscuss}
                  className="shadow-inbio-raised text-inbio-pink font-bold py-4 px-8 rounded-lg hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-montserrat"
                >
                  Discuss Project
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
