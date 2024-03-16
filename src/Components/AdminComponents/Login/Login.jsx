import AdminImage from "../../../assets/admin-login-image.svg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { adminLoginData } from "../../../Constants/adminData";
import { useState } from "react";
import AdminBlob from "../../../assets/admin-blob.svg"

export default function Login() {
    const [error,setError] = useState("")
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .nullable(false)
      .min(6, "Enter minimum 6 characters")
      .required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(true);
        if (
          adminLoginData.email === values.email &&
          adminLoginData.password === values.password
        ) {
          navigate("/admin/dashboard");
        }else{
            setError("Email or password not matching")
        }
      },
    }
  );
  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="w-[80%] h-[80%] bg-black/50 rounded-2xl flex flex-col md:flex-row overflow-hidden relative">
      <img src={AdminBlob} alt="blob" className="absolute w-1/5 -bottom-24 -left-16 -rotate-45" />
      <img src={AdminBlob} alt="blob" className="absolute w-1/5 -top-14 -right-16 -rotate-45" />
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-20 space-y-5 md:space-y-20 md:border-r md:border-b-0 border-b border-violet-400">
          <h1 className="text-start md:text-end text-xl md:text-3xl">
            Hey Admin,{" "}
            <b className="text-xl md:text-3xl italic">Welcome back</b>
          </h1>
          <div className="flex justify-center items-center">
            <img src={AdminImage} alt="image" className="w-1/2" />
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 bg-transparent p-5 md:p-20 flex justify-center items-center">
          <form
            className="w-full h-fit bg-transparent space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm md:text-base">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="py-2 rounded-md focus:outline-none text-xs md:text-sm px-2 text-black border-2 border-violet-400"
                placeholder="Enter Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm md:text-base">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="py-2 rounded-md focus:outline-none text-xs md:text-sm px-2 text-black border-2 border-violet-400"
                placeholder="Enter Your Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>
            {/* check box */}
            {/* <div className=" flex gap-4">
              <input type="checkbox" className="w-4" />
              <p className="text-sm">Remember me</p>
            </div> */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="px-4 py-1 bg-[#008EE6] rounded-md"
              >
                Login
              </button>
              {
                error&& <p className="text-xs text-red-500">{error}</p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
