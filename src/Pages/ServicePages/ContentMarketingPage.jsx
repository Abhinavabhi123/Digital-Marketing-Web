import {
  ContactFooter,
  ContentMarketing,
  Footer,
  Header,
} from "../../Components";

export default function ContentMarketingPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header />
      <ContentMarketing />
      <ContactFooter />
      <Footer />
    </div>
  );
}
