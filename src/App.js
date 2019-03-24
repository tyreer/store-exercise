import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";
import ProductList from "./ProductList/ProductList";
import mockData from "./mock-data";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [inventory, setInventory] = useState(mockData);
  return (
    <Layout>
      <Nav setCartOpen={setCartOpen} cartOpen={cartOpen} />
      {!cartOpen && (
        <ProductList inventory={inventory} setInventory={setInventory} />
      )}
      {cartOpen && <Cart setInventory={setInventory} />}
    </Layout>
  );
};

export default App;
