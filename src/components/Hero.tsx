import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/Images/home-bg.jpg"
        alt="charity hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Change, One Step at a Time
        </h1>
        <p className="text-sm mb-4 opacity-80">
          Every small act of kindness creates a ripple of positive change. Join
          us in making a difference lives together.
        </p>

        <Button
          variant="default"
          className="bg-[#68961a] hover:bg-[#5a860e] text-white"
        >
          Donate Now
        </Button>
      </div>
    </section>
  );
}
