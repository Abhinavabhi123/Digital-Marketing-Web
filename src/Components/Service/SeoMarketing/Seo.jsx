import Power from "../../../assets/Icons/energetic.png";
import SeoBanner from "../../../assets/Images/Services/seo-inner-banner.png";
import "./seo.css"

export default function Seo() {
  return (
    <div className="w-full h-full space-y-5">
      {/* Top section */}
      <div className="w-full min-h-[30rem] bg-transparent flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-full md:w-1/2 bg-transparent px-4 md:p-20 space-y-4 md:space-y-8">
          <div className="flex items-center">
            <img src={Power} alt="power" className="size-6" />
            <h1>The Ultimate Traffic Boost</h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl font-bold tracking-wider">
              Unlock The GateWay to Quality Traffic.
            </h1>
          </div>
          <div>
            <p className="text-xs md:text-sm tracking-wide text-gray-500">
              SEO is a digital marketing strategy that helps your website appear
              in relevant search results in search engines.{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent p-10 flex justify-center items-center">
          <img
            src={SeoBanner}
            alt="banner"
            className="max-w-80 md:max-w-full w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Main section */}
      <div className="w-full h-full space-y-5">
        <div className="ps-4 md:ps-20  space-y-3">
          <h1 className="text-lg md:text-3xl service-title">
            Search Engine Optimization (SEO)
          </h1>
          <div className="decoration-div w-80 md:w-[33rem] h-1 rounded-md"></div>
        </div>
        <div className="ps-4 md:ps-20 space-y-7 ">
          <p className="tracking-wide md:leading-7">
            Search Engine Optimization is the process of getting traffic from
            the &quot;free,&quot; &quot;organic,&quot; &quot;editorial&quot; or
            &quot;natural&quot; search results on search engines .
          </p>
          <div className="flex flex-col md:flex-row md:gap-10 leading-10 ps-10 justify-center">
            <div className="">
              <ul className="list-disc">
                <li>Enterprise SEO</li>
                <li>Local SEO</li>
                <li>E-Commerce SEO</li>
                <li>World Wide SEO</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Multi-Lingual SEO</li>
                <li>Web Analytics</li>
                <li>Link Building</li>
                <li>Algorithm Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="w-full h-full flex justify-center pt-10 md:my-10">
        <div className="space-y-4">
          <div className="text-2xl md:text-5xl text-center md:tracking-wider md:space-y-4">
            <h1 className="font-bold">Contain Modern features for</h1>
            <h1 className="font-bold">Better Experience</h1>
          </div>
          <p className="text-sm text-center text-gray-500 px-5 md:px-0">
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance .
          </p>
        </div>
      </div>
      <div className="bg-transparent seo-middle-container">
        <div className=" bg-transparent ring-2 py-10  seo-middle-container-inner">
          <div className=" bg-transparent space-y-5 seo-middle-container-inner-left">
            <h1 className="text-2xl md:text-4xl font-bold">
              We follow a simple, yet effective SEO ranking process
            </h1>
            <p className="text-sm leading-6 text-gray-500">
              These days, no business can&apos;t to ignore Search Optimization.
              SEO should plays a part in your online strategy. Search engine
              optimization ensures that your online presence is both articulated
              properly and discoverable.
            </p>
            <button className="w-fit px-4 py-2 font-semibold rounded-full border-2 border-gray-500"  data-aos="fade-right">
              Get Started
            </button>
          </div>
          <div className=" bg-transparent  seo-middle-container-inner-right">
            {/* Card one */}
            <div className="flex bg-transparent ring-2 p-1 py-2 rounded-2xl space-x-2 md:space-x-0"  data-aos="fade-up">
              <div className="w-[20%] flex justify-center items-center">
                <div className="size-14 p-6 rounded-full bg-[#4c1d95] border-2 border-[#0891b2] flex justify-center items-center text-xl font-semibold">
                  1
                </div>
              </div>
              <div className="w-[80%] space-y-2">
                <p className="font-semibold">Keyword Research</p>
                <p className="text-sm ">Keyword research is the process of valuable</p>
              </div>
            </div>
            {/* Card two */}
            <div className="flex bg-transparent ring-2 p-1 py-2 rounded-2xl space-x-2 md:space-x-0"  data-aos="fade-up" data-aos-delay="50">
              <div className="w-[20%] flex justify-center items-center">
                <div className="size-14 p-6 rounded-full bg-[#4c1d95] border-2 border-[#0891b2] flex justify-center items-center text-xl font-semibold">
                  2
                </div>
              </div>
              <div className="w-[80%] space-y-2">
                <p className="font-semibold">Ranking Website</p>
                <p className="text-sm ">It helps a website&apos;s 1st position in the search</p>
              </div>
            </div>
            {/* Card three */}
            <div className="flex bg-transparent ring-2 p-1 py-2 rounded-2xl space-x-2 md:space-x-0"  data-aos="fade-up" data-aos-delay="100" >
              <div className="w-[20%] flex justify-center items-center">
                <div className="size-10 md:size-14 p-6 rounded-full bg-[#4c1d95] border-2 border-[#0891b2] flex justify-center items-center text-xl font-semibold">
                  3
                </div>
              </div>
              <div className="w-[80%] space-y-2">
                <p className="font-semibold">Link Building</p>
                <p className="text-sm ">Link building is a  SEO technique that increases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
