import React, { useState } from "react";

import "./App.css";
import Layout from "./Layout/Layout";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Layout>
      <Nav setCartOpen={setCartOpen} cartOpen={cartOpen} />
      {cartOpen && <Cart />}
    </Layout>
  );
};

export default App;
