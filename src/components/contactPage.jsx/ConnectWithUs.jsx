import techSphereLogo from "../../assets/images/logo-tech-sphere.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const SocialsApi = [
  {
    socialName: "whatsApp",
    index: 1,
    socialMedia: "Contact Us At",
    socialHandle: "tech sphere",
    socialIcon: FaWhatsapp,
    socialLink: "https://wa.me/message/CX2EPOT54IM7E1",
  },
  {
    socialName: "Gmail",
    index: 2,
    socialMedia: "Email Us At",
    socialHandle: "techsphere@gmail.com",
    socialIcon: SiGmail,
    socialLink: "https://wa.me/message/CX2EPOT54IM7E1",
  },
  {
    socialName: "Linkedln",
    index: 3,
    socialMedia: "Connect With Us At",
    socialHandle: "techsphere@LinkedIn.com",
    socialIcon: FaLinkedinIn,
    socialLink: "https://www.linkedin.com/in/goodluck-iwuji-260993346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    socialName: "X",
    index: 4,
    socialMedia: "Follow Us At",
    socialHandle: "techsphere@Twitter.com",
    socialIcon: RiTwitterXFill,
    socialLink: "https://x.com/Good97660?t=_2lXDGVlEf1kjJRsvHLy-Q&s=09",
  },
];

const Socials = function (props) {
  return (
    <div className="space-y-6 mb-4">
      <a href={props.socialLink} target="_blank">
        <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 hover:border-blue-500 group transition-all">
          <div className="p-3 size-4 rounded-full mr-4 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors grid place-content-center">
            <props.socialIcon />
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
      </a>
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
            <div className="mb-6 size-7 rounded-full">
              <img src={techSphereLogo} alt="chat logo" />
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
                  socialLink={items.socialLink}
                />
              );
            })}
          </div>

          <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-sm border border-gray-700">
            <div className="mb-6 size-7 rounded-full">
              <img src={techSphereLogo} alt="chat logo" />
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
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="w-full outline-none text-sm text-white"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>

                <button className="px-2 py-1 rounded-sm text-white cursor-pointer ml-auto block bg-gradient-to-r from-blue-600 to-purple-600">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
