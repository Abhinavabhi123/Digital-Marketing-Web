import { ContactFooter, Header, HomePageBanner } from "../Components";
export default function HomePage() {
  
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <HomePageBanner />
      <ContactFooter />
    </div>
  );
}
