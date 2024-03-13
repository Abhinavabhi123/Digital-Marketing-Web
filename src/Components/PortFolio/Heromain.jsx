import { PinContainer } from "./Animation";
import LampDemo from "./lamp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/Images/Portfolio/image 1.jpg";
import img2 from "../../assets/Images/Portfolio/image 2.jpg";
import img3 from "../../assets/Images/Portfolio/image 3.jpg";
import img4 from "../../assets/Images/Portfolio/image 4.jpg";
import img5 from "../../assets/Images/Portfolio/image 5.jpg";
import img6 from "../../assets/Images/Portfolio/image 6.jpg";
import img7 from "../../assets/Images/Portfolio/image 7.jpg";
import img8 from "../../assets/Images/Portfolio/image 8.jpg";
import img9 from "../../assets/Images/Portfolio/image 9.jpg";
const cards = [
  {
    url: img1,
    title: "Title 1",
    id: 1,
  },
  {
    url: img2,
    title: "Title 2",
    id: 2,
  },
  {
    url: img3,
    title: "Title 3",
    id: 3,
  },
  {
    url: img4,
    title: "Title 4",
    id: 4,
  },
  {
    url: img5,
    title: "Title 5",
    id: 5,
  },
  {
    url: img6,
    title: "Title 6",
    id: 6,
  },
  {
    url: img7,
    title: "Title 7",
    id: 7,
  },
  {
    url: img8,
    title: "Title 8",
    id: 8,
  },
  {
    url: img9,
    title: "Title 9",
    id: 9,
  },
];

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1329,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="relative w-full h-full bg-slate-950  flex flex-col space-y-6 md:space-y-20 mt-10 md:mt-0 md:mb-20">
      <div>
        <div className="ps-4 md:ps-20 py-8 space-y-3">
          <h1 className="text-lg md:text-3xl service-title">Portfolio</h1>
          <div className="decoration-div w-36 md:w-36 h-1 rounded-md"></div>
        </div>
      </div>
      <div>
        <LampDemo />
      </div>

      <div className="relative w-full flex h-full items-center overflow- ">
        <div className="flex gap-6 w-full h-full">
          <Slider {...settings} className="w-full h-full bg-transparent">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Card = (Props) => {
  const { card } = Props;
  return (
    <PinContainer>
      <div
        key={card.id}
        className="group relative   h-[350px] w-[250px] overflow-hidden bg-neutral-200 md:p-20"
      >
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 w-full h-full">
          <img
            src={card.url}
            alt="portfolio image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <div className="absolute inset-0 z-10 grid place-content-center">
      
      </div> */}
      </div>
    </PinContainer>
  );
};

export default Example;
