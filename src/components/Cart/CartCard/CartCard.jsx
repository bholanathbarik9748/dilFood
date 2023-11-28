import { removeFromCart } from "@/app/GlobalRedux/Cart/CartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CartCard = ({ product, deleteItem }) => {
  const dispatch = useDispatch();

  const deleteItemCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md cursor-pointer mb-2 relative">
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 rounded-lg"
        />
        <button
          onClick={() => deleteItemCart(product.id)} 
          className="absolute top-2 right-2 text-red-500 cursor-pointer"
        >
          {/* Replace the content of the button with your delete icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>
      </div>

    </>
  );
};

export default CartCard;
