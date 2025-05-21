import { Link } from "react-router-dom";

const HeroSection = function () {
  return (
    <>
      <section
        id="hero-section"
        className="relative mt-[55px] bg-gradient-to-r from-[#0f172a] via-[#312e81] to-[#0f172a]"
      >
        <div
          id="bottom-glow"
          className="absolute top-20 right-20 size-60 bg-blue-500 rounded-full blur-3xl animate-pulse duration-200 ease-in-out"
        ></div>

        <div className="absolute bottom-10 left-10 size-60 bg-purple-500 rounded-full blur-3xl animate-pulse duration-200 ease-in-out"></div>

        <div
          className="absolute top-20 left-1/4 size-2 bg-blue-500 rounded-full animate-ping ease-in-out"
          style={{ animationDuration: "3s" }}
        ></div>

        <div
          className="absolute top-40 right-20 size-2 bg-purple-500 rounded-full animate-ping ease-in-out"
          style={{ animationDuration: "3s" }}
        ></div>

        <div
          className="absolute bottom-20 left-20 size-2 bg-blue-500 rounded-full animate-ping ease-in-out"
          style={{ animationDuration: "3s" }}
        ></div>

        <div id="hero-conatiner" className="py-20 px-5 md:px-10 relative z-5">
          <div
            id="left-section"
            className="*:text-white max-w-2xl pb-8 border-b border-b-gray-700"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-[3rem] sm:leading-[4rem]">
              Creative <span className="text-blue-500">Digital Solution</span> for
              Modern Needs
            </h1>

            <p className="my-5 text-xl">
              A growing hub for digital services <br />
              Built by a team that's ready to reach you, wherever you are.
            </p>

            <div id="hero-buttons" className="space-x-4 sm:flex">
              <Link to={"/"}>
                <div className="flex items-center gap-2 *:text-white font-semibold w-fit px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg group">
                  <p>Get Started Now</p>
                  <div className="transform group-hover:translate-x-1 transition-transform">
                    &#8702;
                  </div>
                </div>
              </Link>
              <Link to={"/about"}>
                <div className="group flex gap-2 px-8 py-2 bg-gray-800 border border-gray-700 hover:border-gray-600 shadow-lg rounded-lg font-semibold w-fit">
                  <p>About Us</p>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    >
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex gap-8 mt-[20px]">
            <div className="text-center animate-bounce ease-in-out">
              {/* <!-- <div className="text-3xl">🌐</div> --> */}
              <p className="text-gray-300 mt-1">Innovative</p>
            </div>
            <div className="text-center animate-bounce ease-in-out delay-150">
              {/* <!-- <div className="text-3xl">🧠</div> --> */}
              <p className="text-gray-300 mt-1">Creative</p>
            </div>
            <div className="text-center animate-bounce ease-in-out delay-300">
              {/* <!-- <div className="text-3xl">⚡</div> --> */}
              <p className="text-gray-300 mt-1">Trustworthy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default HeroSection;