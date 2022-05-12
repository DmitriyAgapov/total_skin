import {InferGetServerSidePropsType, InferGetStaticPropsType} from 'next';
import React, {useEffect, useState} from 'react';
import {query} from '.keystone/api';
import {Lists} from '.keystone/types';
import Section from '../components/Section/Section';
import Block from "../components/Block/Block";
import photo from '../assets/images/images/cards/1.png'
import photo2 from '../assets/images/images/cards/2.png'
import photo3 from '../assets/images/images/cards/3.png'
import nophoto1 from '../assets/images/images/nophoto.jpg'
import method from '../assets/images/images/method.jpg'
import method1 from '../assets/images/images/method1.jpg'
import method2 from '../assets/images/images/method2.jpg'
import CardGood from "../components/Cards/CardGood";
import {excelTojs} from "../utils";

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
	style: object;
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
export default function AboutPage() {

	const cards = [ {

	},
		photo, photo2, photo3
	]

	return (<>
			<Section variant={"section-page"}>
				<Block title={'Shop'}>
					<div className={'block__items'}>
						<CardGood />
					</div>
				</Block>
				<a onClick={excelTojs('../files/test.xls')}>Excel</a>
			</Section>
		</>
	);
}


export async function getStaticProps() {
	let page = {
		type: 'about',
	}

	return {
		props: {
			page
		}
	};
}