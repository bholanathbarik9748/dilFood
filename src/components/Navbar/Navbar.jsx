"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const itemCount = useSelector((state) => state.Cart.length);
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white font-bold text-2xl">DilFood</div>
        </Link>
        {(
          <Link href="/cart">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white flex items-center hover:text-gray-300 transition duration-300"
                >
                  <FaShoppingCart className="mr-2" />
                  <span className="font-semibold">Cart</span>
                  {(
                    <span className="ml-1 text-xs bg-white text-red-500 rounded-full px-2">
                      {itemCount}
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
