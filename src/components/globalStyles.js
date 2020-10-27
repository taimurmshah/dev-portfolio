// eslint-disable-next-line no-unused-vars
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
`;

export const Span = styled.span`
  padding: 10px;
  margin: 5px;
`;

export const A = styled.a`
  text-decoration: none;
  :hover {
    color: green;
    cursor: pointer;
  }
`;

export default GlobalStyle;
