import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Volunteer from '@/components/sections/Volunteer';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Volunteer />
      <Contact />
      <Footer />
    </main>
  );
}