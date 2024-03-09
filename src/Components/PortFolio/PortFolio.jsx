import Heromain from "./Heromain";
import "./portFolio.css";

export default function PortFolio() {
  return (
    <div className="App w-full">
      {/* banner section */}
      <div className="w-full min-h-[30rem] p-10 md:p-20">
        <div className="space-y-5">
          <div className="text-center text-2xl md:text-5xl font-bold md:space-y-5" data-aos="fade-up">
           <h1> Explore Our Digital Marketing </h1>
           <h1> Portfolio</h1>
          </div>
          <p className="text-sm md:text-base text-gray-500 md:px-10" data-aos="fade-up">
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
      <Heromain />
    </div>
  );
}
