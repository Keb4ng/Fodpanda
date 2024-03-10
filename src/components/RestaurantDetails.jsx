import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { foodData } from "../data";
import Food from "./Food";

function RestoDetails() {
  const { name } = useParams();
  const filteredFoodData = foodData.filter((food) => food.store === name);
  return (
    <div className="max-w-[1240px] mx-auto mt-20">
      <h1 className="text-xl font-bold">{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
        {filteredFoodData.map((item, index) => (
          <Food
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RestoDetails;
