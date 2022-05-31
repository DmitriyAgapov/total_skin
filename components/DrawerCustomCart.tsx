import * as React from 'react';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./StoreProvider";
import CardGoodOrder from "./Cards/CardGoodOrder";
import styled from "styled-components";
import ListItem from '@mui/material/ListItem';

const DrawerCustomCart = observer(function DrawerCustomCart(props) {
    const store = useStore();

    let cartItem: any = undefined;
    useEffect(() => {
        cartItem = store.cartStore.getAllItems;
        console.log('tut', cartItem);
    }, [store.cartStore.cartItemCount]);

    return store.cartStore.cartItems.length > 0 ?
        store.cartStore.cartItems.map((item) => <ListItem key={item.id}> <CardGoodOrder type={"drawer"}
            variant={'drawer'}
            key={item.id}
            props={item} /></ListItem>) : (
            <>Нетю ничего</>
        );

});
export default DrawerCustomCart;