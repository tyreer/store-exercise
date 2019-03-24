import React from "react";
import { node } from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const theme = {
  wideMedia: "min-width: 700px",
  maxWidth: "1000px",
  gutter: "2rem"
};

const LayoutStyles = styled.div`
  border: 1px solid lightsteelblue;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.gutter};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  @media (${props => props.theme.wideMedia}) {
    border: 1px solid lightcoral;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <LayoutStyles>{children}</LayoutStyles>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
