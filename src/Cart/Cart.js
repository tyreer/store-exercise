import React, { useState } from "react";
import styled from "styled-components";
import { animated, config, useSpring } from "react-spring";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../utils/utils";
import VoucherForm from "../VoucherForm/VoucherForm";

const CartStyles = styled.section`
  flex: 1;

  @media (${props => props.theme.wideMedia}) {
    width: 50%;

    h1 {
      font-size: 5rem;
    }
  }

  .total {
    text-align: right;
    font-weight: bold;
  }
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  const [offset] = useSpring(() => ({
    transform: `translateX(0)`,
    from: { transform: "translateX(30vw)" },
    config: config.stiff
  }));

  const intialTotal = cartContents.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

  const [cartTotal, setCartTotal] = useState(intialTotal);

  return (
    <animated.div style={offset}>
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
    </animated.div>
  );
};

export default Cart;
