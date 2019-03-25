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
  margin-bottom: ${props => props.theme.gutter};

  &:first-of-type {
    border-right: none;
  }
`;

const Nav = ({ setCartOpen, cartOpen }) => {
  return (
    <NavStyles>
      <NavButton onClick={() => setCartOpen(false)} type="button">
        products
      </NavButton>
      <NavButton onClick={() => setCartOpen(!cartOpen)} type="button">
        {cartOpen ? "X" : "cart"}
      </NavButton>
    </NavStyles>
  );
};

Nav.propTypes = {
  setCartOpen: func.isRequired,
  cartOpen: bool.isRequired
};

export default Nav;
