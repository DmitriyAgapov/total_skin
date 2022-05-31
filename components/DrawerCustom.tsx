import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ArrowIcon } from "./Icons";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./StoreProvider";
import styled from "styled-components";
import { toJS } from "mobx";
import CustomLink from "./Link";
import BasicModal from "./Modal";
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