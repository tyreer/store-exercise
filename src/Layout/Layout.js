import React from "react";
import { node } from "prop-types";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  wideMedia: "min-width: 700px",
  maxWidth: "1000px",
  gutter: "2rem"
};

const LayoutStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.gutter};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyles>{children}</LayoutStyles>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
