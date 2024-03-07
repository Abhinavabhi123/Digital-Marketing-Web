import { SocialData } from "../../../Constants/constant";
import SocialMediaBanner from "../../../assets/Images/Social media/social-media-banner.svg";
import { TiArrowRight } from "react-icons/ti";

export default function SocialMediaMarketing() {
  return (
    <div className="w-full h-full">
      {/* Banner section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-20 flex flex-col justify-between items-center space-y-5">
          <div className="text-2xl md:text-5xl font-bold leading-relaxed">
            <h1 className="leading-snug text-center">
              Mastering the Art of Social Media Marketing
            </h1>
            {/* <h1 className="leading-relaxed">Email Marketing</h1> */}
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500 text-center">
            Unlock the potential of social media: Drive growth, engage
            audiences, and craft compelling content. This guide arms you with
            strategies to thrive in the dynamic world of social media marketing.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-sm md:text-base">
              Explore Platform
              <TiArrowRight />
            </button>
            <button className="px-6 py-3 bg-slate-600 rounded-lg text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent flex justify-center items-center px-10 md:p-10">
          <img
            src={SocialMediaBanner}
            alt="affiliate banner"
            className="size-96"
          />
        </div>
      </div>
      {/* Grid section */}
      <div className="w-full h-full">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">Your Gateway to Digital Influence</h1>
          <p className="text-center md:px-36 text-sm text-gray-500 px-10">
            Explore the dynamic world of social media marketing and unlock the
            power to captivate audiences, drive engagement, and propel your
            brand to new heights. From strategic content creation to leveraging
            data-driven insights, this guide equips you with the tools and
            tactics to navigate the ever-evolving landscape of social media with
            confidence and impact.
          </p>
        </div>
        <div className="w-full h-full p-10 md:py-20 md:px-36">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    SocialData.map((item,i)=>(
                        <div key={i} className="w-full min-h-56 rounded-lg bg-gradient-to-r from-blue-400/5 to-purple-500/50 p-2 space-y-3">
                            <div className="w-fit h-fit p-3 rounded-full bg-black">
                                <img src={item.icon} alt="social icon" className="size-8" />
                            </div>
                            <div className="space-y-3">
                                <h2 className="font-semibold">{item.title}</h2>
                                <p className="text-sm">{item.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
}
