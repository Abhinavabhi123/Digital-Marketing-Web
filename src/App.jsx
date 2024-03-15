import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/UserRoutes/UserRoute";
import AdminRoute from "./Routes/AdminRoutes/AdminRoute";


export default function App() {
  
  return (
    <div className="max-w-[100vw] overflow-hidden ">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute/>} />
          <Route path="/admin/*" element={<AdminRoute/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
