import React from 'react';
import { FaCode, FaLaptopCode, FaPython, FaPaintBrush, FaWordpress, FaShopify } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and robust websites tailored to your business needs using modern technologies.",
    icon: <FaCode className="w-10 h-10" />
  },
  {
    title: "Web App Development",
    description: "Creating complex, interactive web applications with dynamic features and seamless user experiences.",
    icon: <FaLaptopCode className="w-10 h-10" />
  },
  {
    title: "Python Developer",
    description: "Developing scalable backend systems, automation scripts, and data-driven solutions using Python.",
    icon: <FaPython className="w-10 h-10" />
  },
  {
    title: "Website Design",
    description: "Crafting beautiful, intuitive, and user-centric UI/UX designs that elevate your brand and engage your audience.",
    icon: <FaPaintBrush className="w-10 h-10" />
  },
  {
    title: "WordPress Developer",
    description: "Custom WordPress theme and plugin development, ensuring easy content management and high performance.",
    icon: <FaWordpress className="w-10 h-10" />
  },
  {
    title: "Shopify",
    description: "Setting up and customizing powerful e-commerce stores on Shopify to help you sell your products online.",
    icon: <FaShopify className="w-10 h-10" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I offer a comprehensive suite of digital services to help you build, scale, and optimize your online presence from design to deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1e2125] rounded-xl p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-teal-400/50 group shadow-lg"
            >
              <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
