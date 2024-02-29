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
            <FaInstagram className="cursor-pointer text-xl md:text-3xl"  />
            <FaFacebookF className="cursor-pointer text-xl md:text-3xl"  />
            <FaTwitter className="cursor-pointer text-xl md:text-3xl"  />
            <FaLinkedinIn className="cursor-pointer text-xl md:text-3xl"  />
            <FaTiktok className="cursor-pointer text-xl md:text-3xl" />
            <img className="h-20 hidden md:block" src={Arrow} alt="arrow" />
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
