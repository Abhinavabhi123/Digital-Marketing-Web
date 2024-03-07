import { TiArrowRight } from "react-icons/ti";
import AffiliateBanner from "../../../assets/Images/Affiliate/affiliate-banner.svg";
import { affiliateData } from "../../../Constants/constant";

export default function AffiliateMarketing() {
  return (
    <div className="w-full h-full">
      {/* Banner Section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-20 flex flex-col justify-between items-center space-y-5">
          <div className="text-2xl md:text-5xl font-bold leading-relaxed">
            <h1 className="leading-relaxed text-center">
              Unleashing Profitable Partnerships
            </h1>
            {/* <h1 className="leading-relaxed">Email Marketing</h1> */}
          </div>
          <p className="text-sm md:text-base font-medium text-gray-500 text-center">
            Dive into the art of affiliate marketing mastery with our
            comprehensive guide. Explore how to forge lucrative partnerships and
            maximize revenue streams in the digital landscape.
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
        <div className="w-full h-full md:w-1/2 bg-transparent flex justify-center items-center p-10">
          <img src={AffiliateBanner} alt="affiliate banner" />
        </div>
      </div>
      {/* Middle section */}
      <div className="w-full h-full">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-center leading-relaxed">
            Decoding the Diverse Landscape of Affiliate <br /> Marketing
            Strategies
          </h1>
          <p className="px-32 text-center text-sm text-gray-500">
            Explore the multifaceted world of affiliate marketing strategies,
            from influencer partnerships to content-driven campaigns. Learn how
            different approaches can unlock new revenue streams and drive growth
            for your business in the digital age.
          </p>
        </div>
        <div className="w-ful h-full px-10 md:py-20 md:px-32">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {
                    affiliateData.map((item,i)=>(
                        <div key={i} className="w-full min-h-56 bg-gradient-to-r from-blue-400/5 to-purple-500/50 rounded-md p-2 space-y-3">
                            <div className="p-3 rounded-full w-fit h-fit bg-black">
                                <img src={item.icon} alt="affiliate icon" className="size-8 animate-pulse" />
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
