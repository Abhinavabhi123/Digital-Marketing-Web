import Logo from "../../assets/logo.svg";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import FooterBackground from "../../assets/Svg/footer-background.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[30rem] bg-black/20">
      {/* Top section */}
      <div className="p-5 flex items-center gap-2 border-b border-gray-400/50">
        <img src={Logo} alt="logo" className="w-20 md:w-auto" />
        <div className="h-[0.1rem] md:h-1 w-20 md:w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
      </div>
      {/* Middle section */}
      <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row md:flex-wrap gap-2 justify-center">
        {/* left section */}
        <div className="w-full md:w-[30%] h-full bg-yellow-400x ">
          <div
            className="w-full h-full bg-transparent flex flex-col items-center py-6"
            data-aos="fade-up"
          >
            <div className="w-fit h-full bg-transparent space-y-3 ">
              <p className="text-xl font-semibold underline">Services</p>
              <ul className="space-y-2 flex flex-col ">
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/seo")}
                >
                  SEO
                </li>
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/content-marketing")}
                >
                  Content Creation
                </li>
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/email-marketing")}
                >
                  Email Marketing
                </li>
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/advertising")}
                >
                  Advertising
                </li>
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/affiliate-marketing")}
                >
                  Affiliate Marketing
                </li>
                <li
                  className="cursor-pointer text-sm md:text-base"
                  onClick={() => navigate("/services/social-media")}
                >
                  Social Media Marketing{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Middle section */}
        <div className="w-full md:w-[30%] h-full bg-transparent ">
          <div
            className="w-full h-full bg-transparent flex flex-col items-center py-6 "
            data-aos="fade-up"
          >
            <div className="w-fit h-full  space-y-3">
              <p className="text-xl font-semibold underline">Locations</p>
              <ul className="space-y-2 flex flex-col bg-transparent">
                <li className="flex items-center gap-1 cursor-pointer">
                  <MdLocationPin />
                  <p className="cursor-pointer text-sm md:text-base">India </p>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                  <MdLocationPin />
                  <p className="cursor-pointer text-sm md:text-base">UAE</p>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                  <MdLocationPin />
                  <p className="cursor-pointer text-sm md:text-base">Qatar</p>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                  <MdLocationPin />
                  <p className="cursor-pointer text-sm md:text-base">Bahrain</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="w-full md:w-[30%] h-full bg-transparent ">
          <div
            className="w-full h-full bg-transparent flex flex-col items-center py-6 "
            data-aos="fade-up"
          >
            <div className="w-fit h-full space-y-3">
              <p className="text-xl font-semibold underline">Support</p>
              <ul className="space-y-2 flex flex-col">
                <li className="cursor-pointer text-sm md:text-base">
                  <Link to={"/contact-us"} className="">
                    Contact Us
                  </Link>
                </li>
                <li className="cursor-pointer text-sm md:text-base">
                  <Link to={"/"}>Testimonial</Link>
                </li>
                <li className="cursor-pointer text-sm md:text-base">
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li className="cursor-pointer text-sm md:text-base">
                  Privacy Policy
                </li>
                <li className="cursor-pointer text-sm md:text-base">
                  Terms of use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6 px-6">
        <p className="text-xs text-gray-400 text-center">
          At [Your Website Name], we prioritize the privacy of our visitors.
          This Privacy Policy document outlines the types of personal
          information that is received and collected by [Your Website Name] and
          how it is used.
        </p>
      </div>
      <div className="flex justify-center gap-6 py-4">
        <FaInstagram className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaFacebookF className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
        <FaTiktok className="cursor-pointer" />
      </div>
      <div className="flex justify-center">
        <img src={FooterBackground} alt="image" className="h-12" />
      </div>
    </div>
  );
}
