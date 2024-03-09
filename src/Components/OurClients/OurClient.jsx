import { MdOutlineArrowRightAlt } from "react-icons/md";
import ClientBanner from "../../assets/Images/Clients/client-banner.avif";
import { clientData } from "../../Constants/constant";

export default function OurClient() {
  return (
    <div className="w-full h-full">
      {/* Banner section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 bg-transparent p-10 md:p-20 space-y-5">
          <h1 className="text-2xl  md:text-4xl font-semibold" data-aos="fade-up">
            Meet Our Clients
          </h1>
          <p className="text-gray-500 text-sm md:text-base" data-aos="fade-up"  data-aos-delay="50">
            Sacrosys&apos;s international marketing collective serves as your
            dedicated marketing partner. Our diverse and skilled team of experts
            offers the insights and expertise necessary to navigate and thrive
            in new markets. From creative direction and data analysis to social
            media management and UX design, we assemble the perfect team
            tailored to your project, providing the precise insights needed for
            your campaign&apos;s success. If you&apos;re ready to elevate your
            brand&apos;s presence globally, our team is poised to collaborate
            with yours.
          </p>
          <div>
            <button className="px-3 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center gap-3" data-aos="fade-right">
              Contact Us
              <MdOutlineArrowRightAlt size={25} />
            </button>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent flex justify-center items-center p-10 md:p-20">
          <img
            src={ClientBanner}
            alt="client-banner-image"
            className="rounded-xl ring-2"
            data-aos="fade-left"
          />
        </div>
      </div>
      {/* Client grid  section */}
      <div className="w-full nim-h-[30rem] p-10 md:p-20 space-y-8">
        <div className="flex justify-center" data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">Elevating Client Satisfaction through <br /> Innovative Solutions</h1>
        </div>
        <div className="w-full h-full bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clientData.map((item, i) => (
            <div key={i} className="w-full h-56 bg-white group relative overflow-hidden" data-aos="fade-up">
              <div className="w-full h-full bg-transparent scale-75 flex justify-center items-center">
                <img
                  src={item.image}
                  alt="client-image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 bg-[#265073] absolute transition-all duration-500 top-0 translate-y-56 group-hover:translate-y-0 w-full min-h-full h-fit space-y-3">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
