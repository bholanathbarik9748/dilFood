"use client";
import React from "react";
import Link from "next/link";

import { addToCart } from "../../../app/GlobalRedux/Cart/CartSlice";
import { RootState } from "../../../app/GlobalRedux/Store";
import { useSelector, useDispatch } from "react-redux";


const ProductDetail = ({ product, index }) => {
  const Total = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(index + 1));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md cursor-pointer">
      <img src={product.image} alt={product.name} className="mb-4 rounded-lg" />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-gray-700 mt-4">{product.description}</p>

      <div className="mt-6">
        <button
          onClick={() => addToCartHandler()}
          className="bg-red-500 mr-2 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          Add to Cart
        </button>
        <Link href={`/product/${index+1}`}>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
