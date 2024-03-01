import CountUp from "react-countup";
import { experienceData } from "../../Constants/constant";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function ExperienceCounter() {
  const [view, setView] = useState(false);
  return (
    <div className="w-full min-h-[25rem] bg-transparent mt-10 md:mt-32 pb-20 overflow-hidden">
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">Experience</h1>
        <div className="decoration-div w-36 md:w-44 h-1 rounded-md"></div>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-10 ">
        {experienceData.map((item, i) => (
          <div
            key={i}
            className="w-72  md:w-full h-36 md:h-52 bg-black flex items-center justify-between px-2 md:px-10 rounded-lg m-auto"
            data-aos="slide-left"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="space-x-2">
                <ScrollTrigger onEnter={() => setView(true)}>
                  {view && (
                    <CountUp start={0} end={item.count} duration={3} delay={0} className="text-3xl font-bold" />
                  )}
                  <span className="text-xl md:text-3xl font-bold ">+</span>
                </ScrollTrigger>
              </div>
              <img src={item.image} alt="image" className="size-10 md:size-16" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#B784B7]">
                {item.title}
              </p>
              <p className="text-xs md:text-base">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
