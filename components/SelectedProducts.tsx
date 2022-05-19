import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button} from "@mui/material";
import  ProductStore  from '../stores/products';

import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import fetchGraphQL from "../lib/fetchGraphql";
import CardGood from "./Cards/CardGood";

import { toJS} from 'mobx';


const SelectedProducts = (props) => {
    useEffect(() => {
        ProductStore.currentProducts();
    },[]);
    const prod = toJS(ProductStore.activeProducts.products)
    return (
        <div className={'block__items grid'}>

            {!ProductStore.isLoading  ?  prod.map((item) => <CardGood key={item.sku} props={item}/>) : "Loading"}
        </div>
    );
}
export default observer(SelectedProducts)