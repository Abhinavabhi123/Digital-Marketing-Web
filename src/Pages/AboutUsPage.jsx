import { AboutMain, ContactFooter, Footer, Header } from "../Components";


export default function AboutUsPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header/>
      <AboutMain/>
      <ContactFooter />
      <Footer/>
    </div>
  )
}
