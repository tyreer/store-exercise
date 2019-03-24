import React from "react";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

const CartStyles = styled.section`
  min-height: 100vh;
  flex: 1;
  background: lightgoldenrodyellow;
  padding: ${props => props.theme.gutter};
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  return (
    <CartStyles>
      <h1>Cart</h1>
      {cartContents.map(product => (
        <CartItem
          key={product.id}
          product={product}
          setInventory={setInventory}
          inventory={inventory}
          cartContents={cartContents}
          setCartContents={setCartContents}
        />
      ))}
    </CartStyles>
  );
};

export default Cart;
