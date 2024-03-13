import { useState } from "react";
import { cards } from "../../Constants/constant";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function PortFolio() {
  const [viewDetails, setViewDetails] = useState(false);
  const [data, setData] = useState(null);

  function viewHandler(id) {
    setViewDetails(true);
    setData(id - 1);
    const portfolioDetails = document.getElementById("portfolio-details");
    if (portfolioDetails) {
      portfolioDetails.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleRemoveDetails() {
    setViewDetails(false);
    setData(null);
  }
  function handlePrev() {
    setData(data - 1);
  }
  function handleNext() {
    setData(data + 1);
  }

  return (
    <div className=" w-full h-full bg-slate-950 md:pb-20">
      {/* banner section */}
      <div className="w-full min-h-[30rem] p-10 md:p-20" id="portfolio-details">
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
      {!viewDetails ? (
        <div className="w-full min-h-[40rem] p-10 md:px-36">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-transparent gap-6">
            {cards.map((item) => (
              <div
                key={item.id}
                className="w-full md:h-96 bg-transparent ring-4 rounded-lg relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.url}
                  alt="portfolio image"
                  className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute w-full h-full bg-black/50 -bottom-96 transition-all duration-500 group-hover:-bottom-56 md:group-hover:-bottom-72 p-5 space-y-3">
                  <h1 className="font-medium">{item.title}</h1>
                  <button
                    className="bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-1 text-sm rounded-2xl "
                    onClick={() => viewHandler(item.id)}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-full px-10 md:px-28">
          {/* arrow section */}
          <div className="w-full h-fit bg-transparent flex  justify-between ">
            <div
              className="w-fit h-fit p-3 rounded-full ring-2 cursor-pointer"
              onClick={handleRemoveDetails}
            >
              <MdKeyboardDoubleArrowLeft size={20} />
            </div>
            <div className="flex gap-5">
              {data > 0 && (
                <div
                  className="w-fit h-fit p-3 rounded-full ring-2 cursor-pointer"
                  onClick={handlePrev}
                >
                  <BsArrowLeft size={20} fontWeight={800} />
                </div>
              )}
              {cards.length - 1 > data && (
                <div
                  className="w-fit h-fit p-3 rounded-full ring-2 cursor-pointer"
                  onClick={handleNext}
                >
                  <BsArrowRight size={20} fontWeight={800} />
                </div>
              )}
            </div>
          </div>
          {/* Content section */}
          {data >= 0 && (
            <div className="w-full h-full  bg-transparent flex flex-col md:flex-row pt-10 md:pt-0">
              <div className="md:p-5 w-full h-full md:w-1/2 space-y-5">
                <h1 className="text-xl font-medium">{cards[data].title}</h1>
                <p className="text-sm leading-5 tracking-wider">
                  {cards[data].content}
                </p>
              </div>
              <div className="w-full h-full md:w-1/2 p-10 md:p-20 flex justify-center items-center">
                <img
                  src={cards[data].url}
                  alt="person image"
                  className="w-full min-w-36 md:w-fit h-full md:h-[30rem] object-contain rounded-lg ring-2"
                />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="w-full h-full">
        <p className="text-sm md:text-base text-gray-500 px-10 md:px-36 text-center">
          Each entry in our portfolio represents a collaborative journey with
          our clients, where we&apos;ve leveraged our skills and insights to propel
          their brands to new heights in the digital world. From captivating
          social media campaigns to innovative SEO strategies, our portfolio
          demonstrates the diverse range of services we offer and the tangible
          impact we&apos;ve made on our clients&apos; businesses.
        </p>
      </div>
    </div>
  );
}
