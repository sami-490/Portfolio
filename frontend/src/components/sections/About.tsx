import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="mt-8 flex flex-col items-center mb-10">
            <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9a4 4 0 018 0v6a4 4 0 01-8 0V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v4" />
            </svg>
            <div className="w-px h-12 border-l-2 border-dashed border-teal-400/50 mt-2"></div>
            <div className="w-2 h-2 bg-white rotate-45 mt-2"></div>
          </div>

          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold px-10 py-5 bg-[#1a1d21] rounded-2xl border border-gray-700 relative z-10">
              About Me
            </h2>
            <div className="absolute inset-0 border-2 border-teal-400 rounded-2xl translate-x-3 translate-y-3 z-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Terminal / Code Box */}
          <div className="bg-[#1a1d21] rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-800 font-mono text-sm md:text-base leading-relaxed text-gray-300">
            
            <h3 className="text-teal-400 text-2xl md:text-3xl font-bold mb-6 font-sans">Hello!</h3>
            
            <p className="mb-6">
              My name is Sami Ullah and I specialize in web development that utilizes <span className="text-teal-400">HTML5, CSS3, Bootstrap, React, Node.js, Next.js, Express.js, Python, WordPress, and Shopify</span>.
            </p>
            
            <p className="mb-6">
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
            </p>
            
            <p className="mb-6">
              When I&apos;m not coding, I am <span className="text-teal-400">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-teal-400">photography</span>.
            </p>
            
            <p className="mb-6">
              I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Coding on laptop"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

        </div>
      </div>
    </section>
  );
}
