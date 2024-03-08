import { Routes, Route } from "react-router-dom";
import { HomePage,AboutUsPage, PortFolioPage, ContactUsPage } from "../../Pages";
import ServiceRoutes from "./ServiceRoutes";



export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services/*" element={<ServiceRoutes/>}/>
      <Route path="/portfolio" element={<PortFolioPage/>}/>
      <Route path="/contact-us" element={<ContactUsPage/>}/>
    </Routes>
  );
}
