import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const itemCount = 3;
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">DilFood</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white flex items-center hover:text-gray-300 transition duration-300"
            >
              <FaShoppingCart className="mr-2" />
              <span className="font-semibold">Cart</span>
              {itemCount > 0 && (
                <span className="ml-1 text-xs bg-white text-red-500 rounded-full px-2">
                  {itemCount}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
