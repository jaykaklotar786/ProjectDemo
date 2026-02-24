import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-216 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/home-bg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 object-top bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="max-w-270 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-7xl tracking-[-1px] font-semibold leading-[1.1]">
          Empowering Change, One Step at a Time
        </h1>

        <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] max-w-175 mx-auto">
          Every small act of kindness creates a ripple of positive change. Join
          us in making a difference lives together.
        </p>

        <div className="mt-8">
          <button className="bg-[#66B40B] hover:bg-[#81b82e] transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
