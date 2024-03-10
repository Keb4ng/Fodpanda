import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Signup() {
  const [formHandler, setFormHandler] = useState(false);
  const schema = yup.object().shape({
    firstName: yup.string().required("Enter First Name"),
    lastName: yup.string().required("Enter Last Name"),
    username: yup.string().required("Enter Username"),
    password: yup
      .string()
      .min(7, "Password too short")
      .max(20)
      .required("Input Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data.email)));
    setFormHandler(true);
  };

  return (
    <div className="max-w-[1240px] h-auto  md:h-screen mx-auto mt-20 flex flex-col md:flex-row ">
      <div className="w-full md:w-[30%] relative z-10">
        <div className="min-w-[290px] md:w-[500px] p-5 py-10 shadow-xl bg-white rounded-md flex flex-col relative  md:absolute top-0 md:top-[20%]">
          <h2 className="text-center text-5xl">
            Sign <span className="text-fuchsia-600">Up</span>
          </h2>
          <p className="mt-2  text-center">Are you already a member?</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-4 relative">
              <label>First Name:</label>
              <input
                type="text"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative bg-transparent z-10"
                {...register("firstName")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-6 left-[50%] translate-x-[-50%]">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="flex flex-col my-4 relative">
              <label>Last Name:</label>
              <input
                type="text"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative bg-transparent z-10"
                {...register("lastName")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-6 left-[50%] translate-x-[-50%]">
                {errors.lastName?.message}
              </p>
            </div>
            <div className="flex flex-col my-4 relative">
              <label>Username:</label>
              <input
                type="text"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative bg-transparent z-10"
                {...register("username")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-6 left-[50%] translate-x-[-50%]">
                {errors.username?.message}
              </p>
            </div>
            <div className="flex flex-col my-4 relative">
              <label>Password:</label>
              <input
                type="password"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative bg-transparent z-10"
                {...register("password")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-5 left-[50%] translate-x-[-50%]">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex flex-col my-4 relative">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative bg-transparent z-10"
                {...register("confirmPassword")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-5 left-[50%] translate-x-[-50%]">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <button
              type="submit"
              className="bg-fuchsia-600 text-white border-white hover:bg-white hover:text-black duration-300 block mx-auto hover:border-black">
              Sign-up
            </button>
          </form>
          {formHandler ? (
            <p className="text-green-700 border-2 border-solid border-green-700 p-2 w-full h-auto text-center my-2">
              Sign up Successful!
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full md:w-[70%] relative">
        <div className="w-full h-full bg-black opacity-25 absolute top-0"></div>
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/5199675/pexels-photo-5199675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pandan"
        />
      </div>
    </div>
  );
}

export default Signup;
