import React from "react";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../utils/utils";

const CartStyles = styled.section`
  min-height: 100vh;
  flex: 1;
  background: lightgoldenrodyellow;
  padding: ${props => props.theme.gutter};
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  const total = cartContents.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

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
      <p>{`Cart total: ${formatCurrency(total)}`}</p>
    </CartStyles>
  );
};

export default Cart;
