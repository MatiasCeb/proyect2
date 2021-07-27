import React from "react";


import "./styles/product.scss";


const ProductItem = ({ product, handleAddToCart }) => {
    return(
        <div className="product-item">
            <img className="product-item__img" src={product.image} alt={product.title} />
            <div className="product-item__details">
                <h2>
                    {product.title}
                    <span>
                        $
                        {" "}
                        {product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
        </div>
    )
}




// const ProductItem = (props) => {
//     const {product} = props;
//     const {image, name, category} = product;

//     return (
//         <div className="product-item" key={products.id}>
//             <img className="product-item__img" src={image} alt={name}  />
//             <div className="product-item__details">
//             <p className="product-item__details--title">{name}</p>
//             <p className="product-item__details--subtitle">
//                 {`${name} ${category}`}
//             </p>
//             </div>
//         </div>
//     )
// };


export default ProductItem;