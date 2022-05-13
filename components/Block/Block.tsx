import React from "react";

// @ts-ignore
import styled from 'styled-components';
import {gridColumns, gridGap} from "../vars";
import Link from "next/link";


export const BlockStyled = styled.div`
	grid-column: 2/-2;
  display: grid;

  grid-template-columns: ${gridColumns} ;
  gap: ${gridGap};
  h2 {
    grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `span 4` :  `span 4`)};
  }
  .description {
    grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `6/span 7` :  `span 8`)};
    //font-size: 125%;
    padding:  1em 2em;
  }
`;

const Block = ({children = null, title = null, description = null, gallery = null}) =>{
	// console.log(gallery)

	return (
	<BlockStyled>
		{title ? <h2>{title}</h2> : null}

		{description ? <div className={'description'}

			 data-type={typeof title}>{description}</div> : null}
		{children ? <div className={'content'}>{children}</div> : null }

	</BlockStyled>
	)}
export default Block