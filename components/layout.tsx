import React, { useEffect } from "react";
import Footer from './Footer'
import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import OnlineConsultationFloatButton from "./OnlineConsultationFloatButton";
import { useStore } from "./StoreProvider";
import DrawerCustom from "./DrawerCustom";
import { Backdrop, Button } from "@mui/material";
import BasicModal from "./Modals/Modal";


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
		transform: rotateZ(28deg)  translateX(-50vw);
	  width: 200vw;
		bottom: 0;
		background-size: contain;
		position: relative;
		z-index: -1;
		background-repeat: repeat-x;
	}
`;
const Layout = observer(function Layout({ props, children }) {
	const store = useStore()
	useEffect(() => {
		store.menuStore.setWidth(window.innerWidth)
	}, [store.menuStore.width])

	const handleClose = () => {
		store.menuStore.setCloseDrawer()
	};

	let stripe = [];
	for (let i = 0; i < 100; i++) {
		stripe.push(
			<div className={'bg_row'}></div>)
	}
	// @ts-ignore
	// const container = window !== undefined ? () => window().document.body : undefined;
	return (
		<>
			<Head>
				<title>page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<Main>
				<BasicModal />
				<Backdrop sx={{ color: '#fff', zIndex: 50 }} open={store.menuStore.openDrawer} onClick={handleClose} />
				<DrawerCustom />
				<div className={'bgsvg'}>{stripe}</div>
				{children}
			</Main>
			<OnlineConsultationFloatButton />
			<Footer />
		</>
	)
})


export default Layout