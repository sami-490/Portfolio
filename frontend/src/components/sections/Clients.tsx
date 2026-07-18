'use client';
import React, { useState } from 'react';

// Using actual portfolio skills as categories per the user request
const categories = [
  "JavaScript",
  "WordPress",
  "HTML to React",
  "Next.js",
  "Python",
  "Shopify"
];

const clientsData: Record<string, { logoText: string; clientName: string }[]> = {
  "JavaScript": [
    { logoText: "JS Tech", clientName: "John Doe" },
    { logoText: "Web Solutions", clientName: "Smitha Marth" },
    { logoText: "Code Factory", clientName: "Add Dev" },
    { logoText: "App Builders", clientName: "Jane Doe" },
    { logoText: "JS Innovators", clientName: "Adon Smith" },
    { logoText: "Frontend Masters", clientName: "John Due" },
    { logoText: "Dynamic Web", clientName: "Smitha Mila" },
    { logoText: "Client JS", clientName: "Sultana Mila" },
    { logoText: "Web Wizards", clientName: "Jannat" }
  ],
  "WordPress": [
    { logoText: "WP Studio", clientName: "Alice M." },
    { logoText: "Blog Hub", clientName: "Bob T." },
    { logoText: "Theme Masters", clientName: "Charlie S." },
    { logoText: "Plugin Pro", clientName: "David D." },
    { logoText: "WP Solutions", clientName: "Eve L." },
    { logoText: "Custom WP", clientName: "Frank P." }
  ],
  "HTML to React": [
    { logoText: "Reactify", clientName: "George W." },
    { logoText: "Modern Web", clientName: "Helen G." },
    { logoText: "UI Creators", clientName: "Ivan R." }
  ],
  "Next.js": [
    { logoText: "Next Gen Web", clientName: "Jack B." },
    { logoText: "SSR Experts", clientName: "Karen N." },
    { logoText: "Fast Pages", clientName: "Liam T." },
    { logoText: "Vercel Deploy", clientName: "Mia H." }
  ],
  "Python": [
    { logoText: "Py Scripters", clientName: "Noah A." },
    { logoText: "Data Flow", clientName: "Olivia F." },
    { logoText: "Auto Bots", clientName: "Paul M." }
  ],
  "Shopify": [
    { logoText: "Ecom Store", clientName: "Quinn C." },
    { logoText: "Shop Builders", clientName: "Rachel L." },
    { logoText: "Cart Masters", clientName: "Sam W." },
    { logoText: "Sell Online", clientName: "Tina R." },
    { logoText: "Shopify Experts", clientName: "Uma K." }
  ]
};

export default function Clients() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="clients" className="py-24 bg-inbio-bg border-t border-[#1a1c1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 font-montserrat">
        
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start mb-16 text-center lg:text-left">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            Popular Clients
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
            Awesome Clients
          </h2>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Vertical Tabs Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="shadow-inbio-raised rounded-2xl p-4 border border-[#1a1c1e] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-5 rounded-lg text-sm font-bold transition-all duration-300 text-center flex-shrink-0 lg:w-full
                    ${activeTab === category 
                      ? 'shadow-inbio-sunken text-inbio-pink border border-[#1a1c1e]' 
                      : 'text-inbio-text hover:text-inbio-pink'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clientsData[activeTab]?.map((client, index) => (
                <div 
                  key={index}
                  className="group shadow-inbio-raised rounded-2xl border border-[#1a1c1e] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center overflow-hidden"
                >
                  {/* Logo Area */}
                  <div className="h-32 w-full flex items-center justify-center p-6 bg-[#1e2024]/40">
                    <span className="font-serif text-lg md:text-2xl italic text-inbio-text font-light text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {client.logoText}
                    </span>
                  </div>
                  
                  {/* Client Name Area */}
                  <div className="w-full py-4 px-2 text-center border-t border-[#1a1c1e] shadow-inbio-sunken">
                    <span className="text-xs md:text-sm font-medium text-inbio-text-muted">
                      {client.clientName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
