const ReadySection = function () {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
      <div className="container mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl border border-blue-500/30 py-16 px-6">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business Ideas to Premuin
          </h2>
          <p className="text-lg text-blue-200 mb-8">
            Every great idea deserves a premium experience. Let’s turn your
            vision into something real, bold, functional, and built for success
          </p>
          <a href="#">
            <div className="flex items-center gap-2 *:text-white font-semibold w-fit mx-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg group">
              <p>Let's Get Started</p>
              <div className="transform group-hover:translate-x-1 transition-transform">
                &#8702;
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
