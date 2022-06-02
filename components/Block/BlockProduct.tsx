import React, {useCallback, useEffect, useState} from "react";
// @ts-ignore
import styled from "styled-components";
import {gridColumns, gridGap} from "../vars";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {observer} from "mobx-react-lite";
import {useStore} from "../StoreProvider";
import {DocumentRenderer} from "@keystone-6/document-renderer";
import {toJS} from "mobx";
import {Item} from "../../stores/cart";
import AddToCartButton from "../AddToCartButton";

export const BlockProductStyled = styled.div`
  //grid-column: 2/-2;
  display: block;
  grid-template-columns: ${gridColumns};
  gap: ${gridGap};
  grid-column: 6/-2;
  background-color: var(--color-background-product);
  padding: 1.5rem 2.5rem;
  //min-height: 100vh;

  h1 {
    margin: 0;
    text-transform: capitalize;
  }

  .product__subtitle {
    margin: 0 0 2.5rem 0;
    color: #9E9FA3;
    font-size: 1.25rem;
  }

  .product__description {
    margin: 0 0 2.5rem 0;
    font-size: 1.25rem;

  }

  .product__specs, .product__variants {
    margin: 0 0 2.5rem 0;
    font-size: 1.25rem;
  }

  .product__specs-item {
    display: grid;
    align-items: end;
    grid-template-columns: 15rem auto;
    line-height: 1.25;
    margin-bottom: .125rem;
  }

  .product__specs-item-label {
    font-size: 1rem;
    color: rgba(158, 159, 163, 1);
  }

  z-index: 20;
  position: relative;
	.product__price {
      font-size: 2rem;
      font-weight: 500;
	  margin-bottom: 2rem;
	}
  .product__actions {
    .button {
      box-shadow: none;
    }
  }
	
  .product__variants_group {
    gap: 1.75rem;

    .button {
      background-color: transparent;
      min-width: 5rem;
      font-weight: 500;
      font-size: .875rem;
    }
  }
`;

// @ts-ignore
export const BlockProduct = observer(function BlockProduct({props, children}) {
	const store = useStore()
	const handleAlignment = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string | null,
	) => {
		setAlignment(newAlignment);
	};
	const [alignment, setAlignment] = React.useState<string | null>(null);

	useEffect(() => {
		if (props.productVariant.length > 0) {
			console.log('more')
			setAlignment(props.productVariant[0].value)
		}
	}, [])

	const handleChange = useCallback((item: Item) => {
		store.cartStore.addItem(item)
	}, []);

	return (
		<BlockProductStyled>
			{props.title ? <h1>{props.title.toLowerCase()}</h1> : null}
			{props.shortDesc ?
				<div className={'product__subtitle'}><DocumentRenderer document={props.shortDesc.document}/>
				</div> : null}
			{props == undefined ?
				<div className={'product__description'}><DocumentRenderer document={props.description.document}/>
				</div> : null}
			<div className={'product__specs'}>
				{props.brand.title ? <div className={'product__specs-item'}>
					<span className={'product__specs-item-label'}>Brand:</span>
					<a className={'product__specs-item-value'}>{props.brand.title}</a>
				</div> : null}
				{props.category ? <div className={'product__specs-item'}>
					<span className={'product__specs-item-label'}>Category:</span>
					<a className={'product__specs-item-value'}>{props.category.title}</a>
				</div> : null}
				{props.series ? <div className={'product__specs-item'}>
					<span className={'product__specs-item-label'}>Series:</span>
					<a className={'product__specs-item-value'}>{props.series}</a>
				</div> : null}
				{props.SkinConcern ? <div className={'product__specs-item'}>
					<span className={'product__specs-item-label'}>Skin Concern:</span>
					<a className={'product__specs-item-value'}>{props.SkinConcern.title}</a>
				</div> : null}
			</div>
			{props.price ? <div className={'product__price'}>${props.price}</div> : null}
			{props.productVariant.length > 0 ?
				<div className={'product__variants'}>
					<ToggleButtonGroup
						value={alignment}
						exclusive
						onChange={handleAlignment}
						aria-label="text alignment"
						className={'product__variants_group'}
					>
						{props.productVariant.length > 0 ? props.productVariant.map((item: { id: React.Key | null | undefined; value: unknown; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: any) =>
							<ToggleButton key={item.id} className={'button button-outline'}
							              value={item.value} aria-label={item.value}>
								{item.title}
							</ToggleButton>
						) : null}
					</ToggleButtonGroup>
				</div> : null}
			<div className={'product__actions'}>
				<AddToCartButton props={props} classes={'button-lg'}/>
			</div>
			{children ? <div className={'content'}>{children}</div> : null}

		</BlockProductStyled>
	)
})