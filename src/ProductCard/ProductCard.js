import React from "react";
import styled from "styled-components";

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

const ProductCard = ({ product, inventory, setInventory }) => {
  const handleAdd = id => {
    const updateIndex = inventory.findIndex(item => item.id === id);
    const updatedItem = {
      ...inventory[updateIndex],
      quantity: inventory[updateIndex].quantity - 1
    };
    const updatedInventory = [
      ...inventory.slice(0, updateIndex),
      updatedItem,
      ...inventory.slice(updateIndex + 1)
    ];

    setInventory(updatedInventory);
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
