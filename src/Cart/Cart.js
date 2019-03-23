import React from "react";
import styled from "styled-components";

const CartStyles = styled.section`
  height: 500px;
  flex: 1;
  background: red;
  padding: ${props => props.theme.gutter};
`;

const Cart = () => {
  return (
    <CartStyles>
      <h1>Cart</h1>
    </CartStyles>
  );
};

export default Cart;
