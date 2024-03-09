import { useFormik } from "formik";
import * as Yup from "yup";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import ContactBanner from "../../assets/Images/ContactUs/contact-us-banner.webp";
import Blob from "../../assets/Svg/ContactUs/blob.svg";

export default function ContactUs() {
  const initialValues = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(/^[A-Za-z]+$/, "Name must contain only letters")
      .required("Name is required"),
    subject: Yup.string()
      .matches(
        /^[A-Za-z0-9 ]+$/,
        "Subject must contain only letters, numbers, or spaces"
      )
      .required("Subject is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number"),
    message: Yup.string().required("Message is required"),
  });

  const { errors, values, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="w-full h-full md:w-1/2 p-10 md:p-20 flex justify-center items-center">
        <img src={ContactBanner} alt="contact-us-banner-image" />
      </div>
      <div className="w-full h-full md:w-1/2 p-10 md:p-20 space-y-5 md:space-y-5">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">CONTACT US</h1>
        </div>
        <div className="relative "> 
            <img src={Blob} alt="blob" className="absolute -right-20 opacity-50 w-1/2 -bottom-10  " />
          <form className="space-y-4 relative" onSubmit={handleSubmit} >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="py-2 px-3 text-sm focus:outline-none rounded-md text-black"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div>
                <p className="text-red-500 text-xs">
                  {errors.name && touched.name ? errors.name : ""}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-sm">
                Subject<span>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                className="py-2 px-3 text-sm focus:outline-none rounded-md text-black"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              <div>
                <p className="text-red-500 text-xs">
                  {errors.subject && touched.subject ? errors.subject : ""}
                </p>
              </div>
            </div>
            {/* email and phone section */}
            <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label htmlFor="email" className="text-sm">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 text-sm focus:outline-none rounded-md text-black"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div>
                  <p className="text-red-500 text-xs">
                    {errors.email && touched.email ? errors.email : ""}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label htmlFor="phone" className="text-sm">
                  Phone 
                </label>
                <input
                  type="tel" 
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="py-2 px-3 text-sm focus:outline-none rounded-md text-black"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  value={values.phone}
                />
                <div>
                  <p className="text-red-500 text-xs">
                    {errors.phone && touched.phone ? errors.phone : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm">
                Message <span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="py-2 px-3 text-sm focus:outline-none rounded-md text-black"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <div>
                <p className="text-red-500 text-xs">
                  {errors.message && touched.message ? errors.message : ""}
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              {" "}
              <button
                type="submit"
                className="px-10 py-3 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center gap-2"
              >
                SEND
                <RiSendPlaneFill />
              </button>
            </div>
          </form>
        </div>
        <div className="w-full h-fit  flex flex-col md:flex-row bg-transparent md:items-center gap-5 mt-10">
          <div className="flex  text-blue-400 cursor-pointer">
            <p
              href="mailto:example@example.com"
              className="flex items-center gap-2"
            >
              <MdMailOutline size={20} />
              <a className="text-sm" href="mailto:example@example.com">
                example@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <FaPhoneAlt />
            <p className="text-sm">+97-1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
