import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DrawerCustomCart from './DrawerCustomCart';
import styled from "styled-components";
import CustomLink from './Link';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from './StoreProvider';
import CardGoodOrder from './Cards/CardGoodOrder';
const DrawerBoxStyled = styled.div`
  // .drawer__custom {
  //   z-index: 120;
  //   position: relative;
  // }
  // .drawer__custom-wrapper {
  //   position: relative;
  //   padding: 7rem 1rem 1rem;
  //   flex: 1;
  // }

  // .drawer__custom-items {
  //   flex: 1;
  //   position: relative;
  //   max-height: 69vh;
  //   overflow: hidden;
  // }
  .drawer__custom-total {
    display: flex;
    max-width: 20rem;
    justify-self: center;
    justify-content: space-between;
    width: 100%;
  }
  .drawer__custom-actions {
    display: grid;   
    gap: 2rem 0;
    flex: 1;
    width: 512px;
    padding:  2rem;
    right: 0;
    bottom: 0;
    height: 10rem;
    position: fixed;
    background-color: var(--color-background);
  .button {
    justify-self: center;
  }
    .drawer__custom-total {
      border-bottom: 1px solid currentColor;
      align-items: baseline;
    }
    .drawer__custom-total--title {
      font-size: 1.25rem;
      color: var(--color-primary);
    }
    .drawer__custom-total--value {
      font-size: 1.5rem;
      font-weight: 700;
    }
    //width: 100%;
  }
`
const CartItemsStyled = styled.div`
  .cart_is_empty {
      display: flex;
      height: 90vh;
  }
    .cart_is_empty__msg {
      margin:auto;
          border: 2px dashed var(--color-primary-90);
          padding: 2rem;
          flex: .8;
    }
`
const DrawerScrollPanelAction = observer(function DrawerScrollPanelAction(props) {
  const store = useStore();

  let cartItem: any = undefined;
  useEffect(() => {
    cartItem = store.cartStore.getAllItems;
    // console.log('tut', cartItem);
  }, [store.cartStore.cartItemCount]);


  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => store.cartStore.getAllItems);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(store.cartStore.getAllItems);
  }, [value, setMessages]);
  console.log('msg', messages);

  return (
    <Box sx={{ pt: 10, }} ref={ref}>
      <CartItemsStyled>
        <List className={`${store.cartStore.cartItems.length > 0 ? '' : 'cart_is_empty'}`}>
          {store.cartStore.cartItems.length > 0 ?
            store.cartStore.cartItems.map((item, index) => <ListItem key={`${index}-${item.id}`}><CardGoodOrder type={"drawer"}
              variant={'drawer'}
              key={item.id}
              props={item} /></ListItem>) : (
              <li className={'cart_is_empty__msg'}>Cart is empty</li>
            )}

        </List>
      </CartItemsStyled>
      <Paper sx={{ position: 'fixed', bottom: 0, right: 0 }} elevation={3} style={{ width: '512px' }}>
        <DrawerBoxStyled>
          <BottomNavigation className={'drawer__custom-actions'}>
            <div className={'drawer__custom-total'}>
              <span className="drawer__custom-total--title">Total</span>
              <span className="drawer__custom-total--value">$500</span>
            </div>
            <CustomLink href={'/shop/cart'} type={'primary button-block'} className={''} text={'Checkout'} />

          </BottomNavigation>
        </DrawerBoxStyled>
      </Paper>
    </Box >
  );
})

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

export default DrawerScrollPanelAction