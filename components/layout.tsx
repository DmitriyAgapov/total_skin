import React, {useEffect, useState} from "react";
import Footer from './Footer'
import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import {gridColumns} from "./vars";
import {inject, observer} from "mobx-react";
import {useWindowSize} from "../utils";
inject("mainStore")
import svgbg from  './images/bgsvg.png';
const Main = styled.main`
 background: var(--color-background-gradient);
	min-height: 100vh;
	//overflow: hidden;
	position: relative;
	padding-bottom: 6rem;
	> *:last-child {
		margin-bottom: 0;
	}
	.bgsvg {
		display: grid;
		grid-template-rows: repeat(100,10rem);
		gap: 10rem 0;
		max-width: 100vw;
		min-height: 100vh;
		top: 0;
		right: 0;
		left: 0;
		overflow: hidden;
		bottom: 0;
		position: absolute;
		z-index: -1;
	}
	.bgsvg .bg_row {
		background-image: url('/images/bgsvg.svg');
		top: 0;
		right: 0;
		left: 0;
		transform: rotateZ(28deg) translateX(-100vw);
		
		bottom: 0;
		background-size: contain;
		position: relative;
		z-index: -1;
		background-repeat: repeat-x;
	}
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
	let stripe = [];

	for(let i = 0; i < 100; i++) {
		stripe.push(
			<div className={'bg_row'}></div>)
	}


	// @ts-ignore
	// const container = window !== undefined ? () => window().document.body : undefined;
	return (
		<>
			<Head>
				<title>page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>

			<Header/>
				<Main><div className={'bgsvg'}>{stripe}</div> {children}</Main>

			<Footer/>
		</>
	)
}))


export default Layout