import React from "react";

const Hero = ({ reverse, image , heading, text }) => {
  return (
    <>
      <main className="mt-14 sm:mt-0">
        <div className="container min-h-[500px] flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Hero section */}
            <div className={`${reverse ? "order-last" : ""}`}>
              <img src={image} alt="" className="w-[300px]" />
            </div>

            {/* text content */}

            <div className={`${reverse ? "order-first" : ""} } space-y-5`}>
              <h1 className="text-4xl font-bold">
                {heading}
              </h1>
              <p>
               {text}
              </p>
              <div className="space-x-2">
                <input
                  className="bg-gray-200 p-2 rounded-md
                w-[140px]"
                  type="email"
                  placeholder="Your email"
                />
                <button className="p-2 bg-blue-500 rounded-md text-white">
                  Notify me
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
