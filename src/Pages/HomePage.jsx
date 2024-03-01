import { ContactFooter, ExperienceCounter, Header, HomePageAbout, HomePageBanner, HomePageServices } from "../Components";


export default function HomePage() {
  
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <HomePageBanner />
      <HomePageAbout/>
      <HomePageServices/>
      <ExperienceCounter/>
      <ContactFooter />
    </div>
  );
}
