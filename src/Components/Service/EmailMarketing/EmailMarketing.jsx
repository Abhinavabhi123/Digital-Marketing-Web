import { TiArrowRight } from "react-icons/ti";
import Email from "../../../assets/Images/Services/Email marketing/email.webp";
import EmailSubBanner from "../../../assets/Svg/Emailmarketing/Email-sub-banner.svg"
import { emailData } from "../../../Constants/constant";

export default function EmailMarketing() {
  return (
    <div className="w-full h-full">
      {/* Banner section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-20 flex flex-col justify-between items-center space-y-5">
          <div className="text-2xl md:text-5xl font-bold leading-relaxed">
            <h1 className="leading-relaxed">Maximize the ROI of</h1>
            <h1 className="leading-relaxed">Email Marketing</h1>
          </div>
          <p className="text-sm md:text-lg font-medium text-gray-500 text-center">
            One unified platform to enhance engagement, increase conversions,
            and grow your revenue.
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
        <div className="w-full h-[25rem] md:min-h-[30rem] md:w-1/2 bg-transparent p-5  md:p-10">
          <img
            src={Email}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* top section */}
      <div className="w-full min-h-[30rem] bg-transparent">
        <div className="ps-4 md:ps-20 py-8 space-y-3">
          <h1 className="text-lg md:text-3xl service-title">
            Email Marketing Software
          </h1>
          <div className="decoration-div w-36 md:w-[25rem] h-1 rounded-md"></div>
        </div>
        <div className="w-full h-full px-5 md:px-20 ">
          <div className="w-full h-full bg-transparent flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
            <div className="w-full h-full md:w-1/2 bg-transparent flex justify-center items-center md:p-10">
              <p className="text-sm  md:text-lg">
                Welcome to our Email Marketing Software Reviews - we are in the
                process of reviewing all the software platforms to give agencies
                and brands a better overview of features, benefits and pricing
                of the different solutions on offer.
              </p>
            </div>
            <div className="w-full h-full md:w-1/2 bg-transparent">
                <img src={EmailSubBanner} alt="image" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Grid section */}
      <div className="w-full min-h-[30rem] p-5 md:p-20">
        <div className="w-full h-full bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {
                emailData.map((item,i)=>(
                    <div key={i} className="w-full min-h-60 bg-gradient-to-r from-blue-400/5 to-purple-500/50 rounded-lg p-3 space-y-5">
                        <div className="p-4 w-fit h-fit rounded-full bg-black/80">
                            <img src={item.icon} alt="icon" className="size-8 animate-pulse" />
                        </div>
                        <div className="space-y-5">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))
            }
            </div>  

      </div>
    </div>
  );
}
