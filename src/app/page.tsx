import { Header } from '@/components/ui/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import StoriesSection from '@/components/StoriesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <AboutSection />
      <ImpactSection />
      <GetInvolvedSection />
      <StoriesSection />
      <Footer />
    </>
  );
}
