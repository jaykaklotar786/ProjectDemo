import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section className="bg-[#f4f4ef] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our journey of compassion and hope
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed">
              Join us on a journey towards compassion and hope. Through our
              non-profit organisation, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>

            <p className="text-gray-500 mb-6 leading-relaxed">
              A transformational journey towards bringing hope and compassion to
              the world.
            </p>

            <Button
              variant="outline"
              className="px-8 py-6 rounded-xl border-[#1f2b0a] text-[#1f2b0a] hover:bg-[#1f2b0a] hover:text-white"
            >
              Read More
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/Images/home-0001.jpg"
                alt=""
                width={300}
                height={350}
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden mt-10">
              <Image
                src="/Images/home-02.jpg"
                alt=""
                width={300}
                height={350}
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden -mt-10">
              <Image
                src="/Images/home-03.jpg"
                alt=""
                width={300}
                height={350}
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/Images/home-0004.jpg"
                alt=""
                width={300}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
