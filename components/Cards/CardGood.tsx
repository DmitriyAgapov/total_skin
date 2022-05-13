import {gridColumns, gridGap} from "../vars";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {FavIcon} from "../Icons";

const CardGoodStyled = styled.div`
      //background-color: rgba(236, 239, 248, 1);
      background-color:  rgba(236, 239, 248, 0.75);
      grid-column: span 4;
      transition: all  .35s ease-in-out;
      //display: grid;
        //grid-template-columns: ${gridColumns} ;
        //gap: ${gridGap};
  .product-image {
    min-height: 60%;
  }
      .imgBg {
        position: absolute;
        top: 0;
        
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        span {
          position: revert !important;
        }
      }

      position: relative;
      padding: 2rem 2rem 4rem;

      h2 {
        color: var(--color-primary);
        font-weight: 300;
        font-size: 1.75rem;
        line-height: 2.375rem;
        margin-bottom: 0;
        display: block;
        text-transform: capitalize;
        border-bottom: 1px solid var(--color-primary);
        grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `span 4` : `span 4`)};
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
        font-size: .875rem;
      }
      .product__actions {
        position: absolute;
        opacity: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: .75rem;
        flex-flow: column;
        transition: opacity  .35s ease-in-out;
      }
      &:hover {
        background-color: #6D769B;
        .product__actions {
      
          opacity:1;
         
        }
        .product__description , .product__uptitle, h2,   .product-fav svg path{
          color: #fafafa;         
          fill: #fafafa;    
          border-color: #fafafa;
        }

      }
  .product-fav {
    position: absolute;
    top: 2rem;
    z-index: 100;
    right: 2rem;
    svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
    `;

const CardGood = (props) => {

    return (
        <CardGoodStyled>
            <div className={'product-image'}>
                <Image objectFit={"contain"} src={props.props.image} width={480} height={320}/>
            </div>
            {props.props.brand ? <div className={'product__uptitle'}>{props.props.brand}</div> : null}
            {props.props.title ? <h2>{props.props.title.toLowerCase()}</h2> : null}
            {props.props.shortDesc ? <div className={'product__description'}>{props.props.shortDesc}</div> : null}
            <a href={'#'} className={'product-fav'}>
                <FavIcon />
            </a>
            <div className={'product__actions'}>

                <Link href={'/shop/product'}>
                    <a className={'button button-primary'}>More</a>
                </Link>
                <Link href={'/shop/product'}>
                    <a className={'button button-secondary'}>Add to card</a>
                </Link>
            </div>
        </CardGoodStyled>
    )
}
export default CardGood