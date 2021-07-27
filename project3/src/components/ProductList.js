import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import AppContext from "../context/AppContext";
import "./styles/Carousel.scss";


function ProductList () {
    const { state, addToCart } = useContext(AppContext);
    const {products} = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    }

        return (
            <section className="carousel">
                <div className="carousel__container">
                    {products.map((product) =>                 
                        <ProductItem key= {product.id} product={product} handleAddToCart={handleAddToCart}/> )}
                </div>
                </section>
        )
}

export default ProductList;