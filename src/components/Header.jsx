import { Link } from "react-router-dom";
import techSphereLogo from "../assets/images/logo-tech-sphere.png";

function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-md">
        <div className="navigation flex justify-between items-center p-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800 shadow-lg backdrop-blur-sm md:px-6 relative">
          <div className="logo flex">
            <div className="size-8 mr-2">
              <img src={techSphereLogo} alt="logo icon" className="object-cover size-full object-center" />
            </div>
            <p className="text-white font-bold text-xl">Tech Sphere</p>
          </div>

          <nav className="items-center hidden md:flex">
            <ul className="desktop-nav flex space-x-4 *:text-gray-400 *:hover:text-white *:transition-colors pr-4 border-r border-r-gray-800">
              <Link to={"/"}>
                {" "}
                <li>Home</li>{" "}
              </Link>
              <Link to={"/about"}>
                {" "}
                <li>About</li>{" "}
              </Link>
              <Link to={"/contact"}>
                {" "}
                <li>Contact</li>{" "}
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
            </ul>

            <Link href="#">
              <div className="flex items-center gap-2 font-semibold *:text-white ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg group">
                <p>Get Started</p>
                <div className="transform group-hover:translate-x-1 transition-transform">
                  &#8702;
                </div>
              </div>
            </Link>
          </nav>

          <div className="cursor-pointer nav-mobile p-2 rounded-md hover:bg-gray-200 *:w-4 *:h-0.5 *:bg-white space-y-1 md:hidden" onClick={openMobileNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          id="menu"
          className="bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-800 shadow-lg backdrop-blur-sm h-0 overflow-hidden"
        >
          <ul className="space-y-2 *:text-gray-400 *:hover:text-white *:transition-colors mb-4 p-4 border-b border-gray-800 ">
            <li onClick={openMobileNav}>
              <Link className=" w-full block" to={"/"}>Home</Link>
            </li>
            <li onClick={openMobileNav}>
              <Link className=" w-full block" to={"/about"}>About</Link>
            </li>
            <li onClick={openMobileNav}>
              <Link className=" w-full block" to={"/contact"}>Contact</Link>
            </li>
            <li onClick={openMobileNav}>
              <Link className=" w-full block" href="#">Blog</Link>
            </li>
          </ul>

          <Link href="#">
            <div className="font-semibold *:text-white px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg group">
              <p className="text-center">Get Started</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

const openMobileNav = function () {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('h-0');
    menu.classList.toggle('p-2');
};

export default Header;
