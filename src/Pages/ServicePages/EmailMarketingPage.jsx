import { useEffect } from "react";
import {
    Clients,
  ContactFooter,
  EmailMarketing,
  ExperienceCounter,
  Footer,
  Header,
} from "../../Components";

export default function EmailMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <EmailMarketing />
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
