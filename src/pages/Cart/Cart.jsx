"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import products from "../../data/products.json";
import CartCard from "../../components/Cart/CartCard/CartCard";

const Cart = () => {
  const router = useRouter()
  const item = useSelector((state) => state.Cart);
  const CartItem = products?.filter((ele) => item.includes(ele.id));
  const totalAmount = CartItem?.reduce((total, ele) => total + ele.price, 0);
  const [address , setAddress] = useState("");

  const submitHandler = () => {
    toast.success("Order completed !!")
  }

  return (
    <div className="mx-8 container mt-8">
      <ToastContainer />
      <h1 className="text-2xl mx-8 font-bold mb-4">Your Shopping Cart ({item.length} Items)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CartItem?.map((ele, ind) => (
          <div key={ind}>
            <CartCard product={ele} />
          </div>
        ))}
      </div>
      <div className="mt-4 mx-8">
        <h4 className="text-lg font-semibold">Total Amount:</h4>
        <p className="text-xl font-bold">${totalAmount.toFixed(2)}</p>
      </div>
      <div className="mt-4 mx-8">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your full Address</label>
        <textarea onChange={(e) => setAddress(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address..."></textarea>
      </div>
      <button
        type="button"
        onClick={() => router.push('/')}
        disabled={item.length < 1 || !address}
        className="mt-4 mx-8 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg py-2 px-4 focus:outline-none focus:ring-4 focus:ring-red-300">
        Check Out
      </button>
    </div>
  );
};

export default Cart;