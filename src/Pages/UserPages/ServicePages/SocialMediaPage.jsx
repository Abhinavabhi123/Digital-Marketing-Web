import { useEffect } from "react";
import {
  Clients,
  ContactFooter,
  ExperienceCounter,
  Footer,
  Header,
  SocialMediaMarketing,
} from "../../../Components";

export default function SocialMediaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-2 md:p-12">
      <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
        <Header />
        <SocialMediaMarketing />
        <ExperienceCounter />
        <Clients />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
}
