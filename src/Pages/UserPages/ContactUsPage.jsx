import { useEffect } from "react";
import {
  ContactFooter,
  ContactUs,
  Footer,
  GoogleMap,
  Header,
} from "../../Components";

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-2 md:p-12">
      <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
        <Header />
        <ContactUs />
        <GoogleMap />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
}
