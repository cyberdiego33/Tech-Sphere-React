import techSphereLogo from "../assets/images/logo-tech-sphere.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="border-t border-gray-800">
        <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 px-4 md:px-8 lg:px-12 flex flex-wrap gap-10 justify-between">
          <div className="max-w-[300px]">
            <div className="logo flex pb-4">
              <div className="size-8 mr-2">
                <img src={techSphereLogo} alt="logo icon" />
              </div>
              <p className="text-white font-bold text-xl">Tech Sphere</p>
            </div>
            <p className="text-gray-400 text-sm">
              Tech Sphere is a growing collective of creatives and developers
              passionate about delivering value through digital innovation.
              Whether it's web development, design, or tech services, we believe
              great ideas deserve to be built — and built well — for anyone,
              anywhere
            </p>
          </div>

          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold text-white relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </h3>
            <ul className="space-y-3 mt-8">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                    >
                  </span>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                    >
                  </span>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                    >
                  </span>
                  <p>Contact Us</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                    >
                  </span>
                  <p>Blog</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold text-white relative">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </h3>
            <ul className="space-y-3 mt-8">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                    >
                  </span>
                  <p>Terms of Services</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                   >
                  </span>
                  <p>Privacy Policy</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[300px]"></div>
        </div>

        <div className="bg-gray-950 p-6 sm:px-8 lg:px-10 border-t border-gray-800 flex flex-col sm:flex-row items-center space-y-0.5 justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2025 Tech Sphere. All rights reserved.
          </p>

          <div className="flex space-x-6 *:text-sm *:text-gray-500 *:hover:text-gray-400">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
