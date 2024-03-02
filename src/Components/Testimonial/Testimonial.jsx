import "./testimonial.css";
import { testimonialData } from "../../Constants/constant";

const SliderComponent = (Props) => {
  const { image, content, name } = Props;
  return (
    <div className=" text-card mt-20 md:mt-0" data-aos="fade-left">
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
  return (
    <div className="w-full">
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">Testimonials</h1>
        <div className="decoration-div w-36 md:w-56 h-1 rounded-md"></div>
      </div>
      <div className="card_wrapper w-full md:min-h-[33rem] h-fit bg-transparent pb-5 flex justify-center md:gap-10 items-center flex-wrap">
        {testimonialData.map((item, i) => (
          <SliderComponent
            key={i}
            image={item.image}
            content={item.content}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
