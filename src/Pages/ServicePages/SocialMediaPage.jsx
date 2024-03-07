import {
  Clients,
  ContactFooter,
  ExperienceCounter,
  Footer,
  Header,
  SocialMediaMarketing,
} from "../../Components";

export default function SocialMediaPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <SocialMediaMarketing />
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer />
    </div>
  );
}
