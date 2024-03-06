import { Routes, Route } from "react-router-dom";
import { HomePage,AboutUsPage } from "../../Pages";
import ServiceRoutes from "./ServiceRoutes";



export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/services/*" element={<ServiceRoutes/>}/>
    </Routes>
  );
}
