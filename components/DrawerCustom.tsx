import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { observer } from "mobx-react-lite";
import { useStore } from "./StoreProvider";
import styled from "styled-components";

import DrawerScrollPanelAction from './DrawerScrollPanelAction';

const drawerWidth = 512;
const DrawerStyled = styled.div`
  z-index: 9;
  flex: 1;
  display: flex;
  flex-flow: column;
  position: relative;
  background-color: whitesmoke;
  opacity: 1;
`

const DrawerCustom = observer(function DrawerCustom({ props, children }) {
  const store = useStore()
  return (
    // <DrawerBoxStyled>
    <Drawer
      variant="persistent"
      style={{ zIndex: 120, position: 'relative' }}
      anchor={"right"}
      className={'drawer__custom'}
      hideBackdrop={false}
      onBackdropClick={event => store.menuStore.setClose()}
      open={store.menuStore.openDrawer}
      onClose={() => store.menuStore.setCloseDrawer()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <DrawerScrollPanelAction />
      {/* {drawer} */}
    </Drawer>

    // </DrawerBoxStyled>
  );
})

export default DrawerCustom