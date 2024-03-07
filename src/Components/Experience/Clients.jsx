import { clientData } from "../../Constants/constant";
import Quotes from "../../assets/Svg/quotes.svg";

export default function Clients() {
  return (
    <div className="w-full min-h-[20rem] bg-slate-900/80 flex flex-col md:flex-row md:mb-12 my-20 md:my-0">
      {/* bg-[#7469B6] */}
      {/* bg-opacity-35 */}
      <div className="w-full h-full md:w-1/2 bg-transparent p-6 md:p-16">
        <img src={Quotes} alt="quotes" className="size-10 md:size-20" />
        <p className="text-sm md:text-xl font-semibold">
          <div className="p-1 md:p-6 tracking-wide"  data-aos="fade-up">
            Thank you once again for your unwavering support! Your continued
            loyalty means the world to us.
          </div>
        </p>
      </div>
      <div className="w-full h-full md:w-1/2 bg-transparent p-3 md:p-10">
        <div className="w-full h-full bg-transparent grid grid-cols grid-cols-2 lg:grid-cols-3 gap-4">
          {clientData.map((item, i) => (
            <div key={i} className="w-42 h-28 bg-white rounded-lg" data-aos="fade-left">
              <img
                src={item.image}
                alt="client image"
                className="w-full h-full object-contain scale-75 hover:scale-90 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
