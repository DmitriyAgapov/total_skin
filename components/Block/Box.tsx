import styled from "styled-components";
import React from "react";

const BoxStyled = styled.div`
  padding: 2rem 3rem;
  border-radius: 5px;
  background-color: #ECEFF8;
  &.box-contacts {
    grid-column: 2/8;
    //background-color: var(--color-background);
    grid-row: 2/12;
    position: relative;
    z-index: 100;
    .box__description {
      font-style: italic;
      color: var(--color-text);
      font-size: 1rem;
    }
 
  }
  
`
const Box = ({children, variant, title, description}) => {
  return (
      <BoxStyled className={`box box-${variant}`}>
          <h2>{title}</h2>
          <div className={'box__description'}>
              {description}
          </div>
          {children}
      </BoxStyled>
  )
}
export default Box