import React, {useCallback, useState} from 'react';
import {Item} from "../stores/cart";
import {observer} from "mobx-react-lite";
import {useStore} from "./StoreProvider";
import Link from 'next/link'
import {checkAvailability} from "../utils";

const AddToCartButton = observer(function AddToCartButton( props:object ) {
  const store = useStore()
  let items = store.cartStore.cartItems
  const [inCart, setInCart ] = useState(checkAvailability(items, props.props.id))
  const handleChange = useCallback((item: Item) => {
    setInCart(true)
      if(checkAvailability(items, props.props.id)) {
    } else {
      store.cartStore.addItem(item)
    }
  }, [items]);

  if (inCart) return  <Link href={'http://localhost:3000/shop/cart'}>
      <a className={`button ${props.classes} ${inCart ? 'button-secondary incart' : 'button-primary notincart'}`} onClick={(() => handleChange(props.props))} type={'button'} >{inCart ? 'Checkout' : ' Add to cart'} </a >
  </Link>
  return <a className={`button ${props.classes} ${inCart ? 'button-secondary incart' : 'button-primary notincart'}`} onClick={(() => handleChange(props.props))} type={'button'} >{inCart ? 'Checkout' : ' Add to cart'} </a >
})

export default AddToCartButton