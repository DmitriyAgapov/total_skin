import React, {useCallback, useState} from 'react';
import {Item} from "../stores/cart";
import {observer} from "mobx-react-lite";
import {useStore} from "./StoreProvider";
import Link from 'next/link'
import {checkAvailability} from "../utils";
import CloseIcon from "@mui/icons-material/Close";

const RemoveToCartButton = observer(function RemoveToCartButton( props:object ) {
  const store = useStore()
  console.log(props.id)
  let items = store.cartStore.cartItems
  const [inCart, setInCart ] = useState()
  const handleChange = useCallback(() => {
    store.cartStore.removeItem(props.id)
    // setInCart(true)
    // if(checkAvailability(items, props.props.id)) {
    // } else {
    //   store.cartStore.addItem(item)
    // }
  }, [inCart]);

  // @ts-ignore
  // if (inCart) return  <Link href={'http://localhost:3000/shop/cart'}>
  //     <a className={`button ${props.classes}  ${inCart ? 'button-secondary incart' : 'button-primary notincart'}`} onClick={(() => handleChange(props))} type={'button'} >{inCart ? 'Checkout' : ' Add to cart'} </a >
  // </Link>
  return <a className={`button ${props.classes}`} onClick={(() => handleChange())} type={'button'} ><CloseIcon fontSize={"large"}/></a >
})

export default RemoveToCartButton