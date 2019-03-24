import React from "react";
import styled from "styled-components";

const CartItemStyles = styled.div`
  border: 1px solid darkgrey;
  padding: ${props => props.theme.gutter};
  margin-bottom: ${props => props.theme.gutter};

  h2 {
    font-size: 1.6rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.gutter};
  }

  button {
    width: 100px;
    padding: 10px;
    margin-left: auto;
    display: block;
    background: darkgray;
    color: white;
    cursor: pointer;
  }
`;

// TODO: Pass in category as prop to determine background gradient

const CartItem = ({
  product,
  inventory,
  setInventory,
  cartContents,
  setCartContents
}) => {
  const handleRemove = id => {
    const cartIndex = cartContents.findIndex(item => item.id === id);

    // Update inventory
    const updateIndex = inventory.findIndex(item => item.id === id);
    const updatedItem = {
      ...inventory[updateIndex],
      quantity:
        inventory[updateIndex].quantity + cartContents[cartIndex].quantity
    };
    const updatedInventory = [
      ...inventory.slice(0, updateIndex),
      updatedItem,
      ...inventory.slice(updateIndex + 1)
    ];

    setInventory(updatedInventory);

    const updatedCartContents = [
      ...cartContents.slice(0, cartIndex),
      ...cartContents.slice(cartIndex + 1)
    ];

    setCartContents(updatedCartContents);
  };

  return (
    <CartItemStyles>
      <h2>{product.name}</h2>
      <div>
        <span>{product.color}</span>
        <span>{product.category}</span>
      </div>
      <span>{`Quantity: ${product.quantity}`}</span>
      <button
        type="button"
        disabled={product.quantity === 0}
        onClick={() => handleRemove(product.id)}
      >
        remove
      </button>
    </CartItemStyles>
  );
};

export default CartItem;
