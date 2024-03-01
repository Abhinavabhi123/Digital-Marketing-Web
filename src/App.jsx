import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUsPage, HomePage } from "./Pages";

export default function App() {
  
  return (
    <div className="max-w-[100vw] overflow-hidden p-2 md:p-12">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}
