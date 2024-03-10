import React from "react";
import Food from "../components/Food";
import { foodData } from "../data";
import { useState } from "react";

function Toppicks() {
  const [food, setFood] = useState("");
  return (
    <div className="max-w-[1240px] h-auto mx-auto">
      <h1 className="text-xl font-bold mt-20 text-center">Top Picks</h1>
      <input
        onChange={(e) => setFood(e.target.value)}
        className="w-auto min-w-[300px] h-10 px-2 border-2 my-3 rounded-lg block mx-auto md:mx-0"
        type="text"
        placeholder="Search Food / Store"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
        {foodData
          .filter((item) => {
            return food.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(food) ||
                food.toLowerCase() === ""
              ? item
              : item.store.toLowerCase().includes(food);
          })
          .map((item, index) => (
            <Food
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              store={item.store}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Toppicks;
