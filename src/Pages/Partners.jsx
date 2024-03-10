import React from "react";

function Partners() {
  return (
    <div className="max-w-[1240px] mt-20 h-auto mx-auto flex justify-center items-center">
      <div className="parnters-wrapper flex flex-col gap-y-10">
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <img
              className="w-auto h-auto"
              src="https://images.pexels.com/photos/4392039/pexels-photo-4392039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="food"
            />
          </div>
          <div>
            <p className="text-3xl mb-4">Title</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsam, corporis at tempora aliquid illo eum voluptates, maxime
              maiores reprehenderit ab. Est ratione itaque consequuntur fuga,
              ipsam nam repellat placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-3">
          <div>
            <img
              src="https://images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="food"
            />
          </div>
          <div>
            <p className="text-3xl mb-4">Title</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsam, corporis at tempora aliquid illo eum voluptates, maxime
              maiores reprehenderit ab. Est ratione itaque consequuntur fuga,
              ipsam nam repellat placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <img
              className="w-auto h-auto"
              src="https://images.pexels.com/photos/4604663/pexels-photo-4604663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="food"
            />
          </div>
          <div>
            <p className="text-3xl mb-4">Title</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsam, corporis at tempora aliquid illo eum voluptates, maxime
              maiores reprehenderit ab. Est ratione itaque consequuntur fuga,
              ipsam nam repellat placeat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
