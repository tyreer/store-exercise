import React from "react";
import styled from "styled-components";
import mockData from "../mock-data";
import ProductCard from "../ProductCard/ProductCard";

const ProductListStyles = styled.div`
  @media (${props => props.theme.wideMedia}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.gutter};
  }
`;

const ProductList = () => {
  return (
    <ProductListStyles>
      {mockData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListStyles>
  );
};

export default ProductList;
