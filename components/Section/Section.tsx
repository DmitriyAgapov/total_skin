import React from "react";
import styled from "styled-components";
import {gridColumns, gridColumns_tablet, gridGap} from "../vars";



const SectionStyled = styled.section`

  position: relative;
  display: grid;
	gap: 1rem;
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
	&.section-page__contacts {
		.description {
			padding: 0;
		
		}
		row-gap: 0;
		min-height: 100vh;
		dl {
			dt {
				font-size: 1.75rem;
				color: var(--color-primary);
				margin: 0;
				font-weight: 500;
			}
			dd {
				font-size: 1.25rem;
				margin: 0 0 2rem 0;
				padding: 0;
			}
		}
		> div:not(.page__map):not(.box) {
			grid-column: 2/7;
			grid-row: 1/2
		}
		.page__map {
			margin-top: -4rem;
			margin-bottom: -6rem;
			grid-column: 7/-1;
			position: relative;
			overflow: hidden;
			grid-row: 1/12;
			min-height: calc(100vh - 6rem);
			iframe {
				width: 100%;
				height: 100%;
			}
		}
	}
	&.section-page__cart {
		> div {
			grid-column: 2/11;
			
		}
		.description {
			padding: 0	;
		}
		//.content {
		//	margin: 3rem 0;
		//}
		.tabs__header {
			button {
				margin-right: 2rem;
				font-size: 1.25rem;
				flex: 0 0 auto;
				text-transform: capitalize;
			}
		}
		.tabs__order {
			display: grid;
			gap: 1rem;
		}
		.accaunt__msg {
			font-size: 1.75rem;
			color: var(--color-text-gray)
		}
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