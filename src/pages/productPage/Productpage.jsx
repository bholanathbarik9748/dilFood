"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer/Footer';
import products from '../../data/products.json';
import ProductInfo from '@/src/components/ProductInfo/ProductInfo';

const Productpage = () => {
    const router = useRouter();
    console.log(router.query);
    const id = 1;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <ProductInfo product={product} />
            </div>
            <Footer />
        </div>
    );
};

export default Productpage;
