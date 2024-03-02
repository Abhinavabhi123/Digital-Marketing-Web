import "./aboutBanner.css";
import DigitalBulb from "../../assets/Images/digital-bulb.png";
import Rainbow from "../../assets/Svg/rainbow-1.svg";
import MarketingVision from "../../assets/Images/marketing-vision.png";
import MarketingMission from "../../assets/Images/marketing-mission.png";
import dots from "../../assets/Svg/dots.svg"


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
          <p className="text-xl md:text-5xl"> Meet Our</p>
          <p className="text-xl md:text-5xl"> Digital Marketing Team</p>
          <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
      </div>
      <div>
        <div className="p-6 md:pt-20 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">About Us</h1>
          <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
      </div>
      {/* About  top 1*/}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col flex-wrap md:flex-row items-center relative">
        <img
          src={Rainbow}
          alt="svg image"
          className="absolute hidden md:block -right-20 w-1/3 opacity-80 top-0 "
        />
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 ">
          <p
            className="text-sm md:text-base tracking-wide md:leading-10"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            earum, corporis architecto consequatur libero modi commodi et, optio
            deserunt cum perferendis maiores eos incidunt corrupti. Neque nulla
            saepe dolore cupiditate enim cumque architecto earum officiis
            commodi illum iste provident sapiente reiciendis porro non
            blanditiis repellat veritatis amet, iure vel molestiae quos?
            Officia, voluptatum! Recusandae, esse. Ducimus neque dignissimos
            eligendi maiores, atque ut repellendus! Quas minus ullam iure
            molestias amet corporis asperiores rem, optio ipsam expedita maxime
            quis autem perferendis modi odit neque eum ab deleniti soluta
            temporibus. Repudiandae fugit, dolores magni autem itaque
            accusantium voluptates provident sequi velit suscipit vel. eligendi
            maiores, atque ut repellendus! Quas minus ullam iure molestias amet
            corporis asperiores rem.
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
      {/* Our vision section */}
      <div className="w-full min-h-[30rem] bg-transparent relative">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">Our Vision</h1>
          <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row">
        
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 ">
            <p
              className="text-sm md:text-base tracking-wide md:leading-10"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              harum sint, repudiandae molestias tempore omnis quia quo quis qui
              minima, facere blanditiis voluptatum, aut incidunt aspernatur quam
              enim alias voluptatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nostrum modi tempore ipsa deleniti aperiam sint
              enim esse. Consequuntur iste molestias quaerat eligendi, quis
              voluptas possimus assumenda, aliquid necessitatibus, itaque
              expedita.
            </p>
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent px-20 flex justify-center items-center relative">
            <img src={MarketingVision} alt="image" />
          </div>
        </div>
      </div>
      {/* Our  mission section */}
      <div className="w-full min-h-[30rem] bg-transparent relative">
        <div className="p-6 md:pt-10 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl font-semibold">Our Mission</h1>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 to bg-purple-400 rounded-md"></div>
        </div>
        <div className="w-full h-[80%] bg-transparent flex flex-col md:flex-row flex-wrap">
        <img src={dots} alt="image" className="absolute hidden md:block right-0 opacity-60" />
          <div className="w-full h-full md:w-1/2 bg-transparent px-20 flex justify-center items-center">
            <img src={MarketingMission} alt="image" />
          </div>
          <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-8 ">
            <p
              className="text-sm md:text-base tracking-wide md:leading-10 relative"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              harum sint, repudiandae molestias tempore omnis quia quo quis qui
              minima, facere blanditiis voluptatum, aut incidunt aspernatur quam
              enim alias voluptatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nostrum modi tempore ipsa deleniti aperiam sint
              enim esse. Consequuntur iste molestias quaerat eligendi, quis
              voluptas possimus assumenda, aliquid necessitatibus, itaque
              expedita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}