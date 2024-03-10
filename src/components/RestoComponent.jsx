import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function RestoComponent(props) {
  return (
    <>
      <div className="relative h-auto w-auto min-h-[300px] max-w-[300px] mx-auto rounded-lg text-white text-center hover:scale-105 duration-300 shadow-lg">
        <Link to={`/select/${props.name}`}>
          <div className="bottom-0 left-0 absolute w-full h-auto flex flex-col bg-fuchsia-600 py-3 rounded-b-lg">
            <p className="font-bold my-1">{props.name}</p>
            <p className="text-gray-300">{props.ratings}</p>
          </div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={props.image}
            alt={props.name}
          />
        </Link>
      </div>
    </>
  );
}

export default RestoComponent;
