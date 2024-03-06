import { ContactFooter, Footer, Header, Seo } from "../../Components";

export default function SeoPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <Seo/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
