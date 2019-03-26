import React from "react";
import styled from "styled-components";
import {
  updateItem,
  updateList,
  formatCurrency,
  mapColor
} from "../utils/utils";

const CartItemStyles = styled.div`
  border: 1px solid darkgrey;
  padding: ${props => props.theme.gutter};
  margin-bottom: ${props => props.theme.gutter};
  max-width: 300px;
  border-left: 4px solid ${props => mapColor(props.category, props.theme)};

  h2 {
    font-size: 1.6rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: ${props => props.theme.buttonWidth};
    padding: 1rem;
    margin-left: auto;
    margin-top: ${props => props.theme.gutter};
    display: block;
    background: darkgray;
    color: white;
    cursor: pointer;
  }

  .category {
    color: ${props => mapColor(props.category, props.theme)};
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: ${props => props.theme.gutter};
  }
`;

const CartItem = ({
  product,
  inventory,
  setInventory,
  cartContents,
  setCartContents,
  cartTotal,
  setCartTotal
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
    setCartTotal(
      cartTotal -
        cartContents[cartItemIndex].price * cartContents[cartItemIndex].quantity
    );
  };

  return (
    <CartItemStyles category={product.category}>
      <h2>{product.name}</h2>
      <div>
        <span className="category">{product.category}</span>
      </div>
      <div>
        <span>{product.color}</span>
        <span>{formatCurrency(product.price)}</span>
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
