import { useEffect } from "react";
import {
  AffiliateMarketing,
  Clients,
  ContactFooter,
  ExperienceCounter,
  Footer,
  Header,
} from "../../Components";

export default function AffiliateMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
