import "./homePageAbout.css";
import DigitalMarketingImage from "../../assets/Images/digital-marketing-about-image.jpg";
import Shapes from "../../assets/shape.svg";

export default function HomePageAbout() {
  return (
    <div className="w-full min-h-[40rem] bg-transparent overflow-hidden" id="home-about">
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl about-title">About Us</h1>
        <div className="decoration-div w-36 h-1 rounded-md"></div>
      </div>
      <div className="w-full  h-[80%] flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent p-4 md:p-16 space-y-4 relative">
          <p
            className="md:tracking-widest md:leading-7 md:text-lg font-normal"
            data-aos="fade-up"
          >
            Sacrosys has been a leading software development, cyber
            security and Al integration firm in the Middle East since its
            inception in 2001. The company has consistently exceeded its own
            expectations and has helped many organizations in the region become
            better equipped to meet challenges of a rapidly growing and changing
            digital landscape.
          </p>
          <p
           className="md:tracking-widest md:leading-7 md:text-lg font-normal"
           data-aos="fade-up">
            At Sacrosys, we strive to understand changing customer needs, and
            enrich their quality of life by simply making the technology readily
            usable for them. We are proud to have solid Information Systems
            Professionals, who study, design, develop, enhance, customize,
            implement, maintain and support various aspects of Information
            Technology.</p>
          <div className="flex justify-center ">
            <button
              className="md:text-xl px-5 py-1 rounded-full about-navigation-btn"
              data-aos="fade-up-right"
              data-aos-delay="50"
            >
              About us
            </button>
          </div>
          <img src={Shapes} alt="shape" className="absolute w-72 hidden md:block  -bottom-10 -left-20 rotate-45" />
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent p-4 md:p-10 flex justify-center items-center">
          <div className=" w-fit md:w-full h-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 relative flex justify-center items-center rounded-3xl p-1">
            <img
              src={DigitalMarketingImage}
              alt="digital marketing image"
              className="max-w-60 md:max-w-full  w-full h-full object-cover marketing-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
