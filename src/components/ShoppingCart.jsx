import React, { useState, useContext } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { ShopContext } from "../context/ShopContext";
import { foodData } from "../data";
import { CartContent } from "./CartContent";

function ShoppingCart() {
  const [cart, setCart] = useState(false);
  const {
    cartItems,
    getTotalAmmount,
    clearCartItems,
    setCartMessage,
    cartMessage,
  } = useContext(ShopContext);
  const totalAmmount = getTotalAmmount();

  const checkOut = () => {
    clearCartItems();
    setCartMessage(true);
  };

  const closeMessage = () => {
    setCartMessage(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-5">
        <div onClick={() => setCart(!cart)}>
          <BsCartPlusFill
            size="45"
            className="text-fuchsia-600 hover:opacity-50 duration-300 shadow-lg z-20 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={
          cart
            ? "w-[290px] md:w-[350px] overflow-y-auto overflow-x-hidden h-[300px] fixed bottom-20 right-1 md:right-3 opacity-100 bg-white z-30 rounded-lg duration-100 border-2 shadow-lg"
            : "w-[290px] md:w-[350px] min-h-[300px] p-3 fixed bottom-[-100%] opacity-0 right-1 md:right-3 bg-gray-100 z-30 rounded-lg duration-100 shadow-lg"
        }>
        <p className="w-[288px] md:w-[348px] py-3 bg-fuchsia-600 text-white rounded-lg text-center text-lg fixed mx-auto">
          Shopping Cart
        </p>
        <div className="w-full mt-[60px] px-2 flex flex-col">
          {foodData.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartContent key={item.id} data={item} />;
            }
          })}
          {cartMessage ? (
            <div className="fixed w-full h-screen bg-black/50 z-50 top-0 left-0">
              <div className="flex flex-col justify-center items-center w-full h-screen">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white h-[150px] w-[300px]">
                  <p className="text-xl mb-4">Check out Successful!</p>
                  <button
                    onClick={closeMessage}
                    className="bg-fuchsia-600 text-white border-1 border-white hover:text-black hover:bg-white hover:border-black duration-300">
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {totalAmmount !== 0 && (
            <div>
              <p className="text-right">Total: {totalAmmount}</p>
              <button
                onClick={checkOut}
                className="block border-white mx-auto duration-300 bg-fuchsia-600 text-white hover:bg-white hover:border-fuchsia-600 hover:text-black">
                Check out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
