import { SliderAPI } from "../homePage-Components/OurProducts";

const ServicesCard = function (props) {
  return (
    <div className="h-[350px] w-[300px] shadow-xl bg-gray-950/50  rounded-2xl hover:-translate-y-2 hover:shadow-md hover:shadow-blue-600 active:-translate-y-2 active:shadow-md active:shadow-blue-600  transition-all group">
      <div className="relative">
        <div className="h-[200px] relative">
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

const OurServices = function () {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="flex flex-wrap gap-6 justify-center">
        {SliderAPI.map(function (item, index) {
          return (
            <ServicesCard
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

export default OurServices;
