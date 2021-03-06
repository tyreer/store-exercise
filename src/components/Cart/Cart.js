import React, { useState } from "react";
import { func } from "prop-types";
import styled from "styled-components";
import { animated, config, useSpring } from "react-spring";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../../utils/utils";
import VoucherForm from "../VoucherForm/VoucherForm";
import { productListType } from "../../propTypes/types";

const CartStyles = styled.section`
  flex: 1;

  @media (${props => props.theme.wideMedia}) {
    width: 50%;

    h1 {
      font-size: 6rem;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.themeGreen};
    }
  }

  .total {
    text-align: right;
    font-weight: bold;
  }
`;

const Cart = ({ inventory, setInventory, cartContents, setCartContents }) => {
  const [offset] = useSpring(() => ({
    to: { transform: "translateX(0)", opacity: 1 },
    from: { transform: "translateX(30vw)", opacity: 0 },
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
        {cartContents.length === 0 && <span>No items in cart</span>}
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

Cart.propTypes = {
  inventory: productListType.isRequired,
  setInventory: func.isRequired,
  cartContents: productListType.isRequired,
  setCartContents: func.isRequired
};

export default Cart;
