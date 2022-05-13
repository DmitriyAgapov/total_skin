import React from "react";
import styled from "styled-components";
import {gridColumns, gridColumns_tablet, gridGap} from "../vars";



const SectionStyled = styled.section`

  position: relative;
  display: grid;
  z-index: 1;
	&.page__product {
		&:before {
			content: '';
			width: 60vw;
			min-height: 140vh;
			position: absolute;
			top: -20vh;
			background-color:  var(--color-background-podlozhka);
		}
	}
  grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns} calc((100vw - 109rem - ${gridGap}) / 2);
  @media screen and (max-width: 1024px){
    grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns_tablet} calc((100vw - 109rem - ${gridGap}) / 2);
  }
	&.inverse-true {
		color: #fafafa;
	}
  gap: 4rem ${gridGap};
  margin: 7rem 0;
&:last-child {
	margin-bottom: 0 !important;
}
  & + & {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }

	&.section-page {
		margin-top: 0rem;
		padding-top: 4rem;
	}
`;

const Section = ({children, variant = ''}) => {

	return(
	<SectionStyled className={`${variant}`}>
		{children}
	</SectionStyled>
)
}


export default Section;