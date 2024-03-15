import { Routes, Route } from "react-router-dom";
import { AdminLoginPage } from "../../Pages";
import { LayoutWrapper } from "../../Components";

export default function AdminRoute() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<AdminLoginPage />} />
      </Route>
    </Routes>
  );
}
