'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaDownload } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Hero() {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  
  useEffect(() => {
    const toRotate = ["Full-Stack Developer.", "Python Programmer.", "Web App Specialist."];
    
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);
      
      setText(updatedText);
      
      if (isDeleting) {
        setDelta(75);
      }
      
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000); // pause at full text
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150); // speed up next word startup
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-28 px-4 md:px-8 bg-inbio-bg">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full lg:pr-8 font-montserrat">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-4">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-inbio-text leading-[1.1] mb-6">
            Hi, I&apos;m <span className="text-inbio-pink">Sami Ullah</span><br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-inbio-text/80 block mt-3 min-h-[40px] md:min-h-[48px]">
              a <span className="border-r-2 border-inbio-pink pr-1 text-inbio-text">{text}</span>
            </span>
          </h1>
          <p className="text-inbio-text-muted font-inter text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            I help businesses grow by crafting amazing web experiences. If you&apos;re looking for a developer that likes to get stuff done, let&apos;s connect.
          </p>
          
          {/* Action Buttons: CV Download & Let's Talk */}
          <div className="flex flex-wrap gap-5 mb-14 font-montserrat">
            <a 
              href="/cv.pdf" 
              download="Sami_Ullah_CV.pdf"
              className="inline-flex items-center gap-3 text-inbio-pink text-sm font-bold px-7 py-4 rounded-md tracking-wider transition-all duration-300 uppercase shadow-inbio-raised hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white"
            >
              Download CV <FaDownload />
            </a>
            
            <Link 
              href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-inbio-pink text-sm font-bold px-7 py-4 rounded-md tracking-wider transition-all duration-300 uppercase shadow-inbio-raised hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover hover:text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>
          
          {/* Socials & Key Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#1a1c1e]">
            {/* Socials */}
            <div>
              <p className="text-[12px] tracking-[2px] text-inbio-text font-semibold uppercase mb-4">
                Find with me
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.linkedin.com/in/sami-ullah-b5691b2b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://github.com/sami-490" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-text hover:text-inbio-pink transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Best Skills */}
            <div>
              <p className="text-[12px] tracking-[2px] text-inbio-text font-semibold uppercase mb-4">
                Best skill on
              </p>
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-pink">
                  <FaReact className="w-5 h-5" />
                </div>
                <div className="w-[50px] h-[50px] rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-pink">
                  <SiNextdotjs className="w-5 h-5" />
                </div>
                <div className="w-[50px] h-[50px] rounded-lg shadow-inbio-raised flex items-center justify-center text-inbio-pink">
                  <FaNodeJs className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image Frame with Stats */}
        <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-8">
          <div className="shadow-inbio-raised p-6 rounded-2xl border border-[#1a1c1e] relative group">
            <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-[#1e2125] relative">
              <Image 
                src="/profile.jpg" 
                alt="Sami Ullah" 
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 font-montserrat">
            <div className="shadow-inbio-raised p-4 rounded-xl text-center border border-[#1a1c1e]">
              <span className="block text-2xl font-bold text-inbio-pink mb-1">9</span>
              <span className="text-[9px] tracking-[1px] text-inbio-text-muted uppercase font-bold block">Languages</span>
            </div>
            <div className="shadow-inbio-raised p-4 rounded-xl text-center border border-[#1a1c1e]">
              <span className="block text-2xl font-bold text-inbio-pink mb-1">10</span>
              <span className="text-[9px] tracking-[1px] text-inbio-text-muted uppercase font-bold block">Tools</span>
            </div>
            <div className="shadow-inbio-raised p-4 rounded-xl text-center border border-[#1a1c1e]">
              <span className="block text-2xl font-bold text-inbio-pink mb-1">2+</span>
              <span className="text-[9px] tracking-[1px] text-inbio-text-muted uppercase font-bold block">Years Exp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}