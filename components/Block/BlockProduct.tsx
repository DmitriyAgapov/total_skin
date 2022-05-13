import React from "react";
// @ts-ignore
import styled from "styled-components";
import {gridColumns, gridGap} from "../vars";
import Link from "next/link";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BasicTabs from "../Tab";

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
    grid-template-columns: 15rem 6rem;
    line-height: 1.25;
    margin-bottom: .125rem;
  }
  .product__specs-item-label {
    font-size: 1rem;
    color: rgba(158, 159, 163, 1);
  }
  z-index: 20;
  position: relative;
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

export const BlockProduct = ({children = null, title = null, description = null, gallery = null, props}) => {
    // console.log(gallery)
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <BlockProductStyled>
            {title ? <h1>{props.title.toLowerCase()}</h1> : null}
            {props.shortDesc ? <div className={'product__subtitle'}>{props.shortDesc}</div> : null}
            {props.description ? <div className={'product__description'}>{props.description}</div> : null}
            <div className={'product__specs'}>
                {props.brand ? <div className={'product__specs-item'}>
                    <span className={'product__specs-item-label'}>Brand:</span>
                    <a className={'product__specs-item-value'}>{props.brand}</a>
                </div>: null}
                {props.category ? <div className={'product__specs-item'}>
                    <span className={'product__specs-item-label'}>Category:</span>
                    <a className={'product__specs-item-value'}>{props.category}</a>
                </div>: null}
                {props.series ? <div className={'product__specs-item'}>
                    <span className={'product__specs-item-label'}>Series:</span>
                    <a className={'product__specs-item-value'}>{props.series}</a>
                </div>: null}
                {props.SkinConcern ? <div className={'product__specs-item'}>
                    <span className={'product__specs-item-label'}>Skin Concern:</span>
                    <a className={'product__specs-item-value'}>{props.SkinConcern}</a>
                </div>: null}

            </div>
            <div className={'product__variants'}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    className={'product__variants_group'}
                >
                    <ToggleButton  className={'button button-outline'} value="75" aria-label="75 ml">
                        75 ml
                    </ToggleButton>
                    <ToggleButton className={'button button-outline'} value="60" aria-label="60 ml">
                       60 ml
                    </ToggleButton>

                </ToggleButtonGroup>
            </div>
            <div className={'product__actions'}>
                <Link href={'/shop/product'}>
                    <a className={'button button-primary button-lg'}>Add to cart</a>
                </Link>
            </div>


            {children ? <div className={'content'}>{children}</div> : null}

        </BlockProductStyled>
    )
}
