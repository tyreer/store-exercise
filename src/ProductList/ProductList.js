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

const ProductList = ({ inventory, setInventory }) => {
  return (
    <ProductListStyles>
      {inventory.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          setInventory={setInventory}
          inventory={inventory}
        />
      ))}
    </ProductListStyles>
  );
};

export default ProductList;
