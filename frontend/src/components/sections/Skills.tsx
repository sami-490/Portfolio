import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, 
  FaPython, FaWordpress, FaShopify 
} from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';
import { FiMonitor, FiServer } from 'react-icons/fi';

const skills = [
  { name: 'HTML', icon: FaHtml5, bgColor: 'bg-[#e34f26]', textColor: 'text-[#e34f26]' },
  { name: 'CSS', icon: FaCss3Alt, bgColor: 'bg-[#1572b6]', textColor: 'text-[#1572b6]' },
  { name: 'Bootstrap', icon: FaBootstrap, bgColor: 'bg-[#7952b3]', textColor: 'text-[#7952b3]' },
  { name: 'React', icon: FaReact, bgColor: 'bg-[#00d8ff]', textColor: 'text-[#00d8ff]' },
  { name: 'Next.js', icon: SiNextdotjs, bgColor: 'bg-[#111111]', textColor: 'text-gray-400' },
  { name: 'Node.js', icon: FaNodeJs, bgColor: 'bg-[#339933]', textColor: 'text-[#339933]' },
  { name: 'Express', icon: SiExpress, bgColor: 'bg-[#404d59]', textColor: 'text-[#8b9ba8]' },
  { name: 'Python', icon: FaPython, bgColor: 'bg-[#3776ab]', textColor: 'text-[#3776ab]' },
  { name: 'WordPress', icon: FaWordpress, bgColor: 'bg-[#21759b]', textColor: 'text-[#21759b]' },
  { name: 'Shopify', icon: FaShopify, bgColor: 'bg-[#95bf47]', textColor: 'text-[#95bf47]' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-12 h-12 rounded-full border-2 border-teal-400 flex items-center justify-center text-teal-400 font-mono text-xl font-bold mb-2 shadow-[0_0_15px_rgba(45,212,191,0.3)] bg-[#24272c] relative z-10">
            &lt;/&gt;
          </div>
          <div className="w-px h-16 border-l-2 border-dashed border-teal-400/50 mb-4"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-teal-400 mb-6 tracking-wide drop-shadow-md">
            Skills
          </h2>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_#2dd4bf]"></div>
            <div className="h-0.5 w-32 md:w-48 bg-teal-400 shadow-[0_0_8px_#2dd4bf]"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_#2dd4bf]"></div>
          </div>
          
          <p className="text-gray-300 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-center max-w-xl">
            I am striving to never stop learning and improving
          </p>
        </div>

        {/* Category Boxes */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          <div className="bg-[#b4f5ea] text-[#1a1d21] px-8 py-6 rounded-md border-l-8 border-[#1572b6] flex flex-col items-center w-full md:max-w-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-1">
            <FiMonitor className="text-4xl mb-3" />
            <h3 className="font-bold text-lg mb-2 tracking-widest uppercase">Web Development</h3>
            <p className="text-[11px] font-mono font-bold opacity-70 tracking-widest text-center">HTML·CSS·REACT·NEXT.JS</p>
          </div>
          
          <div className="bg-[#b4f5ea] text-[#1a1d21] px-8 py-6 rounded-md border-l-8 border-[#1572b6] flex flex-col items-center w-full md:max-w-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-1">
            <FiServer className="text-4xl mb-3" />
            <h3 className="font-bold text-lg mb-2 tracking-widest uppercase text-center">Backend & CMS</h3>
            <p className="text-[11px] font-mono font-bold opacity-70 tracking-widest text-center">NODE·PYTHON·WP·SHOPIFY</p>
          </div>
        </div>

        {/* Skills Circles Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-5xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group w-24 md:w-32">
              <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-5xl md:text-6xl text-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] transform transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-110 mb-6 border-4 border-transparent group-hover:border-white/20 ${skill.bgColor}`}>
                <skill.icon />
              </div>
              <span className={`font-bold tracking-widest uppercase text-sm ${skill.textColor} transition-all duration-300 drop-shadow-md`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}