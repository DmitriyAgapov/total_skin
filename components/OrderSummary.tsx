import Box from "./Block/Box";
import React from "react";
import styled from "styled-components";
import CustomLink from "./Link";

const OrderSummaryStyled = styled.aside`
   
    grid-column: 11/14;
  > div {
    background-color: #535E8B;
    border-radius: 0;
  }
    h2  {
      font-size: 1.75rem;
      color: #FAFAFA;
      font-weight: 400;
    }
  .order__details, .order__details-actions {
    margin-top: 2rem;
  }
  .order__details-item, .order__details-total  {
    color: #fafafa;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    
  }
  .order__details-actions {
    display: grid;
    gap: 1rem;
    .button {
      display: block;
      max-width: initial;
      box-shadow: none;
    }
  }
  
`

const OrderSummary = () => {
    return (
        <OrderSummaryStyled>
            <Box title={'Order Summary'}>
                <div className={'order__details'}>
                    <div className={'order__details-item'}>
                        <span className={'order__details-item--title'}>2 items</span>
                        <span className={'order__details-item--value'}>$550</span>
                    </div>
                    <div className={'order__details-item'}>
                        <span className={'order__details-item--title'}>Consultation</span>
                        <span className={'order__details-item--value'}>$500</span>
                    </div>
                    <div className={'order__details-item'}>
                        <span className={'order__details-item--title'}>Delivery</span>
                        <span className={'order__details-item--value'}>$500</span>
                    </div>
                </div>
                <div className={'order__details-total'}>
                    <span className={'order__details-total--title'}>Total</span>
                    <span className={'order__details-total--value'}>$500</span>
                </div>
                <div className={'order__details-actions'}>
                    <CustomLink href={'/shop/product'} type={'primary'} text={'Checkout'} />
                    <CustomLink href={'/shop/product'} type={'outline'} text={'Continue shopping'} />

                </div>
            </Box>
        </OrderSummaryStyled>
    )
}
export default OrderSummary