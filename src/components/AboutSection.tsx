import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FeatureCards from './FeatureCards';

export default function AboutSection() {
  return (
    <section className=" bg-[#F7F9F4] py-20 flex flex-col gap-24">
      <div className="relative -mt-50 z-20">
        <FeatureCards />
      </div>

      <div className="max-w-300 mx-auto px-6 bg-[#F7F9F4]">
        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div className="max-w-112.5">
            <p className="uppercase text-sm tracking-widest text-[#000000] mb-2">
              ABOUT US
            </p>

            <h2 className="text-[48px] font-bold leading-tight text-[#2C3A04] mb-4">
              Our journey of compassion and hope
            </h2>

            <p className="text-[#46512A] text-[15px] leading-relaxed pb-6">
              Join us on a journey towards compassion and hope. Through our
              non-profit organisation, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>

            <p className="text-[#46512A] text-[15px] leading-relaxed pb-6">
              A transformational journey towards bringing hope and compassion to
              the world.
            </p>

            <Button
              variant="outline"
              className="px-8 py-3 w-[143.22px] h-[56px] bg-[#F7F9F1] rounded-xl border-[#1f2b0a] text-[#1f2b0a] text-[18px] hover:bg-[#1f2b0a] hover:text-white  mb-12"
            >
              Read More
            </Button>

            {/* Donation and Buy Now section */}
          </div>

          {/* Right Images - Fixed Grid Layout */}
          <div className="relative grid grid-cols-2 gap-3 h-125">
            {/* First Column */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden h-60 pb-6">
                <Image
                  src="/Images/home-0001.jpg"
                  alt=""
                  width={309.66}
                  height={338.67}
                  className=" w-[309.66px] h-[338.67px] "
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-60">
                <Image
                  src="/Images/home-03.jpg"
                  alt=""
                  width={280}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Second Column - with offset */}
            <div className="space-y-3 mt-8">
              <div className="rounded-2xl overflow-hidden h-60">
                <Image
                  src="/Images/home-02.jpg"
                  alt=""
                  width={280}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-60">
                <Image
                  src="/Images/home-0004.jpg"
                  alt=""
                  width={280}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
