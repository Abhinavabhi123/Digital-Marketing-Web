import { ContactFooter, Footer, Header, Portfolio } from "../Components";

export default function PortFolioPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <Portfolio />
      <ContactFooter />
      <Footer />
    </div>
  );
}
