import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
const Products = () => {
  return <Wrapper></Wrapper>;
};

export default Products;
