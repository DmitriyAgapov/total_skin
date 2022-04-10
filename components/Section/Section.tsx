import React from "react";
import styled from "styled-components";
import {gridColumns, gridColumns_tablet, gridGap} from "../vars";



const SectionStyled = styled.section`
  overflow: hidden;
  position: relative;
  display: grid;
  z-index: 1;
  grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns} calc((100vw - 109rem - ${gridGap}) / 2);
  @media screen and (max-width: 1024px){
    grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns_tablet} calc((100vw - 109rem - ${gridGap}) / 2);
  }
  gap: ${gridGap};
  margin: 7rem 0;
  & + & {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
`;

const Section = ({children}) => {
	return(
	<SectionStyled>
		{children}
	</SectionStyled>
)
}


export default Section;