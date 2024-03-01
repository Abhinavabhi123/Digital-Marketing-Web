import "./homePageServices.css";
import Shape from "../../assets/shape.svg";
import { serviceData } from "../../Constants/constant";
import Rainbow from "../../assets/Svg/rainbow.svg"

export default function HomePageServices() {
  return (
    <div className="w-full min-h-[40rem] bg-transparent relative overflow-hidden">
      <img
        src={Shape}
        alt="shape image"
        className="absolute w-72 hidden md:block -top-24 -left-[3.2rem] rotate-90 skew-y-12 "
      />
      <img src={Rainbow} alt="rainbow" className="absolute bottom-0 md:right-0 w-full z-0 opacity-70"  />
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">Services</h1>
        <div className="decoration-div w-36 h-1 rounded-md"></div>
      </div>
      <div className="w-full h-full bg-transparent flex flex-col md:flex-row relative">
        <div className="w-full h-full md:w-1/3 bg-transparent p-4 md:p-16 space-y-10">
          <p
            className="md:tracking-widest md:leading-10 md:text-[20px] font-normal"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            dolores ipsam quidem recusandae consectetur culpa dignissimos ab
            veritatis accusamus labore sint repellat asperiores laborum commodi.    
            veritatis accusamus labore sint repellat asperiores laborum commodi.
          </p>
        <div className="flex justify-center">
            <button className="md:text-lg px-5 py-1 rounded-full service_btn">Explore More Services</button>
        </div>
        </div>
        <div className="w-full h-full md:w-2/3 bg-transparent grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-4">
          {serviceData.map((item, i) => (
            <div
              key={i}
              className="w-full h-60 md:h-80 bg-black rounded-lg shadow-lg  shadow-gray-700 p-3 overflow-auto space-y-4"
              data-aos="fade-up"
            >
                <div className="space-y-4">
                    <img src={item.image} alt="icon"  className="size-10"/>
                    <p className="text-sm md:text-lg">{item.title}</p>
                </div>
                <div>
                    <p className="text-xs md:text-base">{item.content}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
