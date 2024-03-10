import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { foodData } from "../data";
import { FaSquarePlus } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

function FoodDetails() {
  const { id, name } = useParams();
  const [filteredFood, setFilteredFood] = useState([]);
  const { addToCart, removeFromCart, cartItems, handleAddtoCart } =
    useContext(ShopContext);
  const cartItemAmmount = cartItems[id];

  useEffect(() => {
    const filteredData = foodData.filter(
      (food) => food.id.toString() === id && food.name === name
    );
    setFilteredFood(filteredData);
  }, [id, name]);

  return (
    <div className="max-w-[1240px] h-screen mx-auto mt-20">
      {filteredFood.map((food) => (
        <div
          key={food.id}
          className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h1 className=" text-xl font-bold">
              {food.store} - {food.name}
            </h1>
            <img
              className="w-full h-auto object-contain mx-auto"
              src={food.image}
              alt={food.name}
            />
          </div>
          <div>
            <p className="text-xl font-bold border-b-2 border-fuchsia-600 pb-1 ">
              ${food.price}
            </p>
            <div className="flex flex-row items-center border-b-2 border-fuchsia-600 my-1 py-2">
              <p>
                Quantity:{" "}
                <span className="w-[15px] inline-block mx-3">
                  {cartItemAmmount}
                </span>
              </p>
              <FaSquarePlus
                onClick={() => addToCart(food.id)}
                size="25"
                className="text-fuchsia-600 hover:opacity-50 duration-300 cursor-pointer"
              />
              <FaMinusSquare
                onClick={() => removeFromCart(food.id)}
                size="25"
                className="text-fuchsia-600 hover:opacity-50 duration-300 cursor-pointer"
              />
              <button
                onClick={() => handleAddtoCart(food.id)}
                className="text-[14px] bg-fuchsia-600 text-white border-white ml-3 hover:opacity-45 duration-300">
                Add to Cart
              </button>
            </div>
            <p className="border-b-2 border-fuchsia-600 mb-3 pb-1">
              {food.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodDetails;
