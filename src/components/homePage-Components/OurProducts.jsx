import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import BusinessWebsite from "../../assets/images/products-image/business-website.jpg";
import LearningCoding from "../../assets/images/products-image/learning-codin.jpg";
import teachingBasics from "../../assets/images/products-image/teaching-basic-computer.jpg";
import NINCard from "../../assets/images/products-image/NIN-card.jpg";
import MobileApp from "../../assets/images/products-image/mobile-app.jpg";
import FlyerHair from "../../assets/images/products-image/flyer-hair.jpg";
import OnlineShopping from "../../assets/images/products-image/online-shopping.jpg";
import techSphereLogo from "../../assets/images/products-image/techSphere-removed-bg.png";
import RidanImage from "../../assets/images/products-image/ridan-image.jpg";

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
    image: RidanImage,
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
    <div className="h-[350px] w-[300px] shadow-xl bg-gray-800 rounded-2xl snap-start flex-shrink-0">
      <div className="relative">
        <div className="h-[200px] relative bg-black rounded-t-2xl">
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

const ResponsiveCarousel = ({ SliderAPI }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create infinite scroll data by tripling the array
  const infiniteData = [...SliderAPI, ...SliderAPI, ...SliderAPI];
  const originalLength = SliderAPI.length;

  // Fixed scroll distance for 300px cards + gap
  const getScrollDistance = () => 316; // 300px card + 16px gap

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ 
        left: -getScrollDistance(), 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ 
        left: getScrollDistance(), 
        behavior: 'smooth' 
      });
    }
  };

  const updateCurrentIndex = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = getScrollDistance();
      let index = Math.round(scrollLeft / cardWidth);
      
      // Map infinite scroll index back to original array index
      const mappedIndex = index % originalLength;
      setCurrentIndex(mappedIndex);
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleInfiniteScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = getScrollDistance();
      const totalWidth = scrollWidth - clientWidth;
      
      // Reset position when reaching end or beginning for infinite effect
      if (scrollLeft >= totalWidth - 10) {
        // Jump to second set (middle section)
        scrollRef.current.scrollTo({ 
          left: originalLength * cardWidth, 
          behavior: 'auto' 
        });
      } else if (scrollLeft <= 10) {
        // Jump to second set (middle section)  
        scrollRef.current.scrollTo({ 
          left: originalLength * cardWidth, 
          behavior: 'auto' 
        });
      }
    }
  };

  // Auto-scroll functionality
  const startAutoplay = () => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // 3 second delay
    
    setAutoplayInterval(interval);
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
  };

  const resetAutoplay = () => {
    stopAutoplay();
    setTimeout(startAutoplay, 1000); // Restart after 1 second
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = getScrollDistance();
      // Scroll to the middle set + desired index for infinite scroll
      const targetScroll = (originalLength + index) * cardWidth;
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize to middle section for infinite scroll
    if (scrollRef.current) {
      const cardWidth = getScrollDistance();
      scrollRef.current.scrollTo({ left: originalLength * cardWidth, behavior: 'auto' });
    }
    
    checkScrollButtons();
    startAutoplay();
    
    const handleScroll = () => {
      checkScrollButtons();
      updateCurrentIndex();
      setTimeout(handleInfiniteScroll, 100); // Small delay for smooth transition
    };
    
    const handleResize = () => checkScrollButtons();
    
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
      stopAutoplay();
    };
  }, []);

  return (
    <section 
      className="py-16 bg-gray-950 relative overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={resetAutoplay}
    >
      <div className="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      
      {/* Left Fade Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none"></div>
      
      {/* Right Fade Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none"></div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full shadow-lg transition-all duration-200 ${
          canScrollLeft 
            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105' 
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        <FaChevronLeft size={20} />
      </button>
      
      <button 
        onClick={scrollRight}
        disabled={!canScrollRight}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full shadow-lg transition-all duration-200 ${
          canScrollRight 
            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105' 
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Carousel Container */}
      <div className="relative px-16"> {/* Add padding to hide partial cards */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {infiniteData.map((item, index) => (
            <SnapCard
              key={`${index}-${item.service}`}
              position={item.position}
              service={item.service}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {SliderAPI.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            onClick={() => {
              scrollToIndex(index);
              resetAutoplay();
            }}
          />
        ))}
      </div>
    </section>
  );
};

// Example usage with dummy data
const SnapSection = () => {

  return <ResponsiveCarousel SliderAPI={SliderAPI} />;
};
export { SliderAPI, SnapSection };
