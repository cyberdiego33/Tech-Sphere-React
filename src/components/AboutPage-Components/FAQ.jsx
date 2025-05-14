import testedIcon from "../../assets/images/texted.png";

const FAQApi = [
  {
    index: 1,
    question: "How would I recieve a response",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.`,
  },
  {
    index: 1,
    question: "How would I recieve a response",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.`,
  },
];

const QuestionCard = function (props) {
  return <></>;
};

const RevealAnswer = function() {
    const revealItems = document.querySelectorAll(".OnclickReveal");
    revealItems.forEach(function(items) {
        items.classList.toggle('h-0');
    })
}

const FAQ = function () {
  return (
    <section className="py-16 px-4 bg-gray-900 relative">
      <div className="absolute top-40 right-0 size-70 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 size-70 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="size-8 mx-auto mb-5 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full">
            <img src={testedIcon} alt="tested icon" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Find quick answers to common questions about our modern services
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">

        <div className="p-6 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-xl border border-gray-700 group transition hover:border-blue-500 hover:shadow-blue-600/5 hover:shadow-xl">

            <div className="flex bg-black items-center hover:cursor-pointer group" onClick={RevealAnswer}>
              <div className="bg-blue-600/20 p-2 px-4 rounded-full mr-4 group-hover:bg-blue-600/30 group-hover:cursor-pointer hover:pointer transition-colors" onClick={RevealAnswer}>
                1
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 group-hover:cursor-pointer transition-colors">
                How quickly will I receive a response?
              </h3>
            </div>

            <div className="OnclickReveal pl-14 overflow-hidden bg-red-400 h-0">
              <p className="text-gray-400 group-hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.
              </p>
            </div>
        </div>

        <div className="p-6 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-xl border border-gray-700 group transition hover:border-blue-500 hover:shadow-blue-600/5 hover:shadow-xl">
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-2 px-4 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
              >
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-xl border border-gray-700 group transition hover:border-blue-500 hover:shadow-blue-600/5 hover:shadow-xl">
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-2 px-4 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
              >
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-xl border border-gray-700 group transition hover:border-blue-500 hover:shadow-blue-600/5 hover:shadow-xl">
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-2 px-4 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
              >
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
