import { useEffect } from "react";
import { Clients, ContactFooter, ExperienceCounter, Footer, Header, Seo } from "../../Components";

export default function SeoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <Seo/>
      <ContactFooter />
      <ExperienceCounter/>
      <Clients/>
      <Footer />
    </div>
  );
}
