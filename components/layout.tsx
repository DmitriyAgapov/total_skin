import React, {useEffect, useState} from "react";
import Footer from './Footer'
import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import {gridColumns} from "./vars";
import {inject, observer} from "mobx-react";
import {useWindowSize} from "../utils";
inject("mainStore")

const Main = styled.main`
 background: var(--color-background-gradient);
	min-height: 100vh;
`;

const Layout  = inject('MenuStore')(observer(({MenuStore, children, page, width}) => {
	MenuStore.Width.setWidth(useWindowSize().windowSize.width)
	// console.log(MenuStore.Width.value)
	// const {width} = useWindowSize();
	// const [ burger, setBurger ] = useState(false);
	// let { sections } = children.prHeaderops
	// useEffect(()=> {
	// 	setBurger((width < 768 && width > 0)  ? true : false)
	// })
	// //



	// @ts-ignore
	// const container = window !== undefined ? () => window().document.body : undefined;
	return (
		<>
			<Head>
				<title>page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
				<Header/>
		
				<Main>{children}</Main>

			<Footer/>
		</>
	)
}))


export default Layout