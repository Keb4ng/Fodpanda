import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Food(props) {
  return (
    <>
      <div className="max-w-[300px] min-h-[300px] mx-auto my-2 relative hover:scale-105 duration-300 rounded-lg drop-shadow-lg">
        <Link to={`/toppicks/${props.id}/${props.name}`}>
          <div className="absolute p-3 w-full h-[40%] top-0 left-0 bg-gradient-to-b from-fuchsia-600 to-transparent rounded-t-lg">
            <p className=" text-white text-xl drop-shadow-xl">{props.name}</p>
          </div>
          <img
            className="object-cover max-h-[300px] h-full max-w-[300px] w-full rounded-lg"
            src={props.image}
            alt={props.name}
          />
          <div className="absolute right-3 bottom-2 min-w-[100px] px-4 py-2 bg-white text-center rounded-full shadow-lg">
            <p className="font-bold">from $ {props.price}.00</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Food;
