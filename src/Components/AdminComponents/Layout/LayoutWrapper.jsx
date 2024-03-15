/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[100vw]  h-[100vh] ">
      <div className="w-full bg-transparent h-14 md:h-20 ">
        <Header />
      </div>
      <div className="w-full h-[40.5rem] bg-transparent flex  flex-col md:flex-row">
        <div
          className={`w-full ${!isOpen?"md:w-20 md:min-w-20":"md:w-[15%] md:min-w-[200px]"} transition-all duration-300 bg-transparent h-24 md:h-full`}
        >
          <Sidebar
           setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div
          className={`w-full ${isOpen?"md:w-[85%]":"md:w-[95%]"}  transition-all duration-300 md:ps-4 mt-2 md:mt-0 h-full`}
        >
          {/* md:w-[94.7%] */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
