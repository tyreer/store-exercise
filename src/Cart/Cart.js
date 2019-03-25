import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../utils/utils";
import Voucher from "../VoucherForm/VoucherForm";

const CartStyles = styled.section`
  min-height: 100vh;
  flex: 1;
  background: lightgoldenrodyellow;
  padding: ${props => props.theme.gutter};
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  const intialTotal = cartContents.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

  const [cartTotal, setCartTotal] = useState(intialTotal);

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
      <Voucher
        cartContents={cartContents}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      <p>{`Cart total: ${formatCurrency(cartTotal)}`}</p>
    </CartStyles>
  );
};

export default Cart;
