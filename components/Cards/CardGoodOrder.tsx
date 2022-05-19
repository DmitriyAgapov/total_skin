import {gridColumns, gridGap} from "../vars";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {FavIcon} from "../Icons";
import { DocumentRenderer } from '@keystone-6/document-renderer';
import CustomLink from "../Link";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const CardGoodOrderStyled = styled.div`
      //background-color: rgba(236, 239, 248, 1);
      background-color:  rgba(236, 239, 248, 0.75);
      grid-column: span 4;
      transition: all  .35s ease-in-out;

  border:  2px dashed var(--color-text-gray);
      display: grid;
  grid-template-columns: 10rem 1fr 6rem 6rem 6rem;
  align-items: center;
  gap: 2rem;
        //grid-template-columns: ${gridColumns} ;
        //gap: ${gridGap};
  .product-image {
    min-height: 60%;
  }
      .imgBg {
        position: relative;
 
        span {
          position: revert !important;
        }
      }

      position: relative;
      padding: 0.25rem 2rem;

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
        margin-bottom: 1rem;
      }
      .product__price {
        color: var(--color-primary);
        font-size: 1.5rem;
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
        transition: opacity  .35s ease-in-out;
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

    const handleChange = (event: SelectChangeEvent) => {
        setAmount(event.target.value as string);
    };
    return (
        <CardGoodOrderStyled>
            <div className={'product-image'}>
                <Image objectFit={"contain"} src={props.props.image.url} width={480} height={320}/>
            </div>
            <div className={'product__text'}>
            {props.props.brand ? <div className={'product__uptitle'}>{props.props.brand.title}</div> : null}
            {props.props.title ? <h2>{props.props.title.toLowerCase()}</h2> : null}
            </div>
            <div className={'product__counter'}>
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
            </div>
            <div className={'product__price'}>
                550$
            </div>
            <div className={'product__actions'}>
                <CustomLink href={'/shop/product'} type={'remove'} text={<CloseIcon fontSize={"large"}/>} />
            </div>
        </CardGoodOrderStyled>
    )
}
export default CardGoodOrder