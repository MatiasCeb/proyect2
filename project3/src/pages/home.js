import React from 'react';
import { Link } from 'react-router-dom';
import SellerComponent from '../components/sellerComponent';
import ProductList from "../components/ProductList";

function Home() {
    return (
      <div>
        <h1>Funcionaaaa</h1>
        <ProductList />
        <SellerComponent />
      </div>
    );
  }

  export default Home;