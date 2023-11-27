import Navbar from "@/src/components/Navbar/Navbar";
import ProductList from "@/src/components/ProductList/ProductList";
import React from "react";
import data from '../../data/products.json'
import Footer from "@/src/components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <ProductList products={data} />
            <Footer />
        </>
    );
};

export default Home;
