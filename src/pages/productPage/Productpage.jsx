"use client";
import React from "react";
import Footer from "../../components/Footer/Footer";
import products from "../../data/products.json";
import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import Navbar from "@/src/components/Navbar/Navbar";

const Productpage = ({ id }) => {
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <ProductInfo product={product} id={id} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Productpage;
