import React from "react";
import styled from "styled-components";
import { func, number } from "prop-types";
import {
  updateItem,
  updateList,
  formatCurrency,
  mapColor
} from "../utils/utils";
import { productListType, productType } from "../propTypes/types";

const CartItemStyles = styled.div`
  border: 1px solid darkgrey;
  padding: ${({ theme }) => theme.gutter};
  margin-bottom: ${({ theme }) => theme.gutter};
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
    margin-top: ${({ theme }) => theme.gutter};
    display: block;
    background: darkgray;
    color: white;
    cursor: pointer;
  }

  .category {
    color: ${props => mapColor(props.category, props.theme)};
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.gutter};
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

CartItem.propTypes = {
  product: productType.isRequired,
  inventory: productListType.isRequired,
  setInventory: func.isRequired,
  cartContents: productListType.isRequired,
  setCartContents: func.isRequired,
  cartTotal: number.isRequired,
  setCartTotal: func.isRequired
};

export default CartItem;
