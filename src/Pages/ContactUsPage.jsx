import { ContactFooter, ContactUs, Footer, GoogleMap, Header } from "../Components";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <ContactUs />
      <GoogleMap/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
