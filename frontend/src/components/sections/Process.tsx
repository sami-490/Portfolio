import React from 'react';

const steps = [
  {
    num: "01",
    align: "right",
    time: "2 HOURS",
    subtitle: "DO WE MATCH?",
    title: "DISCOVERY CALL",
    text: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    bullets: [
      "We get to know each other better",
      "Determine how I can best assist you",
      "Understand the goals you have for your website"
    ]
  },
  {
    num: "02",
    align: "left",
    time: "1 WEEK",
    subtitle: "PLANNING & STRATEGY",
    title: "CONCEPT & STRATEGY",
    text: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    bullets: [
      "UX Design",
      "Wireframes",
      "Interactive Prototype"
    ]
  },
  {
    num: "03",
    align: "right",
    time: "1 WEEK",
    subtitle: "SOME MAGIC",
    title: "WEB DESIGN",
    text: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    bullets: [
      "High-end web design tailored to your brand",
      "Interactive prototype of the design"
    ]
  },
  {
    num: "04",
    align: "left",
    time: "2 WEEKS",
    subtitle: "MORE MAGIC",
    title: "DEVELOPMENT",
    text: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    bullets: [
      "Custom coded website",
      "Modular web design systems",
      "CMS integration"
    ]
  },
  {
    num: "05",
    align: "right",
    time: "2 HOURS",
    subtitle: "READY TO GO",
    title: "WEBSITE ONBOARDING",
    text: "In a personal workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials that you can access at any time. Edit your website without a complicated backend or the need for an additional programmer. It's as simple as that.",
    bullets: [
      "Personal workshop",
      "Personalized video tutorials",
      "Edit text and images directly on your website"
    ]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <p className="text-teal-400 font-mono text-xs tracking-[0.3em] uppercase mb-6">The Process</p>
          <h2 className="text-5xl md:text-7xl font-light mb-4">
            Your Website
          </h2>
          <h2 className="text-5xl md:text-7xl italic font-serif text-teal-400 mb-8">
            in 5 steps
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            Our process ensures that we create a website tailored to your business needs.
          </p>
          
          {/* Arrow pointing down */}
          <div className="mt-12 w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
            <span className="text-gray-400 text-xl font-light">↓</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 md:-ml-px"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start md:items-center justify-between mb-24 last:mb-0 w-full group">
              
              {/* Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1d21] border border-gray-600 z-10 transition-colors duration-300 group-hover:border-teal-400 group-hover:text-teal-400 text-xs font-mono text-gray-400 mt-6 md:mt-0">
                {step.num}
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${step.align === 'left' ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'} flex ${step.align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                
                <div className={`bg-[#1a1d21]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-xl shadow-lg hover:border-teal-400/50 transition-colors duration-300 relative w-full ${step.align === 'left' ? 'md:items-end md:text-right' : 'md:items-start text-left'} flex flex-col`}>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 ${step.align === 'left' ? 'md:left-4 right-4' : 'right-4'} px-3 py-1 bg-gray-800 rounded text-[10px] font-mono tracking-wider text-gray-300`}>
                    {step.time}
                  </div>

                  <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2 mt-4">{step.subtitle}</p>
                  <h3 className="text-2xl font-light text-teal-400 mb-6">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {step.text}
                  </p>
                  
                  <ul className={`flex flex-col gap-3 ${step.align === 'left' ? 'md:items-end' : 'items-start'}`}>
                    {step.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className={`flex items-center gap-3 text-gray-300 text-sm ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400/50 shrink-0"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
