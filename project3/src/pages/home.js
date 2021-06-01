import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import SellerComponent from '../components/sellerComponent';
import Footer from "../components/Footer";
import "./styles/home.scss";

function Home() {
    return (
      <div className="home">
        <Header />
        <SellerComponent />
        <Footer />
      </div>
    );
  }

  export default Home;