import {InferGetServerSidePropsType, InferGetStaticPropsType} from 'next';
import React, {useEffect, useState} from 'react';
import Section from '../../components/Section/Section';
import Block from "../../components/Block/Block";
import Map from '../../components/Map'
import Box from "../../components/Block/Box";
import FormGetIn from "../../components/FormGetIn";
import {BasicTabs} from "../../components/Tab";
import ProductStore from "../../stores/products";
import {query} from '.keystone/api';
import OrderSummary from "../../components/OrderSummary";

// export default function HomePage({posts, sections, galItems}: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function CartPage({products}) {

	return (<>
			<Section variant={"section-page section-page__cart"}>
				<Block title={'Cart'}
				       description={<div className={'accaunt__msg'}>Do you have an account?<a> Login</a></div>}>

				</Block>
				<div className={'content'}>
                    <BasicTabs order={products} details={<p>test2</p>} shipment={<p>test3</p>} payment={<p>test4</p>}/>
                </div>
				<OrderSummary/>

			</Section>
		</>
	);
}


export async function getStaticProps() {
	const products = await query.Product.findMany({
		query: 'id slug brand { title } sku series title category { title } image { width height url } shortDesc { document } SkinConcern { title } SkinCareItemType { title } productVariant { id title value price } description { document } benefit { document } ingridient { document } application { document }',

	});
	let page = {
		type: 'about',
	}

	return {
		props: {

			products,
			page
		}
	};
}