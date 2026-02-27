export default function FeatureCards() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8 w-full">
      <div className="bg-white max-w-7xl xl:max-w-300 mx-auto rounded-xl sm:rounded-2xl lg:rounded-3xl grid grid-cols-1 md:grid-cols-3 overflow-hidden shadow-lg">
        {/* Card 1 */}
        <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-bone block mb-2">
            01.
          </span>
          <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl lg:text-[24px] font-semibold">
            Causes
          </h3>
          <p className="pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
            We support education, healthcare, and poverty reduction.
          </p>
          <a className="mt-4 inline-block text-base sm:text-lg lg:text-[18px] font-semibold cursor-pointer group">
            <span className="flex items-center gap-1">
              See Proof{' '}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-bone block mb-2">
            02.
          </span>
          <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl lg:text-[24px] font-semibold">
            Get involved
          </h3>
          <p className="pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
            Volunteer or donate your skills to make a difference.
          </p>
          <a className="mt-4 inline-block text-base sm:text-lg lg:text-[18px] font-semibold cursor-pointer group">
            <span className="flex items-center gap-1">
              View Financials
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>

        {/* Card 3 */}
        <div className="p-6 sm:p-8 lg:p-10">
          <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-bone block mb-2">
            03.
          </span>
          <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl lg:text-[24px] font-semibold">
            Donation
          </h3>
          <p className="pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
            Contribute today and help us change lives and build a better future.
          </p>
          <a className="mt-4 inline-block text-base sm:text-lg lg:text-[18px] font-semibold cursor-pointer group">
            <span className="flex items-center gap-1">
              Learn More
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
