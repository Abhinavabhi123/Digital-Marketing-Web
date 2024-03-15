import { useEffect } from "react";
import { ContactFooter, Footer, Header, OurClient } from "../../Components";

export default function OurClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-2 md:p-12">
      <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
        <Header />
        <OurClient />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
}
