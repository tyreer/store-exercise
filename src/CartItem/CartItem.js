import React from "react";
import styled from "styled-components";
import { updateItem, updateList } from "../utils/utils";

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

const CartItem = ({
  product,
  inventory,
  setInventory,
  cartContents,
  setCartContents
}) => {
  const handleRemove = id => {
    const cartItemIndex = cartContents.findIndex(item => item.id === id);
    const inventoryItemIndex = inventory.findIndex(item => item.id === id);

    // Update inventory
    const updatedInventoryItem = updateItem(
      inventory,
      inventoryItemIndex,
      cartContents[cartItemIndex].quantity
    );

    const updatedInventory = updateList(
      inventory,
      inventoryItemIndex,
      updatedInventoryItem
    );

    setInventory(updatedInventory);

    // Update cart
    const updatedCartContents = updateList(cartContents, cartItemIndex);

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
