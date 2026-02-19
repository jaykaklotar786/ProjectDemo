import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-auto flex items-center">
      <div className="absolute inset-0">
        <img src="/Images/home-bg.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Empowering Change, One Step at a Time
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Every small act of kindness creates a ripple of positive change.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold">
          Donate Now
        </button>
      </div>
    </section>
  );
}
