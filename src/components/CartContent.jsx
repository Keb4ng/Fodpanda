import React, { useContext } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

export const CartContent = (props) => {
  const { id, name, image, price } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartItemAmmount = cartItems[id];

  return (
    <>
      <div className="w-[100%] ]h-auto flex flex-row justify-between items-center shadow-md round-lg my-1 p-1 rounded-lg">
        <div className=" w-12 h-12">
          <img className="w-auto h-full object-cover" src={image} alt={name} />
        </div>
        <p className=" w-28 mx-2 text-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="mx-2">${price * cartItemAmmount}</p>
        <div className="flex flex-row items-center w-auto">
          <FaSquarePlus
            onClick={() => addToCart(id)}
            size="25"
            className="text-fuchsia-600 hover:opacity-50 duration-300 cursor-pointer"
          />
          <p className="mx-2">{cartItemAmmount}</p>
          <FaMinusSquare
            onClick={() => removeFromCart(id)}
            size="25"
            className="text-fuchsia-600 hover:opacity-50 duration-300 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
