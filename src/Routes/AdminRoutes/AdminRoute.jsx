import { Routes, Route } from "react-router-dom";
import { AdminLoginPage, DashboardPage, EnquiryPage } from "../../Pages";
import { LayoutWrapper } from "../../Components";

export default function AdminRoute() {
  return (
    <Routes>
        <Route path="/" element={<AdminLoginPage />} />
      <Route element={<LayoutWrapper />}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/enquiries" element={<EnquiryPage/>}/>
      </Route>
    </Routes>
  );
}
