import React, { createContext, useState } from "react";
import { foodData } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < foodData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartMessage, setCartMessage] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const handleAddtoCart = (itemId) => {
    const count = cartItems[itemId] || 0;
    setCartItems((prev) => ({ ...prev, [itemId]: count + 1 }));
  };

  const getTotalAmmount = () => {
    let totalAmmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodData.find((food) => food.id === Number(item));
        totalAmmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmmount;
  };

  const clearCartItems = () => {
    setCartItems(getDefaultCart(0));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    handleAddtoCart,
    getTotalAmmount,
    clearCartItems,
    setCartMessage,
    cartMessage,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
