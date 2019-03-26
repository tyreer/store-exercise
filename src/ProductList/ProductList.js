import React from "react";
import { func } from "prop-types";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import { productListType } from "../propTypes/types";

const ProductListStyles = styled.section`
  @media (${props => props.theme.wideMedia}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.gutter};

    h1 {
      font-size: 6rem;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.themePink};
    }
  }
`;

const ProductList = ({
  inventory,
  setInventory,
  cartContents,
  setCartContents
}) => {
  const [offset] = useSpring(() => ({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(30vh)", opacity: 0 },
    config: config.stiff
  }));

  return (
    <animated.div style={offset}>
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
    </animated.div>
  );
};

ProductList.propTypes = {
  inventory: productListType.isRequired,
  setInventory: func.isRequired,
  cartContents: productListType.isRequired,
  setCartContents: func.isRequired
};

export default ProductList;
