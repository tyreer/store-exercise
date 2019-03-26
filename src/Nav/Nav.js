import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const NavStyles = styled.nav`
  flex: 1;
  display: flex;
`;

const NavButton = styled.button`
  border: 5px solid black;
  flex: 1;
  padding: ${props => props.theme.gutter};
  cursor: pointer;

  &:first-of-type {
    border-right: none;
  }

  @media (${props => props.theme.wideMedia}) {
    margin-bottom: ${props => props.theme.gutter};
  }
`;

const Nav = ({ setCartOpen, cartOpen, cartQuantity }) => {
  return (
    <NavStyles>
      <NavButton onClick={() => setCartOpen(false)} type="button">
        products
      </NavButton>
      <NavButton onClick={() => setCartOpen(!cartOpen)} type="button">
        {cartOpen ? "X" : `cart (${cartQuantity})`}
      </NavButton>
    </NavStyles>
  );
};

Nav.propTypes = {
  setCartOpen: func.isRequired,
  cartOpen: bool.isRequired
};

export default Nav;
