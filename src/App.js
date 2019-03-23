import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";
import ProductList from "./ProductList/ProductList";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Layout>
      <Nav setCartOpen={setCartOpen} cartOpen={cartOpen} />
      {!cartOpen && <ProductList />}
      {cartOpen && <Cart />}
    </Layout>
  );
};

export default App;
