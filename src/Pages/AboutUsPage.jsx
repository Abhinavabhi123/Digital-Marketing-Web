import { AboutMain, Clients, ContactFooter, ExperienceCounter, Footer, Header } from "../Components";


export default function AboutUsPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header/>
      <AboutMain/>
      <ExperienceCounter/>
      <Clients/>
      <ContactFooter />
      <Footer/>
    </div>
  )
}
