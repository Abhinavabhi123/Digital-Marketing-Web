import "./header.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropDown] = useState([
    {
      name: "services",
      status: false,
    },
  ]);

  function dropdownHandler(name, status) {
    setDropDown((prevShow) =>
      prevShow.map((item) =>
        item.name === name ? { ...item, status: status } : item
      )
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-between px-4 md:px-10 py-5 relative bg-transparent">
      <img src={Logo} alt="logo" className="w-32 md:w-28" />
      <ul className="nav-list text-base gap-5">
        <li className="nav-link">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-link group relative">
          Services
          <ul className="nav-animation w-56 h-fit service-list absolute hidden  group-hover:block  bg-black/70 z-50 py-3 top-[1.8rem]">
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">SEO</li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">SEM</li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">Branding</li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">Advertising</li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">Photography</li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Social Media
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Digital Strategy
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Video Production
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Augmented Reality
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Influencer Management
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Reputation Management
            </li>
            <li className="text-sm hover:bg-gray-500 ps-5 py-1">
              Community Management
            </li>
          </ul>
        </li>
        <li className="nav-link">Awards</li>
        <li className="nav-link">PortFolio</li>
        <li className="nav-link">Clients</li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li className="nav-link">Contact Us</li>
      </ul>
      <label className="hamburger">
        <input type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {/* Menu open div */}
      <div className={`menu-dropdown ${menuOpen && "active"}`}>
        <ul className="w-full h-full bg-transparent flex flex-col items-center gap-4 ">
          <li className="text-sm">
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="text-sm flex items-center gap-2"
            onClick={() => dropdownHandler("services", !dropdown[0].status)}
          >
            Services
            {dropdown[0].name === "services" && dropdown[0].status ? (
              <RiArrowDownSLine
                size={20}
                className="rotate-180 transition-all duration-500"
              />
            ) : (
              <RiArrowDownSLine
                size={20}
                className="transition-all duration-500"
              />
            )}
          </li>
          <ul
            className={`w-full ${
              dropdown[0].name === "services" && dropdown[0].status
                ? "flex"
                : "hidden"
            } flex-col items-center bg-transparent `}
          >
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              SEO
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              SEM
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              Branding
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              Advertising
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Photography
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Social Media
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Digital Strategy
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Video Production
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Augmented Reality
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Influencer Management
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Reputation Management
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              Community Management
            </li>
          </ul>
          <li className="text-sm">Awards</li>
          <li className="text-sm">PortFolio</li>
          <li className="text-sm">Clients</li>
          <li className="text-sm">Blog</li>
          <li className="text-sm">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li className="text-sm">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
