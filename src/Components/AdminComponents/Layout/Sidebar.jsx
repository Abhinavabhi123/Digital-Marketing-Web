import "./layout.css";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiLogOutCircle } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { LuFileScan } from "react-icons/lu";


export default function Sidebar(Props) {
  const location =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState({
    product: false,
  });
  const { isOpen, setIsOpen } = Props;
  function changeOpen() {
    setIsOpen((prev) => !prev);
  }
  function changeMenuOpen() {
    setMenuOpen((prev) => !prev);
  }
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
    }
  }, [setIsOpen]);

  function handleDropDown(name) {
    setDropDown((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  }

  const List = (Props) => {
    const { url, icon, title, down , path } = Props;
    return (
      <li
      className={`navList pt-2 flex flex-col  items-center justify-between pe-3 ${location === path ? "active":""}`}
        onClick={() => {
          handleDropDown(down);
          if (url !== undefined) {
            navigate(`/admin/${url}`);
            setMenuOpen(false);
          }
        }}
      >
        <div className={`w-full h-full  flex justify-between items-center `}>
          <div className="flex gap-3 ">
            <div>{icon}</div>
            {isOpen && (
              <a className="text-sm md:text-base transition-all duration-700 delay-200 truncate">{title}</a>
            )}
          </div>
          {down && (
            <div className={`${isOpen ? "block" : "hidden"}`}>
              {dropDown?.[down] ? (
                <FaChevronDown
                  size={12}
                  className="rotate-180 transition-all"
                />
              ) : (
                <FaChevronDown size={12} className="transition-all" />
              )}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div
      className={` ${
        !isOpen ? "md:w-20 " : "md:w-[15%] md:min-w-[200px]"
      } w-full md:rounded-r-lg rounded-b-lg ${
        menuOpen ? "h-fit transition-color duration-300" : "h-14"
      }  md:h-[100%] transition-all  z-10  md:duration-200 fixed md:top-20 left-0 bg-[#8E7AB5]/70`}
    >
      {/* :h-[40.6rem] */}
      {/* Toggle setup laptop*/}
      <div
        className="w-6  h-6 hidden md:flex rotate-90 md:rotate-0 absolute top-11 transition-all duration-300 right-4 md:-right-3 md:top-2 bg-white bg-opacity-40 hover:bg-opacity-100 rounded-full  justify-center items-center cursor-pointer"
        onClick={changeOpen}
      >
        {isOpen ? (
          <MdKeyboardArrowLeft size={20} />
        ) : (
          <MdKeyboardArrowRight size={20} />
        )}
      </div>
      <div className="flex justify-between px-4  items-center p-2">
        <div className=" flex justify-center items-center gap-4">
          <h4 className="text-black font-semibold">Home</h4>
          <div
            className={`w-full h-[1px] ${
              isOpen ? "block" : "hidden"
            } transition-all duration-500 bg-red-600`}
          ></div>
        </div>
        <div
          className="md:hidden w-10 h-10 flex justify-center items-center"
          onClick={changeMenuOpen}
        >
          {!menuOpen ? <HiOutlineMenuAlt1 size={20} /> : <IoClose size={20} />}
        </div>
      </div>
      <div className="flex w-full h-fit flex-col justify-between">
        <ul
          className={`w-full h-fit ${
            menuOpen ? "flex" : "hidden"
          } md:flex  flex-col space-y-2 p-2 `}
        >
          <List
            url={"dashboard"}
            icon={<LuLayoutDashboard size={20} className="list_icon" />}
            title="Dashboard"
            path="dashboard"
          />
          <List
            url={"enquiries"}
            icon={<LuFileScan size={20} className="list_icon" />}
            title="Enquiries"
            path="enquiries"
          />
        <div
          className="w-full flex items-center  gap-2 p-5  cursor-pointer"
          onClick={() => navigate("/admin")}
        >
          <BiLogOutCircle size={20} className="text-red-500" />
          {isOpen && <a className="font-medium text-red-500 text-sm md:text-base">Logout</a>}
        </div>
        </ul>
      </div>
    </div>
  );
}
