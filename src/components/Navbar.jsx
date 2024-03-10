import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const [slidingMenu, setSlidingMenu] = useState(false);
  const { user, handleLogOut } = useUserContext();

  return (
    <div className="sticky top-0 z-[15] max-w-[1240px] text-black h-auto mx-auto px-1 py-2 border-b-2 border-gray-200 bg-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className=" text-fuchsia-600 text-xl md:text-3xl font-bold rounded-xl p-3 items-center">
            <span className="bg-fuchsia-600 rounded-lg mr-2">🐼</span>fodpanda
          </h1>
        </Link>
        <div className="flex flex-row">
          <ul className="hidden md:flex lg:flex flex-row font-bold text-xs md:text-xs lg:text-[16px] items-center">
            <Link to="/">
              <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Home
              </li>
            </Link>
            <Link to="/select">
              <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Select Restaurants
              </li>
            </Link>
            <Link to="/toppicks">
              <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Top Pick
              </li>
            </Link>
            <Link to="/partners">
              <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Partners
              </li>
            </Link>
            {user ? (
              <>
                <p className="text-fuchsia-600 px-2">{user.firstName}</p>{" "}
                <li
                  onClick={() => handleLogOut()}
                  className="px-3 cursor-pointer bg-fuchsia-600 text-white hover:text-fuchsia-600 hover:bg-white duration-300 rounded-lg p-3">
                  Log Out
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                    Login
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="px-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                    Signup
                  </li>
                </Link>
              </>
            )}
          </ul>
          <div
            onClick={() => setSlidingMenu(!slidingMenu)}
            className="block md:hidden cursor-pointer hover:text-fuchsia-600 duration-300">
            <GiHamburgerMenu size="25" />
          </div>
        </div>
        {/* sliding menu */}
        {slidingMenu ? (
          <div
            onClick={() => {
              setSlidingMenu(!slidingMenu);
            }}
            className="fixed md:hidden w-full bg-black/50 h-screen top-0 left-0 z-10 duration-500"></div>
        ) : (
          ""
        )}
        <div
          className={
            slidingMenu
              ? "fixed md:hidden z-20 top-0 left-[0] h-screen w-60 max-w-[340px] bg-white duration-500"
              : "fixed md:hidden z-20 top-0 left-[-100%] h-screen w-60 max-w-[340px] bg-white duration-500"
          }>
          <div
            onClick={() => {
              setSlidingMenu(!slidingMenu);
            }}
            className="flex justify-end text-black hover:text-fuchsia-600 duration-300 cursor-pointer">
            <IoClose size="30" />
          </div>
          <h1 className=" text-fuchsia-600 text-xl md:text-3xl font-bold rounded-xl p-3 items-center">
            <span className="bg-fuchsia-600 rounded-lg mr-2">🐼</span>fodpanda
          </h1>
          <ul className="flex flex-col justify-center text-center px-3">
            <Link to="/">
              <li
                onClick={() => {
                  setSlidingMenu(!slidingMenu);
                }}
                className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Home
              </li>
            </Link>
            <Link to="/select">
              <li
                onClick={() => {
                  setSlidingMenu(!slidingMenu);
                }}
                className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Select Restaurants
              </li>
            </Link>
            <Link to="/toppicks">
              <li
                onClick={() => {
                  setSlidingMenu(!slidingMenu);
                }}
                className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Top Pick
              </li>
            </Link>
            <Link to="/partners">
              <li
                onClick={() => {
                  setSlidingMenu(!slidingMenu);
                }}
                className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                Partners
              </li>
            </Link>
            {user ? (
              <>
                <p className="text-fuchsia-600 px-2 py-3">{user.firstName}</p>{" "}
                <li
                  onClick={() => handleLogOut()}
                  className="px-3 cursor-pointer bg-fuchsia-600 text-white hover:text-fuchsia-600 hover:bg-white duration-300 rounded-lg p-3">
                  Log Out
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li
                    onClick={() => {
                      setSlidingMenu(!slidingMenu);
                    }}
                    className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                    Login
                  </li>
                </Link>
                <Link to="/signup">
                  <li
                    onClick={() => {
                      setSlidingMenu(!slidingMenu);
                    }}
                    className="border-b-2 border-gray-300 py-1 w-full font-bold my-3 cursor-pointer hover:text-fuchsia-600 duration-300">
                    Signup
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
