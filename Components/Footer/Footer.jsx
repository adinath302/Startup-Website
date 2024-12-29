import React from "react";

const Footer = () => {
  return (
    <div className="py-8 bg-gray-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:place-items-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Logo</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-span-3 ">
            <div className="flex sm:justify-center items-center gap-8">
              <a href="#">Privacy policy</a>
              <a href="#">Home</a>
              <a href="#">About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
