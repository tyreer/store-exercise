import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const ProductListStyles = styled.div`
  @media (${props => props.theme.wideMedia}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.gutter};
  }
`;

const ProductList = ({
  inventory,
  setInventory,
  cartContents,
  setCartContents
}) => {
  return (
    <ProductListStyles>
      <h1>Products</h1>
      {inventory.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          setInventory={setInventory}
          inventory={inventory}
          cartContents={cartContents}
          setCartContents={setCartContents}
        />
      ))}
    </ProductListStyles>
  );
};

export default ProductList;
