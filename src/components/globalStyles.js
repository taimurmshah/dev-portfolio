// eslint-disable-next-line no-unused-vars
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
`;

// export const Container = styled.div`
//   z-index: 1;
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px;
//
//   @media (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
//   }
// `;

export const Span = styled.span`
  padding: 10px;
  margin: 5px;
`;

export default GlobalStyle;
