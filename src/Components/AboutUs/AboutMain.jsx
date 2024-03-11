import "./aboutBanner.css";
import DigitalBulb from "../../assets/Images/digital-bulb.png";
import Rainbow from "../../assets/Svg/rainbow-1.svg";
import MarketingVision from "../../assets/Images/marketing-vision.png";
import MarketingMission from "../../assets/Images/marketing-mission.png";
import Purpose from "../../assets/Images/purpose.png"
import dots from "../../assets/Svg/dots.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function AboutBanner() {
  return (
    <section className="w-full min-h-[35rem] bg-transparent relative pb-10 overflow-hidden">
      {/* imageDiv */}
      <div className="aspect-video w-full max-h-[30rem] h-1/3 md:h-full about-banner-image">
        <div
          className="relative w-full h-full  font-bold tracking-wider flex flex-col justify-center space-y-2 md:space-y-6 ps-10 md:ps-20"
          data-aos="fade-up"
        >
          <p className="text-xl md:text-5xl">Unlocking Online Success:</p>
          <p className="text-xl md:text-5xl"> Creative</p>
          <p className="text-xl md:text-5xl"> Digital Marketing Partner</p>
          <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
      </div>
      <div>
        <div className="p-6 md:pt-20 md:px-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">About Us</h1>
          <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
      </div>
      {/* About  top 1*/}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col flex-wrap md:flex-row  items-center relative">
        <img
          src={Rainbow}
          alt="svg image"
          className="absolute hidden md:block -right-20 w-1/3 opacity-80 top-0 "
        />
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 md:px-20 md:space-y-4 ">
          <p
            className="text-sm md:text-base tracking-wide md:leading-7"
            data-aos="fade-up"
          >
            <b>Sacrosys</b> has been a leading software development, cyber
            security and Al integration firm in the Middle East since its
            inception in 2001. The company has consistently exceeded its own
            expectations and has helped many organizations in the region become
            better equipped to meet challenges of a rapidly growing and changing
            digital landscape.
          </p>
          <p
            className="text-sm md:text-base tracking-wide md:leading-7"
            data-aos="fade-up"
          >
            At Sacrosys, we strive to understand changing customer needs, and
            enrich their quality of life by simply making the technology readily
            usable for them. We are proud to have solid Information Systems
            Professionals, who study, design, develop, enhance, customize,
            implement, maintain and support various aspects of Information
            Technology.
          </p>
          <p
            className="text-sm md:text-base tracking-wide md:leading-7"
            data-aos="fade-up"
          >
            Our end-to-end expertise and experience in managing the projects
            right through ideation to fructification the engagements undertaken
            are a partnership, working with the client to establish an under-
            standing of the business needs and requirements and providing the
            best results.
          </p>
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent z-[1]">
          <img
            src={DigitalBulb}
            alt="digital image"
            className="w-full h-full inset-0  object-contain content-center mix-blend-screen"
          />
        </div>
      </div>
      {/* Purpose */}
      <div className="w-full min-h-[23rem] bg-transparent relative">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">Purpose</h1>
          <div className="h-1 w-36 md:w-32 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row flex-wrap">
          <div className="w-full h-full md:w-1/2 bg-transparent px-20 flex justify-center items-center">
            <img src={Purpose} alt="image" className="w-full md:w-[50%]  object-cover"/>
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 ">
            <p
              className="text-sm md:text-base tracking-wide md:leading-7 relative"
              data-aos="fade-up"
            >
              Sacrosys is committed to revolutionizing the tech industry by
              providing bespoke software solutions, including web and mobile app
              development, API integrations, cybersecurity services, and Al
              innova- tions. Our purpose is to enhance the digital experi- ence
              for clients, ensuring their sustained success and security in the
              ever-evolving technological realm.
            </p>
          </div>
        </div>
      </div>
      {/* Our vision section */}
      <div className="w-full min-h-[23rem] bg-transparent relative">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">Our Vision</h1>
          <div className="h-1 w-36 md:w-40 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row">
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 md:px-20">
            <p
              className="text-sm md:text-base tracking-wide md:leading-7"
              data-aos="fade-up"
            >
              Pioneering customized software solutions, Sacrosys envisions
              becoming the trusted partner for organizations seeking excellence
              in web applications, mobile apps, API integrations, cybersecurity,
              and Al.
            </p>
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent px-20 flex justify-center items-center relative">
            <img src={MarketingVision} alt="image" />
          </div>
        </div>
      </div>
      {/* Our  mission section */}
      <div className="w-full min-h-[23rem] bg-transparent relative">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">Our Mission</h1>
          <div className="h-1 w-36 md:w-48 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row flex-wrap">
          <img
            src={dots}
            alt="image"
            className="absolute hidden w-1/3 md:block right-0 top-1/2 -translate-y-1/2 opacity-60"
          />
          <div className="w-full h-full md:w-1/2 bg-transparent px-20 flex justify-center items-center">
            <img src={MarketingMission} alt="image" />
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 ">
            <p
              className="text-sm md:text-base tracking-wide md:leading-7 relative"
              data-aos="fade-up"
            >
              Empowering businesses with tailored software and cutting-edge
              technology, Sacrosys is dedicated to delivering top-notch
              consultancy, development, and integration services. We aim to be
              the go-to solution provider for clients navigating the dynamic
              digital landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40rem]">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold text-[#9AD0C2]">
            Behind the Wall
          </h1>
          <div className="h-1 w-36 md:w-64 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center w-full h-full bg-transparent md:py-16">
          <div className="w-full h-full md:w-1/3 bg-transparent flex justify-center md:justify-end items-center">
            <div className="md:w-96 md:h-[30rem] bg-transparent flex justify-end p-2 md:p-0">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064973.jpg?t=st=1709529706~exp=1709533306~hmac=e8a0a5ab4d571f548481b29002726fe49e1f5e501c69bbe32f59e5bf08bbc766&w=360"
                alt="image"
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 space-y-5">
            <div className="flex items-center flex-col md:flex-row gap-2">
              <h1 className="text-lg md:text-2xl font-bold">Tonny Stark</h1>
              <div className="h-[0.15rem] w-20 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
            </div>
            <div>
              <p
                className="md:leading-7 text-sm md:text-base"
                data-aos="fade-up"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, autem laboriosam! Doloremque, ipsum quibusdam? Error,
                assumenda cumque. Eaque cum sed assumenda ex excepturi rerum,
                distinctio veniam perferendis fugiat in debitis iusto. Quis
                consequatur fugiat eligendi itaque mollitia totam magnam nemo
                adipisci. Quis, reiciendis modi. Sit laudantium sapiente hic
                facere eos blanditiis eius quaerat exercitationem ipsum enim, at
                ipsa voluptates rerum! Provident nostrum, est, modi dolorum
                ducimus dicta repellat illum ipsa ipsum eligendi earum, quaerat
                neque error quos? Amet quas neque ratione praesentium magnam
                architecto consectetur molestias, inventore itaque dolores
                quidem, quos dolorum eaque tempora. Voluptas dolorum cupiditate
                corporis nesciunt libero.
              </p>
            </div>
            <div className="h-[0.18rem] w-36 bg-violet-400 rounded-md"></div>
            <div className="flex items-center gap-3" data-aos="fade-up">
              <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-500" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
