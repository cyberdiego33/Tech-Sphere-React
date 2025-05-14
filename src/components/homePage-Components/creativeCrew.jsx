import DiegoImage from "../../assets/images/home-Creative-crew/Diego38.jpg";
import CssIcon from "../../assets/images/home-Creative-crew/css-3.png";
import FlaskIcon from "../../assets/images/home-Creative-crew/flask.svg";
import HtmlIcon from "../../assets/images/home-Creative-crew/html-5.png";
import jsIcon from "../../assets/images/home-Creative-crew/js.png";
import kevoImage from "../../assets/images/home-Creative-crew/kevo.jpg";
import munachiImage from "../../assets/images/home-Creative-crew/munachi.jpg";
import pythonIcon from "../../assets/images/home-Creative-crew/python.png";
import tailwindIcon from "../../assets/images/home-Creative-crew/tailwind-css.svg";
import StarIcon from "../../assets/images/home-Creative-crew/star.png";





const CreativeCrew = function() {
    return (
         <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our Creative Crew
            </h2>
            <p className="max-w-2xl text-lg text-gray-400 mx-auto">
              We’re a small but growing team passionate about building,
              designing, and solving. This is who’s behind the work.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            <div
              className="w-70 grow max-w-[354px] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-sm p-4"
            >
              <div className="flex *:size-3.5 pb-4">
                <img src={StarIcon} alt="star icon" /><img
                  src={StarIcon}
                  alt="star icon"
                /><img src={StarIcon} alt="star icon" /><img
                  src={StarIcon}
                  alt="star icon"
                /><img src={StarIcon} alt="star icon" />
              </div>

              <div className="w-full h-[300px] rounded-lg">
                <img
                  src={munachiImage}
                  alt="munachi photo"
                  className="object-cover object-bottom size-full rounded-md"
                />
              </div>

              <div className="pt-4 text-white">
                <p className="font-semibold">Gem Munachi</p>
                <p className="text-gray-600 text-sm">Project Manager</p>
              </div>
            </div>

            <div
              className="w-70 grow max-w-[354px] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-sm p-4"
            >
              <div className="flex *:size-3.5 pb-4 gap-0.5">
                <img src={pythonIcon} alt="badge icon😎" />
                <img src={FlaskIcon} alt="badge icon😎" /><img
                  src={HtmlIcon}
                  alt="badge icon😎"
                /><img src={CssIcon} alt="badge icon😎" /><img
                  src={jsIcon}
                  alt="badge icon😎"
                /><img src={tailwindIcon} alt="" />
              </div>

              <div className="w-full h-[300px] rounded-lg">
                <img
                  src={DiegoImage}
                  alt=""
                  className="object-cover object-bottom size-full rounded-md"
                />
              </div>

              <div className="pt-4 text-white">
                <p className="font-semibold">Iwuji Goodluck</p>
                <p className="text-gray-600 text-sm">Web Developer</p>
              </div>
            </div>

            <div
              className="w-70 max-w-[354px] grow bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-sm p-4"
            >
              <div className="flex *:size-3.5 pb-4">
                <img src={StarIcon} alt="star icon" /><img
                  src={StarIcon}
                  alt="star icon"
                /><img src={StarIcon} alt="star icon" /><img
                  src={StarIcon}
                  alt="star icon"
                /><img src={StarIcon} alt="star icon" />
              </div>

              <div className="w-full h-[300px] rounded-lg">
                <img
                  src={kevoImage}
                  alt=""
                  className="object-cover object-center size-full rounded-md"
                />
              </div>

              <div className="pt-4 text-white">
                <p className="font-semibold">John Kelvin</p>
                <p className="text-gray-600 text-sm">UI/UX Graphics Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default CreativeCrew;