import successQuote from "../../assets/images/section-2/success-quotes.jpg";

const SliderAPI = [
  {
    position: 1,
  },
  {
    position: 2,
  },
  {
    position: 3,
  },
  {
    position: 4,
  },
  {
    position: 5,
  },
  {
    position: 6,
  },
  {
    position: 7,
  },
  {
    position: 8,
  },
];

const SlidingImage = function (props) {
  return (
    <div class="items-cont" style={{ "--position": props.position }}>
      <img src={successQuote} alt="image" />
    </div>
  );
};

const OurProducts = function () {
  return (
    <section class="py-16 px-4 lg:px-8 relative bg-gray-950">
      <div class="absolute h-px inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>

      <div class="slider-cont">
        <div class="list-cont">
          {SliderAPI.map(function (item, index) {
            return <SlidingImage position={item.position} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
