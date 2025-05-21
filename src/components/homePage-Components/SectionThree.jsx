import techSphereLogo from "../../assets/images/logo-tech-sphere.png";

const SectionThree = function () {
  return (
    <section className="relative bg-gray-900 py-16">
      <div className="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>

      <div className="absolute top-40 right-0 size-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="absolute bottom-20 left-0 size-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="size-8 mx-auto mb-5 rounded-full">
            <img src={techSphereLogo} alt="tested icon" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start Your Project With Tech Sphere
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            From the first idea to the final launch, we’re here to guide and
            deliver. Starting your project is just one message away
          </p>
        </div>

        <div className="grid md:grid-cols-3 items-stretch gap-8 max-w-5xl mx-auto">
          <div className="relative group flex">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 opacity-25 group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300 blur"></div>
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="absolute -top-5 -left-5 size-14 grid place-content-center">
                <div className="absolute inset-0 rounded-full bg-gray-900"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <span className="relative text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white my-4 group-hover:text-blue-400 transition-colors">
                What You Need
              </h3>
              <p className="text-gray-400">
                Share your idea or the service you’re looking for — web, design,
                or something custom. We’ll listen and guide you through what’s
                possible.
              </p>
            </div>
          </div>

          <div className="relative group flex">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 opacity-25 group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300 blur"></div>
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="absolute -top-5 -left-5 size-14 grid place-content-center">
                <div className="absolute inset-0 rounded-full bg-gray-900"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-400"></div>
                <span className="relative text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white my-4 group-hover:text-purple-400 transition-colors">
                Plan + Build Together
              </h3>
              <p className="text-gray-400">
                We collaborate with you to design, plan, and bring your project
                to life — every step of the way
              </p>
            </div>
          </div>

          <div className="relative group flex">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-25 group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300 blur"></div>
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="absolute -top-5 -left-5 size-14 grid place-content-center">
                <div className="absolute inset-0 rounded-full bg-gray-900"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"></div>
                <span className="relative text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white my-4 group-hover:text-cyan-400 transition-colors">
                Launch + Support
              </h3>
              <p className="text-gray-400">
                Once it’s ready, we help you go live and stay by your side with
                updates, support, and next steps.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative group w-fit mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 group-hover:opacity-100 group-active:opacity-100 group-hover:duration-200 rounded-lg blur animate-pulse"></div>

            <a href="#" className="relative">
              <div className="flex items-center gap-2 font-semibold *:text-white px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg group relative">
                <p>Ready to get started?</p>
                <div className="transform group-hover:translate-x-1 transition-transform">
                  &#8702;
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
