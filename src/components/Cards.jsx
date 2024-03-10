import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Cards() {
  return (
    <div className="max-w-[1240px] h-auto mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative bg-black w-full max-h-[300px] md:max-h[360px] duration-300 hover:scale-105">
          <Link to="/select">
            <div className="w-full h-full flex flex-col absolute top-0 left-0 bg-black/50 z-[5] justify-center items-center text-white duration-300 cursor-pointer hover:bg-fuchsia-600/80">
              <p className=" font-bold text-2xl drop-shadow-2xl">
                Select Restaurants
              </p>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/3714786/pexels-photo-3714786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
            />
          </Link>
        </div>
        <div className="relative bg-black w-full max-h-[300px] md:max-h[360px] duration-300 hover:scale-105">
          <Link to="/toppicks">
            <div className="w-full h-full flex flex-col absolute top-0 left-0 bg-black/50 z-[5] justify-center items-center text-white duration-300 cursor-pointer hover:bg-fuchsia-600/80">
              <p className=" font-bold text-2xl drop-shadow-2xl">Top Picks</p>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
            />
          </Link>
        </div>
        <div className="relative bg-black w-full max-h-[300px] md:max-h[360px] duration-300 hover:scale-105">
          <Link to="partners">
            <div className="w-full h-full flex flex-col absolute top-0 left-0 bg-black/50 z-[5] justify-center items-center text-white duration-300 cursor-pointer hover:bg-fuchsia-600/80">
              <p className=" font-bold text-2xl drop-shadow-2xl">
                New Partners
              </p>
            </div>
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/6975525/pexels-photo-6975525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
