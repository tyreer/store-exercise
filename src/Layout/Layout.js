import React from "react";
import { node } from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  wideMedia: "min-width: 600px",
  maxWidth: "1000px",
  gutter: "2rem"
};

const GlobalStyle = createGlobalStyle`
  html {
   /* Allow rem units to map to pixel values to facilitate font enlargement for accessibility */
   font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const LayoutStyles = styled.div`
  background: lightsteelblue;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.gutter};
  font-size: 1.6rem;

  @media (${props => props.theme.wideMedia}) {
    background: lightcoral;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <LayoutStyles>{children}</LayoutStyles>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
