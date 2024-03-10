import React from "react";
import hand from "../images/hand.png";

function WelcomeIntro() {
  return (
    <div className="max-w-[1240px] h-auto mx-auto my-3 mt-5 md:mt-60">
      <h1 className="text-3xl font-bold text-fuchsia-600 mb-5 px-6">
        Download our App now!
      </h1>
      <div className="flex flex-col md:flex-row relative w-full  min-h-[300px] px-6 pt-6 bg-fuchsia-600 rounded-lg">
        <div className="text-white mb-6 h-auto w-full md:w-1/2">
          <p className="font-bold text-3xl">
            Order the food and groceries you love.
          </p>
          <p className="mt-5 text-xl md:text-xl">
            It's all at your fingertips – the restaurants and shops you love.
            Find the right food and groceries to suit your mood, and make the
            first bite last. Go ahead, download us.
          </p>
          <h1 className="bg-white w-[max-content] text-fuchsia-600 text-3xl font-bold rounded-xl p-3 items-center mt-10">
            <span className="bg-fuchsia-600 rounded-lg mr-2">🐼</span>fodpanda
          </h1>
        </div>
        <div className="relative w-full md:w-1/2 max-w-[620px]">
          <img
            className="relative md:absolute bottom-0 right-0 h-auto w-full"
            src={hand}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeIntro;
