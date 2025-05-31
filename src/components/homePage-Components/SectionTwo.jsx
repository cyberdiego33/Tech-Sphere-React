import webDevelopmentImage from "../../assets/images/section-2/web-development-thumbnail.jpg";
import graphicsImage from "../../assets/images/section-2/graphics-design-4.jpg";
import successQuote from "../../assets/images/section-2/success-quotes.jpg";
import techSphereLogo from "../../assets/images/logo-tech-sphere.png";
import NINImage from "../../assets/images/section-2/NIN-image.jpg";

const SectionTwo = function () {
  return (
    <section className="py-16 px-4 bg-gray-950 relative">
      <div className="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>

      <div className="text-center max-w-3xl mx-auto">
        <div className="size-8 mx-auto mb-5 rounded-full">
          <img src={techSphereLogo} alt="tested icon" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Tech Sphere Does Best
        </h2>
        <p className="text-xl text-gray-400 mt-4">
          From sleek websites to standout graphics and secure verification tools
          — we deliver digital services that work, look good, and build trust
        </p>
      </div>

      <div className="grid grid-cols-[300px] md:grid-cols-[repeat(2,300px)] [@media(min-width:1325px)]:grid-cols-[repeat(4,300px)] justify-center gap-8 py-10 sm:p-10">
        <div className="rounded-md group max-w-[300px] flex relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
          <div className="bg-gray-950 relative rounded-lg">
            <div className="card-image h-[200px] w-[300px] rounded-md p-3">
              <div className="bg-white h-full rounded-md p-4">
                <ul className="flex flex-col h-full justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Custom Website Development</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">E-commerce Platforms</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Responsive Web Design</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Website Maintenance and Redesign</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white font-bold transition duration-300 group-hover:text-blue-600">
                Web Development
              </h2>
              <p className="my-4 text-gray-400">
                We create responsive, lightning-fast websites built to represent
                your brand and grow your digital presence.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md group max-w-[300px] flex relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
          <div className="bg-gray-950 relative rounded-lg">

            <div className="card-image h-[200px] w-[300px] rounded-md p-3">
              <div className="bg-white h-full rounded-md p-4">
                <ul className="flex flex-col h-full justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Logo & Brand Identity</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Marketing Flyers</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Social Media Graphics</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Print Design Materials</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl text-white font-bold transition duration-300 group-hover:text-blue-600">
                Graphics Design
              </h2>
              <p className="my-4 text-gray-400">
                From logos to social banners — visuals that not only look good,
                but also communicate your message with impact.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md group max-w-[300px] flex relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
          <div className="bg-gray-950 relative rounded-lg">

            <div className="card-image h-[200px] w-[300px] rounded-md p-3">
              <div className="bg-white h-full rounded-md p-4">
                <ul className="flex flex-col h-full justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">NIN Registratiion</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">NIN Verification</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Plastic NIN Cards</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Document Processing</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl text-white font-bold transition duration-300 group-hover:text-blue-600">
                NIMC Services
              </h2>
              <p className="my-4 text-gray-400">
                Our secure verification tools help businesses and individuals
                validate identities with speed and reliability.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md group max-w-[300px] flex relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-25 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
          <div className="bg-gray-950 relative rounded-lg">

            <div className="card-image h-[200px] w-[300px] rounded-md p-3">
              <div className="bg-white h-full rounded-md p-4">
                <ul className="flex flex-col h-full justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Basic Computer Skills</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Microsoft Office Suite</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Digital Literacy Trainging</li>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="size-3 bg-blue-700 rounded-full"></div>
                    <li className="font-semibold ">Web Development Training</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl text-white font-bold transition duration-300 group-hover:text-blue-600">
                Computer Tutoring
              </h2>
              <p className="my-4 text-gray-400">
                We offer computer training and tutorials, from beginners through
                intermediate to advanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
