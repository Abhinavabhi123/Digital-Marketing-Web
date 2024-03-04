import Question from "../../../assets/Images/question.png";


export default function DigitalMarketing() {
  return (
    <div className="w-full min-h-[10rem] bg-transparent">
      <div className="ps-4 md:ps-20 py-8 space-y-3">
        <h1 className="text-lg md:text-3xl service-title">
          Why Digital Marketing ?
        </h1>
        <div className="decoration-div w-56 md:w-96 h-1 rounded-md"></div>
      </div>
      <div className=" px-5 md:px-20">
        <p className="text-sm md:text-base md:tracking-wider md:leading-7 " data-aos="fade-up">
          Marketing has always been about connecting with your audience in the
          right place and at the right time. With the change and evolution of
          modern technologies, small and medium businesses are doing everything
          they can to keep up, which can be said true for the rest of human
          society. To do this effectively, you have to take advantage of all the
          most valuable marketing resources and technologies, and in the modern
          world, the internet tops that list. One of the most import- ant
          reasons why digital marketing is taking up the traditional market- ing
          channels is as a result of the internet has enabled businesses to
          interact with targeted audiences in real time.
        </p>
        <div className="w-full flex justify-center">
          <img src={Question} alt="image" className="w-[70%] md:w-[40%]  " />
        </div>
      </div>
    </div>
  );
}
