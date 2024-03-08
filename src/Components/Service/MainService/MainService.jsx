import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceBannerData, serviceData } from "../../../Constants/constant";
import { useNavigate } from "react-router-dom";


export default function MainService() {

  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#E1F0DA",
          opacity: "50%",
          // borderRadius: "10px",
          color: "#fff",
          marginTop: "10px",
        }}
      >
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
      <div className="w-full h-full mb-7">
        <Slider {...settings} className="w-full h-[20rem] md:h-[30rem] ">
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[0].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[1].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[2].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[3].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[4].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img
              src={serviceBannerData[5].image}
              alt="banner image"
              className="w-full h-full object-cover banner-Images"
            />
          </div>
        </Slider>
        {/* Service Details */}
      </div>
      <div className="w-full min-h-[30rem] bg-transparent md:space-y-5 md:mb-20">
        <div className="ps-4 md:ps-20 py-8 space-y-3">
          <h1 className="text-lg md:text-3xl service-title">Services</h1>
          <div className="decoration-div w-24 md:w-36 h-1 rounded-md"></div>
        </div>
        <div className="px-5 md:px-20">
          <p className="text-sm md:text-lg md:tracking-wider md:leading-10">
            Elevate your brand&lsquo;s online presence with our comprehensive
            digital marketing solutions. From strategic SEO campaigns to
            engaging social media strategies, we&lsquo;re here to help your
            business thrive in the digital age. Partner with us and unlock the
            full potential of your brand&lsquo;s digital journey.
          </p>
        </div>
        <div className="w-full h-full bg-transparent flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 p-8 ">
            {serviceData.map((item, i) => (
              <div
                key={i}
                className={`w-full md:size-44  p-5 bg-black/70  flex flex-col justify-center items-center gap-5 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-md hover:shadow-red-600`}
                onClick={() => navigate(`${item.link}`)}
                data-aos="fade-up"
              >
                <img
                  src={item.image}
                  alt="image"
                  className="size-14 md:size-20"
                />
                <p className="text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 md:px-20">
          <p className="text-sm md:text-lg md:tracking-wider md:leading-10">
            Our commitment to delivering top-notch services is unwavering,
            ensuring each client receives the utmost quality and honesty
            throughout their digital marketing journey.
          </p>
        </div>
      </div>
    </>
  );
}
