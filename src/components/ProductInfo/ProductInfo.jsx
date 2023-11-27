import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductInfo = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div key={products.id} className="border p-4">
        <Link href="">
          <a>
            <image src={products.image} alt={products.name} className="mb-4" />
            <h2 className="text-lg font-bold">{products.description}</h2>
            <p className="text-gray-600">${products.price}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
