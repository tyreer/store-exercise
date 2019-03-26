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
  const [cartContents, setCartContents] = useState([]);
  const cartQuantity = cartContents.reduce((acc, cur) => acc + cur.quantity, 0);
  return (
    <Layout>
      <Nav
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        cartQuantity={cartQuantity}
      />
      {!cartOpen && (
        <ProductList
          inventory={inventory}
          setInventory={setInventory}
          setCartContents={setCartContents}
          cartContents={cartContents}
        />
      )}
      {cartOpen && (
        <Cart
          inventory={inventory}
          setInventory={setInventory}
          setCartContents={setCartContents}
          cartContents={cartContents}
        />
      )}
    </Layout>
  );
};

export default App;
