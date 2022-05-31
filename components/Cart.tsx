import {observer} from "mobx-react-lite";
import {useStore} from "./StoreProvider";
import {useEffect} from "react";
import {SelectChangeEvent} from "@mui/material/Select";

export const CartCounter = observer(function CartCounter(props) {
    const store = useStore()
    return (
        <span className={'cart__counter'}>
            {store.cartStore.cartItemCount}
        </span>
    )
})

export const Cart = observer(function Cart(props) {
    const store = useStore()
    return (
        <>
            sda
        </>
    )
})
