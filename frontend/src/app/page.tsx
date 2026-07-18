import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import Blogs from '@/components/sections/Blogs';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Resume />
      <Clients />
      <Testimonials />
      <Blogs />
      <CTA />
    </div>
  );
}
