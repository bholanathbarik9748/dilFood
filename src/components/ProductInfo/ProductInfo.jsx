"use client";
import React from "react";
import Link from "next/link";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/GlobalRedux/Cart/CartSlice";

const ProductInfo = ({ product, id }) => {
  
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(id + 1));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md p-6 bg-white rounded-md shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="mb-4 rounded-md"
          />
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <Rating value={product.rating} />
          <p className="text-lg text-blue-500 font-bold mb-2 mt-2">
            {product.price}
          </p>

          <button
            className="bg-red-500 text-white rounded-md px-4 py-2 mr-2"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
