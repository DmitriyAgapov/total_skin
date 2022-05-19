
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, {SyntheticEvent, useState} from "react";
import styled from "styled-components";
import CardGoodOrder from "./Cards/CardGoodOrder";
import CardGood from "./Cards/CardGood";
import ProductStore from "../stores/products";
import FormGetIn from "./FormGetIn";
import FormContactDetails from "./FormContactsDetails";
import FormShipment from "./FormShipment";
import FormShipmentDetails from "./FormShipment";
import FormPayment from "./FormPayment";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const BasicTabsStyled = styled.div`
  display: block;
  grid-template-columns: repeat(12,1fr);
  gap: 2em;
  grid-column: 6/-2;

  z-index: 20;
  position: relative;

  .tabs__header {
    margin-bottom: 1rem;
    padding: 1.5rem 2.5rem;
    background-color: var(--color-background-product);
  }
  .product__tabpanel {
    margin-top: 1rem;
    padding: 1.5rem 2.5rem;
    background-color: var(--color-background-product);
  }
  `

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={'product__tabpanel'}
        >
            {value === index && (
                <div style={{padding: '0rem'}}>
                    {children}
                </div>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function ProductTabs({description,benefit,application,ingridients}) {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BasicTabsStyled>
            <div  className={'tabs__header'}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {description ?   <Tab label="Description" {...a11yProps(0)} /> : null}
                    {benefit ?  <Tab label="Benefit" {...a11yProps(1)} /> : null}
                    {application ? <Tab label="Application" {...a11yProps(2)} /> : null}
                    {ingridients ?    <Tab label="Ingridients" {...a11yProps(3)} /> : null}




                </Tabs>
            </div>
            {description ?      <TabPanel value={value} index={0}>
                {description}
            </TabPanel> : null}
            {benefit ?      <TabPanel value={value} index={1}>
                {benefit}
            </TabPanel>: null}
            {application ?    <TabPanel value={value} index={2}>
                {application}
            </TabPanel> : null}
            {ingridients ?       <TabPanel value={value} index={3}>
                {ingridients}
            </TabPanel> : null}




        </BasicTabsStyled>
    );
}
export function BasicTabs({order,details,shipment,payment}) {
    const [value, setValue] = useState(0);
    console.log(order)
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BasicTabsStyled>
            <div  className={'tabs__header'}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {order ?   <Tab label="Your order" {...a11yProps(0)} /> : null}
                    {details ?  <Tab label="Account details" {...a11yProps(1)} /> : null}
                    {shipment ? <Tab label="Shippment information" {...a11yProps(2)} /> : null}
                    {payment ?    <Tab label="Payment" {...a11yProps(3)} /> : null}
                </Tabs>
            </div>
            {order ?      <TabPanel style={{minHeight: '32rem'}} value={value} index={0}>
                <div className={'tabs__order'}>
                    {order.map((item) => <CardGoodOrder key={item.sku} props={item}/>)}
                </div>
            </TabPanel> : null}
            {details ?      <TabPanel style={{minHeight: '32rem'}} value={value} index={1}>
                <h4>Contact Details</h4>
                <FormContactDetails/>
            </TabPanel>: null}
            {shipment ?    <TabPanel style={{minHeight: '32rem'}} value={value} index={2}>
                <h4>Add address</h4>
                <FormShipmentDetails/>
            </TabPanel> : null}
            {payment ?       <TabPanel style={{minHeight: '32rem'}} value={value} index={3}>
                <h4>Enter payment details</h4>
                <FormPayment/>
            </TabPanel> : null}
        </BasicTabsStyled>
    );
}