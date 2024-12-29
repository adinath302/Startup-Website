import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="container flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
