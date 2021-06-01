import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../index.css';
import Home from "../pages/home";
import ProductList from "../components/ProductList";


function App() {
  return (
      <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/productos" component={ProductList} />
              </Switch>
      </BrowserRouter>
  );
}

export default App;