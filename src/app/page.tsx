import { Header } from '@/components/ui/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeatureCards from '@/components/FeatureCards';
import ImpactSection from '@/components/ImpactSection';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="relative -mt-24 z-20">
        <FeatureCards />
      </div>
      <AboutSection />
      <ImpactSection />
    </>
  );
}
