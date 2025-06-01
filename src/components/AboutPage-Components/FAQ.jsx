import { FaCaretDown } from "react-icons/fa";

const FAQApi = [
  {
    index: 1,
    question: "What kind of services do you offer?",
    answer: "We offer a range of tech services including web development, UI/UX design, digital branding, and custom software solutions tailored to your business goals",
  },
  {
    index: 2,
    question: "How soon will I receive a response after contacting you?",
    answer: "We typically respond within 24 hours. For urgent inquiries, you can mark your message as “Priority” and we’ll get back to you even faster.",
  },
  {
    index: 3,
    question: "Do you offer free consultations or trials?",
    answer: "Yes! We offer a free 15-minute consultation to understand your needs and explore how we can help. It’s our way of ensuring we're the right fit for your project.",
  },
  {
    index: 4,
    question: "What if I encounter a technical issue?",
    answer: "No worries — our support team is always ready to help. We offer ongoing maintenance and support packages to keep your systems running smoothly.",
  },
  {
    index: 5,
    question: "How do you handle my personal or project data?",
    answer: "Your privacy and security are important to us. All data is handled with strict confidentiality, and we follow industry-standard security practices to protect your information.",
  },
  {
    index: 6,
    question: "Can I request custom solutions for my business needs?",
    answer: "Absolutely! We specialize in creating tailored solutions. Whether you're a startup or an established brand, we’ll work closely with you to meet your unique requirements.",
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
          <div className="bg-blue-600/20 p-2 rounded-full mr-4 group-hover:bg-blue-600/30 group-hover:cursor-pointer hover:pointer transition-colors">
            <FaCaretDown />
          </div>
          <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 group-hover:cursor-pointer transition-colors">
            {props.question}
          </h3>
        </div>

        <div className="OnclickReveal remover pl-14 overflow-hidden h-0">
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

  console.log(revealItems);
  

  revealItems.forEach(function (item) {
    if (answer === item && item.classList.contains('h-0')){
      item.classList.remove('h-0');
    } 
    else {
      item.classList.add('h-0');
    }
  });

};

const FAQ = function () {
  return (
    <section className="py-16 px-4 bg-gray-900 relative">
      <div className="absolute top-40 right-0 size-70 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 size-70 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>

      <div  className="grid gap-6 md:grid-cols-2 items-start relative">
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
