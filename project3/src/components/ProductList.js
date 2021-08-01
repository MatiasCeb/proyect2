import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import AppContext from "../context/AppContext";
import "./styles/Carousel.scss";


function ProductList () {
    const { state, addToCart } = useContext(AppContext);
    const {products} = state;

    const handleAddToCart = product => () =>{
        const random = Math.floor(Math.random() * 1000);
        const newProduct = {...product, cartId : `${product.id}-${random}`};
        console.log(newProduct);
        addToCart(newProduct)
    }

        return (
            <section className="carousel">
                <div className="carousel__container">
                    {products.map((product) =>                 
                        <ProductItem key= {product.cartId} product={product} handleAddToCart={handleAddToCart}/> )}
                </div>
                </section>
        )
}

export default ProductList;