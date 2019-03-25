import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../utils/utils";
import VoucherForm from "../VoucherForm/VoucherForm";

const CartStyles = styled.section`
  flex: 1;

  @media (${props => props.theme.wideMedia}) {
    width: 50%;
  }

  .total {
    text-align: right;
    font-weight: bold;
  }
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  const intialTotal = cartContents.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

  const [cartTotal, setCartTotal] = useState(intialTotal);

  return (
    <CartStyles>
      <h1>Your cart</h1>
      {!cartContents.length && <span>No items in cart</span>}
      {cartContents.map(product => (
        <CartItem
          key={product.id}
          product={product}
          setInventory={setInventory}
          inventory={inventory}
          cartContents={cartContents}
          setCartContents={setCartContents}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      ))}
      <VoucherForm
        cartContents={cartContents}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      <p className="total">{`Cart total: ${formatCurrency(cartTotal)}`}</p>
    </CartStyles>
  );
};

export default Cart;
