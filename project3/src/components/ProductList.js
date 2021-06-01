import React from "react";
import ProductItem from "./ProductItem";
import products from "./shared/products";
import "./styles/Carousel.scss";


function ProductList ({ category }) {
    const list = category ? products.filter( p => p.category === category ) : products;

        return (
            <section className="carousel">
                <div className="carousel__container">
                    {list.map((product) =>                 
                        <ProductItem product={product} category={category}/> )}
                </div>
                </section>
        )
}

export default ProductList;