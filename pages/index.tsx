import {InferGetServerSidePropsType, InferGetStaticPropsType} from 'next';
import React, {useEffect, useRef, useState} from 'react';
import {query} from '.keystone/api';
import {Lists} from '.keystone/types';

import Section from '../components/Section/Section';
import Block from "../components/Block/Block";
import Intro from "../components/Section/Intro";
import {AngelaIcon} from "../components/Icons";
import nophoto from '../assets/images/images/nophoto.jpg'
import nophoto1 from '../assets/images/images/nophoto.jpg'
import method from '../assets/images/images/method.jpg'
import method1 from '../assets/images/images/method1.jpg'
import method2 from '../assets/images/images/method2.jpg'
import Gallery from "../components/Gallery";
import GalleryCentered from "../components/GalleryCentered";
import {useIntersection} from "../utils";
type Post = {
	id: string;
	title: string;
	slug: string;
};

type Section = {
	id: string;
	subtitle: string;
	title: string;
	type: string;
	url: string;
	image: object;
	items: [];
	background?: object;
	video?: object;
	content?: object;
	pricing?: any;
	collapsable: any;
	page?: object;
	contacts?: any;
};

function order(field: string) {
	return (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[field] > b[field] ? 1 : -1;
}
// Hook

// export default function HomePage({posts, sections, galItems}: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function HomePage(pageProps) {

	const img = [
		nophoto, nophoto1
	]
	const imgs = [
		method, method1, method2
	]
	return (<>
			<Intro/>
			<Section>
				<Block title={'Methodology'}
				       description={<p>If you’ve followed along with the leaks in recent <a>weeks</a>, none of the new
					       features will surprise you. It’s also not a huge surprise that Google is bringing some
					       features from Inbox over to Gmail. What did surprise me while trying out the new service
					       ahead of today’s launch, though, is that some features that didn’t get a lot of attention in
					       the leaks, including the new consistent </p>}>
				</Block>
				<GalleryCentered images={imgs} />
			</Section>
			<Section>
				<Block title={<AngelaIcon/>} description={<p>If you’ve followed along with the leaks in recent <a>weeks</a>, none of the new
					features will surprise you. It’s also not a huge surprise that Google is bringing some
					features from Inbox over to Gmail. What did surprise me while trying out the new service
					ahead of today’s launch, though, is that some features that didn’t get a lot of attention in
					the leaks, including the new consistent </p>}>
				</Block>
				<Gallery images={img} />
			</Section>
		</>


	);
}


export async function getStaticProps() {
	let page = {
		type: 'index',
	}

	return {
		props: {
			page
		}
	};
}