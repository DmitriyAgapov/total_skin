import {gridColumns, gridGap} from "../vars";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import defimg from '../../assets/images/defcartimg.png'
import Link from "next/link";
import {FavIcon} from "../Icons";
import {DocumentRenderer} from '@keystone-6/document-renderer';
import CustomLink from "../Link";
import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {SelectChangeEvent} from "@mui/material/Select";
import {toJS} from "mobx";
import RemoveToCartButton from "../RemoveToCartButton";

const CardGoodOrderStyled = styled.div.attrs(props => ({
	// variant: "drawer",
	// cols: props.variant = "drawer" ? '1fr 2rem 3rem 2rem' : 'auto',
	type: "drawer",
	gridcol: "3rem 1fr 5rem 2rem",
	gap: '1rem'
}))`
  //background-color: rgba(236, 239, 248, 1);
  padding: 1.5rem;
  background-color: rgba(236, 239, 248, 0.75);
  grid-column: span 4;
  transition: all .35s ease-in-out;
  border: 2px dashed var(--color-text-gray);
  display: grid;
  grid-template-columns: ${props => props.gridcol};
  align-items: center;
  gap: ${props => props.gap || '2rem'};

  .product-image {
    min-height: 60%;
  }

  .product__link-title {
    font-size: 1.25rem;
    text-transform: capitalize;
    text-decoration: none;
    line-height: 1;
    //border-bottom: 1px solid var(--color-primary-80);
    color: var(--color-primary);

    &:hover, &:active {
      color: var(--color-primary-40);
      border-bottom: 1px solid currentColor;
    }
  }

  .imgBg {
    position: relative;

    span {
      position: revert !important;
    }
  }

  position: relative;
  flex: 1;
  padding: 1.25rem 1.5rem;

  h2 {
    color: var(--color-primary);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2;
    margin-top: 1rem;
    margin-bottom: 0;
    display: block;
    text-transform: capitalize;
    //border-bottom: 1px solid var(--color-primary);
      // grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `span 4` : `span 4`)};
  }

  .product__description {
    grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `6/span 7` : `span 8`)};
    //font-size: 125%;
    padding: 0.75rem 0 0;
    font-size: 1rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  .product__uptitle {
    color: #9E9FA3;
    font-size: 1rem;

  }

  .product__price {
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .product__actions {
    position: relative;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: .75rem;
    flex-flow: column;
    transition: opacity .35s ease-in-out;

    a {
      height: initial;
      display: flex;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      min-height: initial;
      min-width: initial;
      width: 3rem;
      height: 3rem;

      &:hover {
        background-color: var(--color-primary);
        border-radius: 50%;
        opacity: 0.5;
        transform: scale3d(0.7, 0.7, 0.7) rotateZ(37deg);
      }
    }
  }

  &:hover {
    border-color: var(--color-primary);
    //.product__actions {
    //
    //  opacity:1;
    // 
    //}
    //.product__description , .product__uptitle, h2,   .product-fav svg path{
    //  color: #fafafa;         
    //  fill: #fafafa;    
    //  border-color: #fafafa;
    //}

  }

`;

const CardGoodOrder = (props) => {
	const [amount, setAmount] = React.useState('');
	console.log('cardProps', props.props.id)
	const handleChange = (event: SelectChangeEvent) => {
		setAmount(event.target.value as string);
	};
	return (
		<CardGoodOrderStyled type={props.type || "default"}>
			<div className={`product-image  ${props.props.variant !== 'drawer' ? 'product-image-drawer' : ''}`}>
				<Image objectFit={"contain"} src={props.props.props?.image ? props.props.image.url : defimg}
				       width={props.props.variant == "drawer" ? 80 : 480}
				       height={props.props.variant == "drawer" ? 60 : 320}/>
			</div>
			<div className={'product__text'}>
				{props.props.brand ?
					<div className={'product__uptitle'}>{props.props.brand.title}</div> : null}
				{props.props.title ? <Link href={`/shop/${props.props.slug}`}><a
					className={'product__link-title'}>{props.props.title.toLowerCase()}</a></Link> : null}
			</div>
			{props.qty ? <div className={'product__counter'}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Qty</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={amount}
						label="Qty"
						onChange={handleChange}
					>
						<MenuItem value={1}>Ten</MenuItem>
						<MenuItem value={2}>Twenty</MenuItem>
						<MenuItem value={3}>Thirty</MenuItem>
						<MenuItem value={4}>Thirty</MenuItem>
						<MenuItem value={5}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div> : null}
			<div className={'product__price'}>
				${props.props.price}
			</div>
			<div className={'product__actions'}>
				<RemoveToCartButton  id={props.props.id} classes={'button-remove'} text={<CloseIcon fontSize={"large"}/>}/>
			</div>
		</CardGoodOrderStyled>
	)
}
export default CardGoodOrder