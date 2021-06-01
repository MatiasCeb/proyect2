import React from "react";
import products from "./shared/products";
import "./styles/product.scss";

const ProductItem = (props) => {
    const {product} = props;
    const {image, name, category} = product;

    return (
        <div className="product-item" key={products.id}>
            <img className="product-item__img" src={image} alt={name}  />
            <div className="product-item__details">
            <p className="product-item__details--title">{name}</p>
            <p className="product-item__details--subtitle">
                {`${name} ${category}`}
            </p>
            </div>
        </div>
    )
};


export default ProductItem;