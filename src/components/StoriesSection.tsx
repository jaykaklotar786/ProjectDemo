import Image from 'next/image';

export default function StoriesSection() {
  return (
    <section className="bg-[#eef0e6] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-[#1f2b0a]">
            Inspiring tales of transformation
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get inspired by the remarkable stories of transformation through our
            non-profit organization. Join us in making a positive impact today.
          </p>
        </div>

        {/* Main Combined Card */}
        <div className="bg-[#f6f7f2] border border-[#cfd5bf] rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* LEFT */}
            <div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/Images/home-06.jpg"
                  alt="Story 1"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-[#1f2b0a]">
                The Special One
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Join our non-profit organisation to help create a brighter
                future for those in need. Every donation counts towards making a
                difference in the lives of those less fortunate.
              </p>

              <button className="mt-6 text-[#1f2b0a] font-medium">
                Read More →
              </button>
            </div>

            {/* RIGHT */}
            <div className="md:border-l md:border-[#cfd5bf] md:pl-12">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/Images/home-07.jpg"
                  alt="Story 2"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-[#1f2b0a]">
                A Better Education for Everyone
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Our non-profit organisation is dedicated to improving access to
                education for all. With your support, we can help provide the
                resources and opportunities needed for success.
              </p>

              <button className="mt-6 text-[#1f2b0a] font-medium">
                Read More →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1f2b0a] mb-12">
            Our Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center">
            <img
              src="/Images/logo-01.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="/Images/logo-02.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="/Images/logo-03.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="/Images/logo-04.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="/Images/logo-05.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="/Images/logo-06.svg"
              alt="logo"
              className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
