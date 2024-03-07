import {
  AffiliateMarketing,
  Clients,
  ContactFooter,
  ExperienceCounter,
  Footer,
  Header,
} from "../../Components";

export default function AffiliateMarketingPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <AffiliateMarketing />
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
