import Logo from "../../assets/logo.svg";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import FooterBackground from "../../assets/Svg/footer-background.svg"

export default function Footer() {
  return (
    <div className="w-full min-h-[30rem] bg-transparent">
      {/* Top section */}
      <div className="p-5 flex items-center gap-2 border-b border-gray-400/50">
        <img src={Logo} alt="logo" className="w-20 md:w-auto" />
        <div className="h-[0.1rem] md:h-1 w-20 md:w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
      </div>
      {/* Middle section */}
      <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row md:flex-wrap gap-2 justify-center">
        {/* left section */}
        <div className="w-full md:w-[30%] h-full bg-yellow-400x ">
          <div className="w-full h-full bg-transparent space-y-3 flex flex-col items-center py-6" data-aos="fade-up">
            <p className="text-xl font-semibold underline">Services</p>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="cursor-pointer text-sm md:text-base">Email Marketing</li>
              <li className="cursor-pointer text-sm md:text-base">Content Creation</li>
              <li className="cursor-pointer text-sm md:text-base">SEO</li>
              <li className="cursor-pointer text-sm md:text-base">Social Media Marketing </li>
              <li className="cursor-pointer text-sm md:text-base">Advertising</li>
              <li className="cursor-pointer text-sm md:text-base">Affiliate Marketing</li>
              <li className="cursor-pointer text-sm md:text-base">Digital Analysis</li>
              <li className="cursor-pointer text-sm md:text-base">Video Marketing</li>
              <li className="cursor-pointer text-sm md:text-base">Influencer Marketing</li>
            </ul>
          </div>
        </div>
        {/* Middle section */}
        <div className="w-full md:w-[30%] h-full bg-transparent ">
          <div className="w-full h-full bg-transparent space-y-3 flex flex-col items-center py-6 " data-aos="fade-up">
            <p className="text-xl font-semibold underline">Locations</p>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="flex items-center gap-1 cursor-pointer"><MdLocationPin/><p className="cursor-pointer text-sm md:text-base">Sharjah </p></li>
              <li className="flex items-center gap-1 cursor-pointer"><MdLocationPin/><p className="cursor-pointer text-sm md:text-base">Saudi Arabia</p></li>
              <li className="flex items-center gap-1 cursor-pointer"><MdLocationPin/><p className="cursor-pointer text-sm md:text-base">Abu Dhabi</p></li>
            
            </ul>
          </div>
        </div>
        {/* right section */}
        <div className="w-full md:w-[30%] h-full bg-transparent ">
          <div className="w-full h-full bg-transparent space-y-3 flex flex-col items-center py-6 " data-aos="fade-up">
            <p className="text-xl font-semibold underline">Support</p>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="cursor-pointer text-sm md:text-base">Contact Us</li>
              <li className="cursor-pointer text-sm md:text-base">Career</li>
              <li className="cursor-pointer text-sm md:text-base"> Privacy Policy</li>
              <li className="cursor-pointer text-sm md:text-base"> Terms of use</li>
              <li className="cursor-pointer text-sm md:text-base">Blogs</li>
              <li className="cursor-pointer text-sm md:text-base">Portfolio</li>
              <li className="cursor-pointer text-sm md:text-base">Testimonial</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6 px-6">
        <p className="text-xs text-gray-400 text-center">At [Your Website Name], we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is received and collected by [Your Website Name] and how it is used.</p>
      </div>
      <div className="flex justify-center gap-6 py-4">
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebookF/>
        <FaLinkedinIn/>
        <FaTiktok/>
      </div>
      <div className="flex justify-center">
        <img src={FooterBackground} alt="image" className="h-12"/>
      </div>
    </div>
  );
}
