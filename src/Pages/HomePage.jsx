import { useEffect } from "react";
import {
  AboutDigitalMarketing,
  ContactFooter,
  ExperienceCounter,
  Footer,
  Header,
  HomePageAbout,
  HomePageBanner,
  HomePageServices,
  Testimonial,
  HomePagePortFolio,
} from "../Components";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <HomePageBanner />
      <HomePageAbout />
      <HomePageServices />
      <AboutDigitalMarketing/>
      <ExperienceCounter />
      <HomePagePortFolio />
      <Testimonial />
      <ContactFooter />
      <Footer />
    </div>
  );
}
