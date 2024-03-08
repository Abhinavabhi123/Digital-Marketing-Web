import "./homePageServices.css";
import Shape from "../../assets/shape.svg";
import { serviceData } from "../../Constants/constant";
import Rainbow from "../../assets/Svg/rainbow.svg";
import { useNavigate } from "react-router-dom";

export default function HomePageServices() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[40rem] bg-transparent relative overflow-hidden ">
      <img
        src={Shape}
        alt="shape image"
        className="absolute w-72 hidden md:block -top-24 -left-[3.2rem] rotate-90 skew-y-12 "
      />
      <img
        src={Rainbow}
        alt="rainbow"
        className="absolute top-0 md:right-0 w-full z-0 opacity-70"
      />
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">Services</h1>
        <div className="decoration-div w-36 h-1 rounded-md"></div>
      </div>
      <div className="w-full h-full bg-transparent flex flex-col md:flex-row relative">
        <div className="w-full h-full md:w-1/3 bg-transparent p-4 md:p-10 space-y-10">
          <p
            className="md:tracking-wider md:leading-7 md:text-[20px] font-normal"
            data-aos="fade-up"
          >
            Our tailored suite of services is designed to elevate your online
            presence, captivate your audience, and drive tangible results that
            exceed expectations. From strategic planning to execution, we craft
            immersive digital experiences that resonate with your target
            audience and propel your brand to new heights.
          </p>
          <div className="flex justify-center">
            <button className="text-base md:text-lg px-5 py-1 rounded-full service_btn">
              Explore More Services
            </button>
          </div>
        </div>
        {/* Card Section */}
        <div className="w-full h-full md:w-2/3 bg-transparent grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-4">
          {serviceData.map((item, i) => (
            <div
              key={i}
              className="w-full h-[23rem] md:h-96 bg-black rounded-lg shadow-lg  shadow-gray-700  overflow-hidden space-y-4 relative"
              data-aos="fade-up"
            >
              <div className="space-y-4 bg-gradient-to-r from-blue-500 to-purple-400 p-3">
                <img
                  src={item.image}
                  alt="icon"
                  className="size-10 animate-pulse  "
                />
                <p className="text-sm md:text-lg">{item.title}</p>
              </div>
              <div className="p-3">
                <p className="text-xs md:text-base">{item.content}</p>
              </div>
              <div className="flex justify-center w-full bg-transparent absolute bottom-5">
                <button onClick={() => navigate(`${item.link}`)}
                className="px-3 py-1 rounded-2xl bg-yellow-400/70 text-sm hover:text-base transition-all duration-500"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
