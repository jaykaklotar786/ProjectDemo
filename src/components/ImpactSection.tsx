import Counter from './Counter';

export default function ImpactSection() {
  return (
    <section className="bg-[#f4f4ef] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Text Area */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-4">
              Our Impact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2b0a] leading-tight">
              The impact we have made in our community
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We have made a significant impact in our community through our
            non-profit organization. By providing services and support to those
            in need, we have created a positive change.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20 border-t pt-12">
          <div>
            <h3 className="text-4xl font-bold text-[#1f2b0a]">
              <Counter target={200000} />
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              People served worldwide
            </p>
          </div>

          <div className="md:border-l">
            <h3 className="text-4xl font-bold text-[#1f2b0a]">
              <Counter target={142790} />
            </h3>
            <p className="text-gray-600 mt-2 text-sm">Projects funded</p>
          </div>

          <div className="md:border-l">
            <h3 className="text-4xl font-bold text-[#1f2b0a]">
              <Counter target={1800000} />
            </h3>
            <p className="text-gray-600 mt-2 text-sm">People to take action</p>
          </div>

          <div className="md:border-l">
            <h3 className="text-4xl font-bold text-[#1f2b0a]">
              <Counter target={5246} />
            </h3>
            <p className="text-gray-600 mt-2 text-sm">Partner organizations</p>
          </div>
        </div>

        {/* Green CTA Box */}
        <div className="bg-green-600 rounded-2xl mt-20 p-10 md:flex justify-between items-center text-white">
          <div>
            <h3 className="text-3xl font-bold">
              We can create a better tomorrow
            </h3>
            <p className="mt-3 text-green-100">
              Every dollar counts and helps us bring hope and essential
              resources to those in need.
            </p>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold mt-6 md:mt-0">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
