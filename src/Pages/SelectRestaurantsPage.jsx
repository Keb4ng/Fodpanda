import React, { useState } from "react";
import RestoComponent from "../components/RestoComponent";
import { storeData } from "../data";

function SelectRes() {
  const [selectResto, setSelectResto] = useState("");
  return (
    <div className="my-20 max-w-[1240px] min-h-[100vh] mx-auto">
      <h1 className="text-xl font-bold mb-1 text-center">Select Restaurants</h1>
      <input
        onChange={(e) => setSelectResto(e.target.value)}
        className="w-auto min-w-[300px] h-10 px-2 border-2 my-3 rounded-lg block mx-auto md:mx-0"
        type="text"
        placeholder="Search Restaurants"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {storeData
          .filter((item) => {
            return selectResto.toLowerCase() === ""
              ? item
              : item.store.toLowerCase().includes(selectResto);
          })
          .map((item, index) => (
            <RestoComponent
              key={index}
              name={item.store}
              rating={item.rating}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default SelectRes;
