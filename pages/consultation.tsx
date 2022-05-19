import {InferGetServerSidePropsType, InferGetStaticPropsType} from 'next';
import React, {useEffect, useState} from 'react';
import {query} from '.keystone/api';
import {Lists} from '.keystone/types';
import Section from '../components/Section/Section';
import Block from "../components/Block/Block";
import nophoto from '../assets/images/images/nophoto.jpg'
import nophoto1 from '../assets/images/images/nophoto.jpg'
import method from '../assets/images/images/method.jpg'
import method1 from '../assets/images/images/method1.jpg'
import method2 from '../assets/images/images/method2.jpg'
import Map from '../components/Map'
import Box from "../components/Block/Box";
import {FormControl, OutlinedInput} from "@mui/material";
import FormGetIn from "../components/FormGetIn";
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
export default function ConsultationPage() {

	const img = [
		nophoto, nophoto1
	]
	const imgs = [
		method, method1, method2
	]
	return (<>
			<Section variant={"section-page section-page__contacts"}>
				<Block title={'Online consultation'}
					   description={<dl><dt>Open</dt>
						   <dd>Monday - Saturday 10am - 7pm</dd>
						   <dt>Phone</dt>
						<dd>+1 123-333-3243</dd>
						   <dt>Email</dt>
						   <dd><a href="mailto:info@totalskin.com">info@totalskin.com</a></dd>
					   </dl>}>

				</Block>
				<Box title={'Get in touch'} variant={'contacts'} description={  <p>Please fill out this quick form and we'll get back to you within few hours!</p>}>
					<FormGetIn/>
				</Box>
				<Map />
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