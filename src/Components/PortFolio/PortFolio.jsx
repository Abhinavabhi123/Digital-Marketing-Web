import { useParams } from "react-router-dom";
import { cards } from "../../Constants/constant";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function PortFolio() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState("");
  useEffect(() => {
    const data = cards.find((item) => item.id === parseInt(id));
    setDetails(data || {});
    const image = data.images.map((path, index) => ({
      id: index + 1,
      path: path,
    }));
    setImages(image);
  }, [id]);

  function removeImage(){
    setSelectedImages("")
  }

  return (
    <div className=" w-full h-full bg-slate-950 md:pb-20">
      {/* banner section */}
      <div
        className="w-full h-full px-10 md:px-20 pb-10"
        id="portfolio-details"
      >
        <div className="space-y-5">
          <div
            className="text-center text-2xl md:text-5xl font-bold md:space-y-5"
            data-aos="fade-up"
          >
            <h1> Explore Our Digital Marketing </h1>
            <h1> Portfolio</h1>
          </div>
          <p
            className="text-sm md:text-base text-gray-500 md:px-10 text-center"
            data-aos="fade-up"
          >
            Celebrate our journey of innovation and success as we unveil a
            curated selection of our finest digital marketing endeavors. From
            captivating campaigns to transformative strategies, delve into our
            portfolio to witness firsthand how we&apos;ve propelled brands to
            new heights in the digital landscape. Each project is a testament to
            our dedication, creativity, and unwavering commitment to delivering
            exceptional results. Explore our portfolio and discover how we can
            elevate your brand&apos;s digital presence and drive unparalleled
            growth.
          </p>
        </div>
      </div>
      {/* details section */}
      <div className="w-full h-full  bg-transparent  px-10 md:px-20 space-y-5 pb-10">
        <div>
          <h1 className="text-center text-2xl font-medium">{details.title}</h1>
          <p className="text-sm leading-6 tracking-wider indent-8">
            {details.content}
          </p>
        </div>
        <div className="w-full h-96">
          {!selectedImages ? (
            <img
              src={details.url}
              alt="image"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={selectedImages}
                alt="image"
                className="w-full h-full object-contain "
              />
              <div className="absolute w-10 h-10 bg-black/50 rounded-full bottom-5 left-5 rotate-90 ring-1 -translate-x-1/2 flex justify-center items-center cursor-pointer " onClick={removeImage}>
                <MdOutlineKeyboardDoubleArrowDown size={20} className=" opacity-55" />
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
          {images.map((item, i) => (
            <div
              key={i}
              className="w-full h-40 bg-transparent  overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedImages(item.path)}
            >
              <img
                src={item.path}
                alt="image"
                className="w-full mx-auto max-w-80 md:max-w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full">
        <p className="text-sm md:text-base text-gray-500 px-10 md:px-36 text-center">
          Each entry in our portfolio represents a collaborative journey with
          our clients, where we&apos;ve leveraged our skills and insights to
          propel their brands to new heights in the digital world. From
          captivating social media campaigns to innovative SEO strategies, our
          portfolio demonstrates the diverse range of services we offer and the
          tangible impact we&apos;ve made on our clients&apos; businesses.
        </p>
      </div>
    </div>
  );
}
