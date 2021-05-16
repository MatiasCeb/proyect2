import React from 'react';
import { Link } from 'react-router-dom';

function SellerComponent() {
    return (
      <div>
        <h1>Hola! Bienvenid@!!</h1>
        <Link className="btn btn-primary" to="/productos">
            Ir a productos
        </Link>
      </div>
    );
  }

  export default SellerComponent;