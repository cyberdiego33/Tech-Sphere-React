import successQuote from "../../assets/images/section-2/success-quotes.jpg";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import BusinessWebsite from "../../assets/images/products-image/business-website.jpg";
import LearningCoding from "../../assets/images/products-image/learning-codin.jpg";
import teachingBasics from "../../assets/images/products-image/teaching-basic-computer.jpg";
import NINCard from "../../assets/images/products-image/NIN-card.jpg";
import MobileApp from "../../assets/images/products-image/mobile-app.jpg";
import FlyerHair from "../../assets/images/products-image/flyer-hair.jpg";
import OnlineShopping from "../../assets/images/products-image/online-shopping.jpg";
import techSphereLogo from "../../assets/images/products-image/techSphere-removed-bg.png";

const SliderAPI = [
  {
    position: 1,
    service: "Business Websites",
    description:
      "Showcasing your work with stunning and professional portfolio",
    image: BusinessWebsite,
  },
  {
    position: 2,
    service: "Logo Design",
    description:
      "Creating unique and memorable logos that represent your brand.",
    image: techSphereLogo,
  },
  {
    position: 3,
    service: "Flyer Design",
    description: "Designing eye-catching flyers for your marketing campaigns.",
    image: FlyerHair,
  },
  {
    position: 4,
    service: "E-commerce Website",
    description:
      "Build scalable and robust online store to sell your products.",
    image: OnlineShopping,
  },
  {
    position: 5,
    service: "UI UX Design",
    description: "Crafting user appealing interface and experience",
    image: MobileApp,
  },
  {
    position: 6,
    service: "Computer Appreciation",
    description:
      "Teaching beginners essential computer skills including MS Word, MS Excel, and foundational courses",
    image: teachingBasics,
  },
  {
    position: 7,
    service: "Web Development Tutoring",
    description:
      "Personalized coaching to help you learn web development skills",
    image: LearningCoding,
  },
  {
    position: 8,
    service: "NIMC Services",
    description:
      "We offer NIN registration, personalization, and verification for individuals. Get your NIN plastic card for international or business purpose",
    image: NINCard,
  },
];




const SnapCard = function (props) {
  return (
    <div className="h-[350px] w-[300px] shadow-xl bg-gray-800  rounded-2xl hover:-translate-y-2 hover:shadow-md hover:shadow-blue-600 active:-translate-y-2 active:shadow-md active:shadow-blue-600  transition-all group snap-start flex-shrink-0">
      <div className="relative">
        <div className="h-[200px] relative bg-white rounded-t-2xl">
          <img
            className="rounded-t-xl size-full object-cover"
            src={props.image}
            alt="image"
          />
        </div>
        <div className="text-white p-3">
          <h3 className="text-xl font-semibold my-2 text-purple-700">
            {props.service}
          </h3>
          <p className="text-sm text-gray-300">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

const SnapSection = function () {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-950 relative">
      <div className="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
      >
        <FaChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-proximity gap-4 px-4 scrollbar-hide"
      >
        {SliderAPI.map(function (item, index) {
          return (
            <SnapCard
              position={item.position}
              service={item.service}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export { SliderAPI, SnapSection };
