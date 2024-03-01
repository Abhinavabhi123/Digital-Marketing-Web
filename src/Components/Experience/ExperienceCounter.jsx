import CountUp from "react-countup";
import { experienceData } from "../../Constants/constant";

export default function ExperienceCounter() {
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
              <div  className="space-x-2" >
                <CountUp end={item.count} className="text-3xl font-bold"/><span className="text-3xl font-bold ">+</span>
              </div>
              <img src={item.image} alt="image" className="size-16" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
