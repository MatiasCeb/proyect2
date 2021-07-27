import React, { useState } from 'react';
import ProductList from './ProductList';

function SellerComponent() {
    const [ pregunta, setPregunta ] = useState (0);
    const [anterior, setAnterior ] = useState (0)


    const toPregunta = (id) => {
      return () => {
        setAnterior (pregunta)
        setPregunta (id)
      }
    }

    const volver = () => {
      setPregunta (anterior) 
    }




    return (
      <div>
        <div>{pregunta}</div>
        { pregunta === 0 && (
        <>
          <h5>Hola!! Mi nombre es Hugo y te voy a guiar para que tengas la mejor fiesta de todas!! Primero que nada!! Cuantos invitados son??</h5>
          <button className="btn btn-primary" onClick={toPregunta (501)}>
              50 invitados
          </button>
          <button className="btn btn-primary" onClick={toPregunta (2001)}>
              200 invitados
          </button>
          <button className="btn btn-primary" onClick={toPregunta (5001)}>
              500 invitados
          </button>
          <ProductList />
        </>
         ) }


        { pregunta === 501 && (
        <>
          <h5>Excelente! Para esa cantidad de invitados la cantidad de articulos para la cabeza son 15. Selecciona los que mas te gusten!</h5>
          <button className="btn btn-primary" onClick={toPregunta (502)}>
              Ya sume mis sombreros!!
          </button>
          <button className="btn btn-primary" onClick={toPregunta (503)}>
              Quiero ver otros articulos.
          </button>
          <ProductList category="Cara"/>
        </>
         ) }

        { pregunta === 502 && (
        <>
          <h5>Ahora que tienes tus sombreros, la fiesta sigue con 20 de los siguientes!</h5>
          <button className="btn btn-primary" onClick={toPregunta (4)}>
              Todo listo en el carrito!
          </button>
          <button className="btn btn-primary" onClick={toPregunta (5)}>
              Quiero ver otros articulos.
          </button>
          <ProductList category="Manos"/>
        </>
         ) }


        <br></br>
        <div onClick={volver} className= "btn btn-primary">volver</div>

        
      </div>
    );
  }

  export default SellerComponent;

  
          
   