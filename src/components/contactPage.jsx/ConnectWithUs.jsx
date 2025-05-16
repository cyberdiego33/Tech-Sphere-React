import shield from "../../assets/images/shield.png";

const SocialsApi = [
  {
    index: 1,
    socialMedia: "Email Us At",
    socialHandle: "techsphere@gmail.com",
    socialIcon: shield,
  },
  {
    index: 2,
    socialMedia: "Connect With Us At",
    socialHandle: "techsphere@LinkedIn.com",
    socialIcon: shield,
  },
  {
    index: 3,
    socialMedia: "Follow Us At",
    socialHandle: "techsphere@Twitter.com",
    socialIcon: shield,
  },
];

const Socials = function (props) {
  return (
    <div className="space-y-6 mb-4">
      <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-blue-500 group transition-all">
        <div className="p-3 size-4 rounded-full mr-4 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
          <img src={props.socialName} alt="" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{props.socialMedia}</p>
          <a
            className="text-gray-300 font-medium hover:text-blue-400 transition-colors"
            href="#"
          >
            {props.socialHandle}
          </a>
        </div>
      </div>
    </div>
  );
};

const ConnectWithUs = function () {
  return (
    <section className="py-16 px-4 bg-gray-950 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-700  to-transparent opacity-40"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-sm border border-gray-700">
            <div className="mb-6 size-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <img src={shield} alt="chat logo" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              Connect with Us
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about our services? We're here to help you succeed
            </p>

            {SocialsApi.map(function (items) {
              return (
                <Socials
                  socialMedia={items.socialMedia}
                  socialIcon={items.socialIcon}
                  socialHandle={items.socialHandle}
                  index={items.index}
                  socialName={items.socialName}
                />
              );
            })}
          </div>

          <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-sm border border-gray-700">
            <div className="mb-6 size-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <img src={shield} alt="chat logo" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a message
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about our services? You can Email Us Here. Fill in
              the form
            </p>
            <div>
              <form action="">
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-blue-500 group transition-all mb-4">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="w-full text-gray-400 outline-0"
                    required
                  />
                </div>
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-blue-500 group transition-all mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full text-gray-400 outline-0"
                    required
                  />
                </div>
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-blue-500 group transition-all mb-4 ">
                  <input
                    type="textarea"
                    placeholder="Type your message"
                    className="w-full text-gray-400 outline-0 text-wrap"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
