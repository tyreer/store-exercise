import React from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const ProductListStyles = styled.section`
  @media (${props => props.theme.wideMedia}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.gutter};

    h1 {
      font-size: 5rem;
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

export default ProductList;
