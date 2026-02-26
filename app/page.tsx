import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Education from '@/components/Education';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import WorkGrid from '@/components/WorkGrid';
import Papers from '@/components/Papers';
import TechDepth from '@/components/TechDepth';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Education />
      <Timeline />
      <Certifications />
      <WorkGrid />
      <Papers />
      <TechDepth />
      <Contact />
    </main>
  );
}
