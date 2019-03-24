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
  }
`;

// TODO: Pass in category as prop to determine background gradient

const ProductCard = ({ product }) => {
  return (
    <ProductCardStyles>
      <h2>{product.name}</h2>
      <div>
        <span>{product.color}</span>
        <span>{product.category}</span>
      </div>
    </ProductCardStyles>
  );
};

export default ProductCard;
