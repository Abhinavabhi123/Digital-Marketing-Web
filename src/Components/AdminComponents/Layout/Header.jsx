import Logo from "../../../assets/logo.svg";
import { FaRegBell } from "react-icons/fa6";
import { HiMiniUser } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="w-full h-14 md:h-20 fixed bg-[#191930] flex px-10 md:px-24 z-10 py-5 justify-between items-center border-b-2">
      <img src={Logo} alt="logo" className="w-8 h-8 md:w-auto md:h-auto"/>
      <div className="flex items-center gap-5">
        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border drop-shadow-lg flex justify-center items-center">
          <FaRegBell />
        </div>

        <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border drop-shadow-lg flex justify-center items-center">
          <HiMiniUser size={25} color="white"/>
        </div>
      </div>
    </div>
  );
}
