export default function FeatureCards() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-3 overflow-hidden">
        {/* Card 1 */}
        <div className="p-10 border-r">
          <span className="text-gray-300 text-4xl font-bold">01.</span>
          <h3 className="mt-4 text-xl font-semibold">Causes</h3>
          <p className="mt-3 text-gray-600">
            We support education, healthcare, and poverty reduction.
          </p>
          <a className="mt-4 inline-block font-semibold">See Proof →</a>
        </div>

        {/* Card 2 */}
        <div className="p-10 border-r">
          <span className="text-gray-300 text-4xl font-bold">02.</span>
          <h3 className="mt-4 text-xl font-semibold">Get involved</h3>
          <p className="mt-3 text-gray-600">
            Volunteer or donate your skills to make a difference.
          </p>
          <a className="mt-4 inline-block font-semibold">View Financials →</a>
        </div>

        {/* Card 3 */}
        <div className="p-10">
          <span className="text-gray-300 text-4xl font-bold">03.</span>
          <h3 className="mt-4 text-xl font-semibold">Donation</h3>
          <p className="mt-3 text-gray-600">
            Contribute today and help us change lives.
          </p>
          <a className="mt-4 inline-block font-semibold">Learn More →</a>
        </div>
      </div>
    </div>
  );
}
