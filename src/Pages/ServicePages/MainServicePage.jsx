import { useEffect } from "react";
import { ContactFooter, Footer, Header, MainService } from "../../Components";

export default function MainServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <MainService />
      <ContactFooter />
      <Footer />
    </div>
  );
}
