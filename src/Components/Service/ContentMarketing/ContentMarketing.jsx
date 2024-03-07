import { TiArrowRight } from "react-icons/ti";
import { contentMarketingData } from "../../../Constants/constant";

export default function ContentMarketing() {
  return (
    <div className="w-full h-full">
      {/* Banner section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl md:text-5xl font-bold text-center tracking-wider leading-snug">
          Content marketing solution &<br /> idea of your business
        </h1>
        <p className="text-sm md:text-xl text-center px-5 md:px-0">
          Sacrosys is a content marketing solution that <br /> tracks the
          effectiveness of your blog,
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
      {/* Middle section */}
      <div className="w-full h-full">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl md:text-4xl font-semibold">Key features</h1>
          <p className="text-sm md:text-xl text-center text-gray-500 px-5">
            Sacrosys has quickly become the go-to content marketing <br />{" "}
            solution for over 600 clients around the world
          </p>
        </div>
        <div className="w-full min-h-[40rem] flex justify-center items-center p-2 md:px-20">
          <div className="w-full h-full bg-gray-900 rounded-2xl">
            <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-10">
              {contentMarketingData.map((item, i) => (
                <div key={i} className="bg-transparent w-full h-full p-3 space-y-5">
                  <div className="p-3 w-fit h-fit rounded-full bg-black/70">
                    <img src={item.icon} alt="icon" className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-wider">
                      {item.title}
                    </h2>
                    <p className="text-gray-500">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
