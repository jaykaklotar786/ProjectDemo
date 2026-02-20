import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/home-bg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Empowering Change,
          <br className="hidden sm:block" />
          One Step at a Time
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Every small act of kindness creates a ripple of positive change. Join
          us in making a difference lives together.
        </p>

        <div className="mt-8">
          <button className="bg-green-600 hover:bg-green-700 transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
