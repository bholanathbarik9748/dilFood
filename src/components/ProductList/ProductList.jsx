import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductList = ({ products }) => {
    return (
        <div className="mx-16 mb-10 grid grid-cols-3 gap-4 mt-10">
            {products.map((product,ind) => (
                <>
                    <ProductDetail product={product} index={ind} />
                </>
            ))}
        </div>
    );
};

export default ProductList;
