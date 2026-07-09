import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Profile Card */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-center bg-[#2d3137] rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl p-8 border-l-4 border-teal-400 shadow-lg">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-400 mb-4 bg-[#1a1d21] flex items-center justify-center">
            {/* The user will need to place their photo as profile.png in the public folder */}
            <Image 
              src="/profile.jpg" 
              alt="Sami Ullah" 
              width={128} 
              height={128} 
              className="object-cover object-top w-full h-full"
              unoptimized
            />
          </div>
          <h2 className="text-2xl font-bold mb-1">Sami Ullah</h2>
          <p className="text-gray-400 text-sm mb-6">Full-stack developer</p>
          
          <div className="w-full text-sm text-gray-300 space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-[13px] break-all">samiullahshafiq14@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <div className="flex gap-2">
                <Link href="https://www.linkedin.com/in/sami-ullah-b5691b2b2" target="_blank" className="hover:text-teal-400 transition-colors">LinkedIn</Link>
                <span className="text-gray-500">/</span>
                <Link href="https://github.com/sami-490" target="_blank" className="hover:text-teal-400 transition-colors">GitHub</Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {['HTML5', 'CSS3', 'Bootstrap', 'React', 'Node.js', 'Next.js', 'Express.js', 'Python', 'WordPress', 'Shopify'].map(lang => (
              <span key={lang} className="bg-[#1a1d21] border border-teal-500/30 text-teal-400 text-xs px-3 py-1.5 rounded-full">
                {lang}
              </span>
            ))}
          </div>

          <a 
            href="/cv.pdf" 
            download="Sami_Ullah_CV.pdf"
            className="w-full bg-white text-gray-900 font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            Download CV
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center px-2 lg:px-8 relative">
          
          {/* Large Background Text */}
          <div className="absolute -top-48 left-0 w-full text-center pointer-events-none hidden lg:block">
            <span className="text-[7rem] xl:text-[9rem] font-bold text-teal-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.4)] tracking-wide">
              Developer
            </span>
          </div>
          
          <p className="text-4xl lg:text-5xl font-light mb-2 relative z-10 mt-16 lg:mt-0">Hey</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight relative z-10">
            I&apos;m <span className="text-teal-400">Sami Ullah</span>,<br/>
            Full-Stack Developer
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed relative z-10">
            I help businesses grow by crafting amazing web experiences. If you&apos;re looking for a developer that likes to get stuff done, let&apos;s connect.
          </p>
          
          <div className="relative z-10">
            <Link href="https://www.linkedin.com/in/sami-ullah-b5691b2b2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-teal-400 font-semibold hover:text-teal-300 transition-colors text-xl">
              Let&apos;s Talk
              <span className="bg-[#1a1d21] p-3 rounded-full shadow-lg border border-teal-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="lg:col-span-2 flex flex-col gap-10 bg-[#1a1d21] py-12 px-8 rounded-[40px] items-center justify-center self-center shadow-lg border border-gray-800 w-full max-w-sm mx-auto lg:max-w-none">
          <div className="flex flex-col items-center gap-3 text-center w-full">
            <span className="text-5xl font-bold text-teal-400 tracking-tight">8</span>
            <span className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-wider">Programming<br/>Languages</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center w-full">
            <span className="text-5xl font-bold text-teal-400 tracking-tight">10</span>
            <span className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-wider">Development<br/>Tools</span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center w-full">
            <span className="text-5xl font-bold text-teal-400 tracking-tight">2</span>
            <span className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-wider">Years of<br/>Experience</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}