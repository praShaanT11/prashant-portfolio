import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Research } from '@/components/sections/Research';
import { Publications } from '@/components/sections/Publications';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Leadership } from '@/components/sections/Leadership';
import { Skills } from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Research />
      <Publications />
      <Projects />
      <Experience />
      <Leadership />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
