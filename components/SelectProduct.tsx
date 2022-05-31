import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Button} from "@mui/material";

import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {inject} from "mobx-react";
import {toJS} from "mobx";
import {useCallback, useEffect} from "react";
import {useStore} from "./StoreProvider";
// import {ProductStore} from "../stores/products";
const FilterBody = styled.div`
      display: grid;
      align-content: center;
      grid-template-columns: 10rempx repeat(auto-fit, minmax(280px, 1fr));
      flex-flow: row nowrap;
      grid-auto-flow: column;
      gap: 1rem;
      overflow-x: auto;
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        width: 0;
      }
  margin-bottom: 2rem;
    `
const Selects = observer(function Selects({props, filterdata}) {
    const store = useStore()

    const handleChange = (event: SelectChangeEvent) => {
        store.productStore.setFilter(0, {
            brand: event.target.value
        })
    };
    const handleChangeCat = (event: SelectChangeEvent) => {
        store.productStore.setFilter(1, {
            category: event.target.value
        })
    };
    const handleChangeSkinC = (event: SelectChangeEvent) => {
        store.productStore.setFilter(2, {
            skinConcern: event.target.value
        })
    };
    const handleChangeSkinCtype = (event: SelectChangeEvent) => {
        store.productStore.setFilter(3, {
            skinCareItemType: event.target.value
        })
    };


    return store.productStore.isLoadingData ? 'Loading' : (
        <FilterBody>
            <Button onClick={((e) => {
                e.preventDefault()
                store.productStore.setFilterZero()
            })}> Clear filters</Button>


            <FormControl sx={{m: 1, minWidth: 280}} variant="standard">
                <InputLabel className={'select-standart'} id="demo-simple-select-helper-label">Brands</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    value={store.productStore.selectedFilters[0].brand}
                    label="Brand"
                    onChange={handleChange}
                >
                    {/*<MenuItem value="none">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    {props.brands.map((item) => <MenuItem value={item.title} key={item.id}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 280}} variant="standard">
                <InputLabel className={'select-standart'} id="demo-simple-select-helper-label1">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label1"
                    // id="demo-simple-select-helper"
                    value={store.productStore.selectedFilters[1].category}
                    label="Category"
                    onChange={handleChangeCat}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    {props.category.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 280}} variant="standard">
                <InputLabel className={'select-standart'} id="demo-simple-select-helper-label2">Skin
                    Concerns</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label2"
                    // id="demo-simple-select-helper"
                    value={store.productStore.selectedFilters[2].skinConcern}
                    label="Skin Concern"
                    onChange={handleChangeSkinC}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    {props.skinConcern.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 280}} variant="standard">
                <InputLabel className={'select-standart'} id="demo-simple-select-helper-label3">Skin concerns
                    Type</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label3"
                    // id="demo-simple-select-helper"
                    value={store.productStore.selectedFilters[3].skinCareItemType}

                    label="Skin Concern Type"
                    onChange={handleChangeSkinCtype}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    {props.skinCareItemType.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>


        </FilterBody>
    );
})
export default Selects

