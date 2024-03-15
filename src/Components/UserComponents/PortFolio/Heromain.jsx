import { PinContainer } from "./Animation";
import LampDemo from "./lamp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../../../Constants/constant";
import { useNavigate } from "react-router-dom";


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
    <section className="relative w-full h-full bg-slate-950  flex flex-col  mt-10 md:mt-0 md:mb-20">
      <div>
        <div className="ps-4 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl service-title">Portfolio</h1>
          <div className="decoration-div w-36 md:w-36 h-1 rounded-md"></div>
        </div>
      </div>
      <div>
        <LampDemo />
      </div>

      <div className="relative w-full flex h-full items-center overflow-hidden mt-20">
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
  const navigate = useNavigate()
  return (
    <PinContainer>
      <div
        key={card.id}
        className="group relative   h-[350px] w-[250px] overflow-hidden bg-neutral-200 md:p-20"
        onClick={()=>navigate(`/portfolio/${card.id}`)}
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
