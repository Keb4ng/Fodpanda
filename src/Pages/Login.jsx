import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const [formHandler, setFormHandler] = useState(false);
  const schema = yup.object().shape({
    username: yup.string().required("Enter Username"),
    password: yup.string().required("Input Password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setUserContext } = useUserContext();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (
        userData.password === data.password &&
        userData.username === data.username
      ) {
        setUserContext(userData);
        setFormHandler(true);
      } else {
        console.log("Incorrect login details");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <div className="max-w-[1240px] h-auto  md:h-screen mx-auto mt-20 flex flex-col md:flex-row-reverse ">
      <div className="w-full md:w-[30%] relative z-10">
        <div className="min-w-[290px] md:w-[500px] p-5 py-10 shadow-xl bg-white rounded-md flex flex-col relative  md:absolute top-0 right-0 md:right-[20%] md:top-[30%]">
          <h2 className="text-center text-5xl">
            Log <span className="text-fuchsia-600">In</span>
          </h2>
          <p className="mt-2  text-center">Are you already a member?</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-4 relative">
              <label>Username:</label>
              <input
                type="text"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative z-10 bg-transparent"
                {...register("username")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-6 left-[50%] translate-x-[-50%]">
                {errors.username?.message}
              </p>
            </div>
            <div className="flex flex-col my-4 relative">
              <label>Password:</label>
              <input
                type="password"
                className="border-b-2 border-fuchsia-600 h-7 py-2 relative z-10 bg-transparent"
                {...register("password")}></input>
              <p className="p-[2px] text-[14px] text-red-400 w-[max-content] absolute top-6 left-[50%] translate-x-[-50%]">
                {errors.password?.message}
              </p>
            </div>
            <button className="bg-fuchsia-600 text-white border-white hover:bg-white hover:text-black duration-300 block mx-auto hover:border-black">
              Login
            </button>
            {formHandler ? (
              <p className="text-green-700 border-2 border-solid border-green-700 p-2 w-full h-auto text-center my-2">
                Log in Successful!
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      <div className="w-full md:w-[70%] relative">
        <div className="w-full h-full absolute top-0 bg-black opacity-25"></div>
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/15114597/pexels-photo-15114597/free-photo-of-panda-sitting-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="panda"
        />
      </div>
    </div>
  );
}

export default Login;
