import React from 'react';
import { Link } from 'react-router-dom';

function SellerComponent() {
    return (
      <div>
        <h1>Hola! Bienvenid@!! Mi nombre es Hugo y te voy a guiar para que tengas la mejor fiesta de todas!! Primero que nada!! Cuantos invitados serían??</h1>
        <Link className="btn btn-primary" to="/50">
            50 invitados
        </Link>
        <Link className="btn btn-primary" to="/200">
            200 invitados
        </Link>
        <Link className="btn btn-primary" to="/500">
            500 invitados
        </Link>
      </div>
    );
  }

  export default SellerComponent;