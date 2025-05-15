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
    index: 2,
    question: "How would I recieve a response",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.`,
  },
  {
    index: 3,
    question: "How would I recieve a response",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.`,
  },
  {
    index: 4,
    question: "How would I recieve a response",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo enim consectetur ipsam voluptas esse, doloribus consequuntur
                quae dolorum aut.`,
  },
];

const QuestionCard = function (props) {
  return (
    <>
      <div className="p-6 bg-gradient-to-bl from-gray-800 to-gray-900 rounded-xl border border-gray-700 group transition hover:border-blue-500 hover:shadow-blue-600/5 hover:shadow-xl">
        <div
          className="flex items-center hover:cursor-pointer group"
          onClick={RevealAnswer}
        >
          <div className="bg-blue-600/20 p-2 px-4 rounded-full mr-4 group-hover:bg-blue-600/30 group-hover:cursor-pointer hover:pointer transition-colors">
            {props.index}
          </div>
          <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 group-hover:cursor-pointer transition-colors">
            {props.question}
          </h3>
        </div>

        <div className="OnclickReveal pl-14 overflow-hidden h-0">
          <p className="text-gray-400 group-hover:text-gray-300">
            {props.answer}
          </p>
        </div>
      </div>
    </>
  );
};

const RevealAnswer = function (event) {
  const clicked = event.currentTarget;
  const answer = clicked.nextElementSibling;
  const revealItems = document.querySelectorAll(".OnclickReveal");
  revealItems.forEach(function (items) {
    items.classList.add("h-0");
  });

  if (answer && answer.classList.contains("OnclickReveal")) {
    answer.classList.toggle("h-0");
  }
};

const FAQ = function () {
  return (
    <section className="py-16 px-4 bg-gray-900 relative">
      <div className="absolute top-40 right-0 size-70 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 size-70 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="grid gap-6 md:grid-cols-2 items-start relative">
        {FAQApi.map(function (items) {
          return (
            <QuestionCard
              question={items.question}
              answer={items.answer}
              index={items.index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
