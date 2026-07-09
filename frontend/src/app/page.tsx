import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Certificates from '@/components/sections/Certificates';
import CTA from '@/components/sections/CTA';
import Blogs from '@/components/sections/Blogs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Blogs />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <Certificates />
      <CTA />
    </div>
  );
}
