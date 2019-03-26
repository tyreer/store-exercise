import React from "react";
import styled from "styled-components";
import {
  updateItem,
  updateList,
  formatCurrency,
  mapColor
} from "../utils/utils";

const ProductCardStyles = styled.div`
  border: 1px solid darkgrey;
  padding: ${props => props.theme.gutter};
  margin-bottom: ${props => props.theme.gutter};
  border-left: 4px solid ${props => mapColor(props.category, props.theme)};

  h2 {
    font-size: 1.8rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.gutter};
  }

  button {
    width: ${props => props.theme.buttonWidth};
    padding: 1rem;
    margin-left: auto;
    display: block;
    background: darkgray;
    color: white;
    cursor: pointer;
  }

  .category {
    background: ${props => mapColor(props.category, props.theme)};
    padding: 0.5rem;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

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
    <ProductCardStyles category={product.category}>
      <h2>{product.name}</h2>
      <div>
        <span className="category">{product.category}</span>
      </div>
      <div>
        <span>{product.color}</span>
        <span>{formatCurrency(product.price)}</span>
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
