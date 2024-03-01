import "./homePageAbout.css";
import DigitalMarketingImage from "../../assets/digital-marketing-about-image.jpg";
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
            className="md:tracking-widest md:leading-10 md:text-[20px] font-normal"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum recusandae voluptate nam, neque at blanditiis reprehenderit
            aperiam hic ex minima eveniet sequi sapiente cumque amet dignissimos
            debitis in veritatis? Repellendus in tenetur saepe labore illo, vel
            architecto! Laboriosam ipsum pariatur voluptatibus? Ad, cupiditate
            possimus. Exercitationem, quos necessitatibus. Ipsum, praesentium.
          </p>
          <div className="flex justify-center ">
            <button
              className="bg-yellow-500 md:text-xl px-5 py-1 rounded-full about-navigation-btn"
              data-aos="fade-up-right"
              data-aos-delay="50"
            >
              About us
            </button>
          </div>
          <img src={Shapes} alt="shape" className="absolute w-72 hidden md:block  -bottom-10 -left-20 rotate-45" />
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent p-4 md:p-10">
          <div className="w-full h-full bg-transparent relative flex justify-center items-center">
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
