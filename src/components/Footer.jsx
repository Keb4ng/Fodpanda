import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useUserContext } from "../context/UserContext";

function Footer() {
  const { user } = useUserContext();
  return (
    <div className="flex justify-between flex-col md:flex-row max-w-[1240px] border-t-2 border-fuchsia-600 min-h-20 mx-auto mt-10 py-5 text-center">
      <div>
        <ul className="flex flex-col md:flex-row text-gray-400">
          <Link to="/">
            <li className="hover:text-fuchsia-600 cursor-pointer">Home</li>
          </Link>
          {user ? (
            ""
          ) : (
            <>
              <Link to="/login">
                <li className="hover:text-fuchsia-600 px-0 md:px-5 cursor-pointer">
                  Login
                </li>
              </Link>
              <Link to="/signup">
                <li className="hover:text-fuchsia-600 cursor-pointer">
                  Signup
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
      <div>
        <p className="text-gray-400 mt-5 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
