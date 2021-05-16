import React from "react";
import {Link} from "react-router-dom";
import products from "./shared/products";


function ProductList () {
        return (
        <ul className="list-unstyled">
            {products.map((product) => {
                return (
                    <li className="productList" key={product.id}>
                        <p>"{product.name}"</p>
                    </li>
                )
            })}
        </ul>
        )
}

export default ProductList;