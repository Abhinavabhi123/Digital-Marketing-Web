import { ContactFooter, Footer, Header, OurClient } from "../Components";


export default function OurClientPage() {
  return (
    <div className="w-full min-h-[100vh] bg-bg-color rounded-3xl ">
      <Header/>
      <OurClient/>
      <ContactFooter/>
      <Footer/>
    </div>
  )
}
