import { useEffect } from "react";
import {
  Clients,
  ContactFooter,
  ContentMarketing,
  ExperienceCounter,
  Footer,
  Header,
} from "../../Components";

export default function ContentMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <ContentMarketing />
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
