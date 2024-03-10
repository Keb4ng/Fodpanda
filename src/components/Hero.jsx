import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Hero() {
  return (
    <div className="relative max-w-[1240px] mx-auto mt-3 h-auto">
      {/* hero overlay */}
      <div className="w-full h-[100%] absolute top-0 left-0 bg-black/60 z-5">
        <div className="min-w-[300px] h-[100%] mx-auto flex flex-col justify-center items-center uppercase text-white">
          <h1 className=" text-1xl md:text-3xl lg:text-5xl">
            Your favorite <span className="text-fuchsia-400">restaurants</span>
          </h1>
          <h1 className=" text-1xl md:text-3xl lg:text-5xl">
            <span className="text-fuchsia-400">Delivering</span> at your Door
          </h1>
          <Link to="/toppicks">
            <button className="uppercase rounded-lg bg-fuchsia-600 text-white font-bold mt-5 border-transparent duration-300 hover:scale-105">
              Order Now!
            </button>
          </Link>
        </div>
      </div>
      <img
        className="w-full h-auto object-cover"
        src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}

export default Hero;
