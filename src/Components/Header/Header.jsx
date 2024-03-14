import "./header.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
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
      <img src={Logo} alt="logo" className="w-32 md:w-28 cursor-pointer" onClick={()=>navigate("/")} />
      <ul className="nav-list text-base gap-5">
        <li className="nav-link">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-link group relative bg-transparent">
          <Link to={"/services"}>
            <p>Services</p>
          </Link>
          <div className="absolute w-fit h-fit top-[1rem] z-50 pt-4 bg-transparent hidden  group-hover:block hover:block">
            <ul className="nav-animation w-56 h-fit service-list  hidden  group-hover:block bg-black/70 z-50 py-3 top-[1.8rem]">
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/seo"} className="text-sm">
                  SEO
                </Link>
              </li>
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/content-marketing"} className="text-sm">
                  Content Marketing
                </Link>
              </li>
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/email-marketing"} className="text-sm">
                  Email Marketing
                </Link>
              </li>
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/advertising"} className="text-sm">
                  {" "}
                  Advertising
                </Link>
              </li>
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/affiliate-marketing"} className="text-sm">
                  Affiliate Marketing
                </Link>
              </li>
              <li className="text-sm hover:bg-gray-500 ps-5 py-1">
                <Link to={"/services/social-media"} className="text-sm">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-link">
          <Link to={"/our-clients"}>Clients</Link>
        </li>
        <li className="nav-link">
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li className="nav-link">
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
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
              <Link to={"/services/seo"} className="text-sm">
                SEO
              </Link>
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              <Link to={"/services/content-marketing"} className="text-sm">
                Content Marketing
              </Link>
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              <Link to={"/services/email-marketing"} className="text-sm">
                Email Marketing
              </Link>
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation py-1">
              <Link to={"/services/advertising"} className="text-sm">
                {" "}
                Advertising
              </Link>
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              <Link to={"/services/affiliate-marketing"} className="text-sm">
                Affiliate Marketing
              </Link>
            </li>
            <li className="text-sm hover:bg-gray-500 menu-dropdown-animation  py-1">
              <Link to={"/services/social-media"} className="text-sm">
                Social Media Marketing
              </Link>
            </li>
          </ul>
          <li className="text-sm">
            <Link to={"/our-clients"}>Clients</Link>
          </li>
          <li className="text-sm">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </ul>
      </div>
    </div>
  );
}
