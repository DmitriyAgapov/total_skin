import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button} from "@mui/material";
import  ProductStore  from '../stores/products';

import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import styled from "styled-components";

const Selects = observer((props) => {
    const handleChange = (event: SelectChangeEvent) => {
        ProductStore.setFilter(0,{
            brand: event.target.value
        })
    };
    const handleChangeCat = (event: SelectChangeEvent) => {
        ProductStore.setFilter(1,{
            category: event.target.value
        })
    };
    const handleChangeSkinC = (event: SelectChangeEvent) => {
        ProductStore.setFilter(2,{
            skinConcern: event.target.value
        })
    };
    const handleChangeSkinCtype = (event: SelectChangeEvent) => {
        ProductStore.setFilter(3,{
            skinCareItemType: event.target.value
        })
    };
    const FilterBody = styled.div`      
        display: grid;
      align-content: center;
        grid-template-columns: 10rempx repeat(auto-fit, minmax(280px, 1fr));
        flex-flow: row nowrap;
      grid-auto-flow: column;
      gap: 1rem;
      overflow-x: scroll;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        width: 0;
      }
      `
    return (
        <FilterBody>
            <Button onClick={((e) => {
                ProductStore.setFilterZero()
            })}> Clear filters</Button>

                <FormControl sx={{ m: 1, minWidth: 280 }} variant="standard">
                    <InputLabel  className={'select-standart'} id="demo-simple-select-helper-label">Brands</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"

                        value={ProductStore.filters[0].brand}
                        label="Brand"
                        onChange={handleChange}
                    >
                        <MenuItem value="none">
                            <em>None</em>
                        </MenuItem>
                        {props.filterdata.brands.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 280 }} variant="standard">
                    <InputLabel className={'select-standart'} id="demo-simple-select-helper-label1">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label1"
                        // id="demo-simple-select-helper"
                        value={ProductStore.filters[1].category}
                        label="Category"
                        onChange={handleChangeCat}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {props.filterdata.category.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                    </Select>
                </FormControl>
            <FormControl sx={{ m: 1, minWidth: 280 }} variant="standard">
                <InputLabel className={'select-standart'} id="demo-simple-select-helper-label2">Skin Concerns</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label2"
                    // id="demo-simple-select-helper"
                    value={ProductStore.filters[2].skinConcern}
                    label="Skin Concern"
                    onChange={handleChangeSkinC}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.filterdata.skinConcern.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 280 }} variant="standard">
                    <InputLabel className={'select-standart'} id="demo-simple-select-helper-label3">Skin concerns Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label3"
                        // id="demo-simple-select-helper"
                        value={ProductStore.filters[3].skinCareItemType}

                        label="Skin Concern Type"
                        onChange={handleChangeSkinCtype}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {props.filterdata.skinCareItemType.map((item) => <MenuItem value={item.title}>{item.title}</MenuItem>)}
                    </Select>
                </FormControl>
        </FilterBody>
    );
})
export default Selects