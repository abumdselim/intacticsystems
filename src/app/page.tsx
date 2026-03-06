import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
