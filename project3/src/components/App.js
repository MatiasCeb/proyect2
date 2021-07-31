import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/home";
import ProductList from "../components/ProductList";
import Checkout from '../pages/Checkout';
import NotFound from "../pages/NotFound";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "./styles/App.css";

const App = () => {
  const initialState = useInitialState();
  return (
      <AppContext.Provider value={initialState} >
        <BrowserRouter>
          <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/productos" component={ProductList} />
                <Route exact path="/checkout" component={Checkout} />
                <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
  );
}

export default App;