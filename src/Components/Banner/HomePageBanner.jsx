import "./banner.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import Arrow from "../../assets/arrow.svg";
export default function HomePageBanner() {
  return (
    <div className="w-full h-full md:h-[85%] md:p-20 relative bg-transparent">
      <div className="w-full h-full flex  flex-col-reverse md:flex-row ">
        {/* Banner left side */}
        <div className="h-fit  bg-red-   items-center flex flex-col  social-icons transition-all duration-700">
          <div className="flex md:flex-col gap-10 ">
            <div className="size-10 group/instagram  gap-1 flex justify-end items-center">
              <div className="w-[5px] h-0 rounded-md group-hover/instagram:h-full transition-all duration-500 bg-gradient-to-t from-purple-500 to-blue-500"></div>
              <FaInstagram className="cursor-pointer  text-xl md:text-3xl social_media_icon relative" />
            </div>
            <div className="size-10 group/facebook  gap-1 flex justify-end items-center">
              <div className="w-[5px] h-0 rounded-md group-hover/facebook:h-full transition-all duration-500 bg-gradient-to-t from-purple-500 to-blue-500"></div>
              <FaFacebookF className="cursor-pointer text-xl md:text-3xl social_media_icon" />
            </div>

            <div className="size-10 group/twitter  gap-1 flex justify-end items-center">
              <div className="w-[5px] h-0 rounded-md group-hover/twitter:h-full transition-all duration-500 bg-gradient-to-t from-purple-500 to-blue-500"></div>
              <FaTwitter className="cursor-pointer text-xl md:text-3xl social_media_icon" />
            </div>
            <div className="size-10 group/linked  gap-1 flex justify-end items-center">
              <div className="w-[5px] h-0 rounded-md group-hover/linked:h-full transition-all duration-500 bg-gradient-to-t from-purple-500 to-blue-500"></div>
              <FaLinkedinIn className="cursor-pointer text-xl md:text-3xl social_media_icon" />
            </div>
            <div className="size-10 group/tik  gap-1 flex justify-end items-center">
              <div className="w-[5px] h-0 rounded-md group-hover/tik:h-full transition-all duration-500 bg-gradient-to-t from-purple-500 to-blue-500"></div>
              <FaTiktok className="cursor-pointer text-xl md:text-3xl social_media_icon" />
            </div>
            <img className="h-20 hidden md:block cursor-pointer hover:scale-110 transition-all duration-500" src={Arrow} alt="arrow" />
          </div>
        </div>
        {/* Banner right side */}
        <div className="w-full h-full px-8 flex justify-center items-center">
          <div className="w-[100%] md:w-[70%] h-full bg-transparent relative">
            <div className="w-full h-full flex justify-center items-center">
              <video
                src="https://d3i7ke5fj3tp7c.cloudfront.net/videos/Cloud+animation_V2.mp4"
                className="relative w-full h-full z-0 scale-100 mix-blend-screen inset-0 object-contain content-center"
                autoPlay
                muted
                loop
                playsInline
                disableRemotePlayback
              ></video>
            </div>
            <div className="z-[10] absolute w-full h-full flex flex-col justify-center items-center top-1/2 -translate-y-[50%] bg-transparent ">
              <div className="w-fit space-y-4 md:space-y-8 uppercase banner-text-wrapper bg-transparent">
                <h1 className=" sub-text">Elevate Your Brand</h1>
                <h1 className="main-text">with Expert </h1>
                <h1 className="sub-text">
                  Digital Marketing <br />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
