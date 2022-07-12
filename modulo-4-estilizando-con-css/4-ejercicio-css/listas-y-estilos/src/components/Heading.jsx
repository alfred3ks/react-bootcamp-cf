import styled, { css } from "styled-components";

// Aqui tenemos los estilos que son generales
const BaseStyles = css`
  font-weight: 600;
`;

// Asi extendemos el componente:
export const HeadingH1 = styled.h1`
  ${BaseStyles}
  font-size: 24px;
  margin-bottom: 15px;
`;
// Asi extendemos el componente:
export const HeadingH2 = styled.h2`
  ${BaseStyles}
  font-size: 20px;
`;
// Asi extendemos el componente:
export const HeadingH3 = styled.h3`
  ${BaseStyles}
  font-size: 18px;
`;
// Asi extendemos el componente:
export const HeadingH4 = styled.h4`
  ${BaseStyles}
  font-size: 16px;
`;

