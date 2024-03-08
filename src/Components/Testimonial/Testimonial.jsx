import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { testimonialData } from "../../Constants/constant";

const SliderComponent = (Props) => {
  const { image, content, name } = Props;
  return (
    <div className="text-card mt-20 md:mt-0" data-aos="fade-left">
      <div className="imgBx w-56 h-10">
        <img
          src={image}
          alt=""
          className="rounded-lg w-full h-ful object-cover"
        />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p className="text-sm md:text-base">{content}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default function Testimonial() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        }
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className="w-full">
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">Testimonials</h1>
        <div className="decoration-div w-36 md:w-56 h-1 rounded-md"></div>
      </div>
      <div className="card_wrapper w-full md:min-h-[33rem] h-fit bg-transparent pb-5 flex justify-center md:gap-10 items-center flex-wrap">
        <div className="w-full h-[35rem] bg-transparent ps-8 md:ps-14 flex justify-center items-center">
          <Slider {...settings}  className="bg-transparent w-full h-fit ">
            {testimonialData.map((item, i) => (
              <SliderComponent
                key={i}
                image={item.image}
                content={item.content}
                name={item.name}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
