import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductList = ({ products }) => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-16 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
            {products.map((product, ind) => (
                <ProductDetail key={ind} product={product} index={ind} />
            ))}
        </div>
    );
};

export default ProductList;
