import { useParams } from "react-router-dom";
import { cards } from "../../Constants/constant";
import { useEffect, useState } from "react";

export default function PortFolio() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const data = cards.find((item) => item.id === parseInt(id));
    setDetails(data || {});
  }, [id]);
  return (
    <div className=" w-full h-full bg-slate-950 md:pb-20">
      {/* banner section */}
      <div className="w-full h-full px-10 md:px-20 pb-10" id="portfolio-details">
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
      <div className="w-full h-full  bg-transparent flex flex-col md:flex-row px-10 md:px-20">
        <div className="md:p-5 w-full h-full md:w-1/2 space-y-5">
          <h1 className="text-xl font-medium">{details.title}</h1>
          <p className="text-sm leading-5 tracking-wider">
            {details.content}
          </p>
        </div>
        <div className="w-full h-full md:w-1/2 p-10 md:p-20 flex justify-center items-center">
          <img
            src={details.url}
            alt="person image"
            className="w-full min-w-36 md:w-fit h-full md:h-[30rem] object-contain rounded-lg ring-2"
          />
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
