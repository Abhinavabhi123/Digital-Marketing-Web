import { Advertising, Clients, ContactFooter, ExperienceCounter, Footer, Header } from "../../Components";

export default function AdvertisingPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <Advertising />
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
