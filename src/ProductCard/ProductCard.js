import React from "react";
import styled from "styled-components";
import { updateItem, updateList } from "../utils/utils";

const ProductCardStyles = styled.div`
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

const ProductCard = ({
  product,
  inventory,
  setInventory,
  cartContents,
  setCartContents
}) => {
  const handleAdd = id => {
    const cartItemIndex = cartContents.findIndex(item => item.id === id);
    const inventoryItemIndex = inventory.findIndex(item => item.id === id);

    // Update inventory
    const updatedInventoryItem = updateItem(inventory, inventoryItemIndex, -1);

    const updatedInventory = updateList(
      inventory,
      inventoryItemIndex,
      updatedInventoryItem
    );

    setInventory(updatedInventory);

    // Update cart
    if (cartItemIndex === -1) {
      const newCartItem = updateItem(inventory, inventoryItemIndex);

      setCartContents([...cartContents, newCartItem]);
    } else {
      const updatedCartItem = updateItem(cartContents, cartItemIndex, 1);

      const updatedCart = updateList(
        cartContents,
        cartItemIndex,
        updatedCartItem
      );

      setCartContents(updatedCart);
    }
  };

  return (
    <ProductCardStyles>
      <h2>{product.name}</h2>
      <div>
        <span>{product.color}</span>
        <span>{product.category}</span>
      </div>
      <button
        type="button"
        disabled={product.quantity === 0}
        onClick={() => handleAdd(product.id)}
      >
        {product.quantity === 0 ? "out of stock" : "add to cart"}
      </button>
    </ProductCardStyles>
  );
};

export default ProductCard;
