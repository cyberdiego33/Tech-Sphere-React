import successQuote from "../../assets/images/section-2/success-quotes.jpg";

const SliderAPI = [
  {
    position: 1,
    service: "E-commerce Website",
    description: "Build scalable and robust online store to sell your products."
  },
  {
    position: 2,
    service: "Logo Design",
    description: "Creating unique and memorable logos that represent your brand."
  },
  {
    position: 3,
    service: "Flyer Design",
    description: "Designing eye-catching flyers for your marketing campaigns."
  },
  {
    position: 4,
    service: "Portfolio Websites",
    description: "Showcasing your work with stunning and professional portfolio"
  },
  {
    position: 5,
    service: "E-commerce Website",
    description: "Build scalable and robust online store to sell your products"
  },
  {
    position: 6,
    service: "E-commerce Website",
    description: "Build scalable and robust online store to sell your products"
  },
  {
    position: 7,
    service: "E-commerce Website",
    description: "Build scalable and robust online store to sell your products"
  },
  {
    position: 8,
    service: "E-commerce Website",
    description: "Build scalable and robust online store to sell your products"
  },
];

const SlidingCard = function (props) {
  return (
    <div className="items-cont h-fit bg-gray-800 p-3 rounded-2xl" style={{ "--position": props.position }}>
      <div className="h-[200px]">
        <img className="rounded-t-xl" src={successQuote} alt="image" />
      </div>
      <div className="text-white">
        <h3 className="text-xl text-purple-700">{props.service}</h3>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
};

const OurProducts = function () {
  return (
    <section className="py-16 px-4 lg:px-8 relative bg-gray-950">
      <div className="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>

      <div className="slider-cont">
        <div className="list-cont">
          {SliderAPI.map(function (item, index) {
            return <SlidingCard position={item.position} service={item.service} description={item.description} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
export {SliderAPI, SlidingCard};
