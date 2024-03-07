import { TiArrowRight } from "react-icons/ti";
import Banner from "../../../assets/Images/Advertising/Ad-banner.jpg";
import { AdvertisingData } from "../../../Constants/constant";

export default function Advertising() {
  return (
    <div className="w-full h-full">
      {/* Banner section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent px-10 space-y-6 md:p-20 flex flex-col justify-between">
          <h1 className="text-4xl font-bold tracking-wider">
            Transform Your Business with Proven Advertising Techniques!
          </h1>
          <p className="text-gray-500">
            Revolutionize your business trajectory with time-tested advertising
            methods. Experience the transformative power of proven strategies
            today!
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
        <div className="w-full h-full md:w-1/2 bg-transparent p-10 md:p-20">
          <img src={Banner} alt="banner image" className="rounded-2xl ring-4" />
        </div>
      </div>
      {/* Middle section */}
      <div className="w-full h-full flex flex-col items-center gap-5">
        <div className="flex flex-col gap-4 items-center px-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Exploding Strategies for Online Success
          </h1>
          <p className="text-center md:px-56 text-sm text-gray-500">
            Unleash the power of cutting-edge digital advertising strategies
            with &apos;Digital Advertising Dynamite&apos;, a comprehensive guide
            to navigating the online marketing landscape. From explosive social
            media campaigns to precision-targeted search ads, this resource
            equips businesses with the tools they need to ignite success in the
            digital realm.
          </p>
        </div>
        <div className="w-full h-full px-10 md:py-20 md:px-56">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {AdvertisingData.map((item, i) => (
              <div
                key={i}
                className="w-full min-h-56 rounded-lg bg-gradient-to-r from-blue-400/50 to-purple-500/50 p-2 space-y-3"
              >
                <div className="p-3 bg-black/80 w-fit h-fit rounded-full">
                  <img src={item.icon} alt="icon" className="size-8" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-sm md:text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
