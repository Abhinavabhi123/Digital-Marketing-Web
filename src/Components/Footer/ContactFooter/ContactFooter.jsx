import "./contentFooter.css"
import { FaWhatsapp,FaPhone } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

export default function ContactFooter() {
  return (
    <div className=" w-20 h-fit fixed bottom-10 right-0 bg-transparent flex flex-col justify-between items-center gap-3 py-2">
        <div className="social-media-content size-10 md:size-12 flex justify-center items-center rounded-full bg-green-500 cursor-pointer">
            <FaWhatsapp size={25}/>
        </div>
        <div className="social-media-content size-10 md:size-12 flex justify-center items-center rounded-full bg-blue-500 cursor-pointer">
            <FaPhone size={20}/>
        </div>
        <div className="social-media-content size-10 md:size-12 flex justify-center items-center rounded-full bg-yellow-500 cursor-pointer">
            <AiOutlineMessage size={25}/>
        </div>

    </div>
  )
}
