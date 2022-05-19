import  ProductStore  from '../../stores/products';
import React, {useEffect, useState} from 'react';
// eslint-disable-next-line import/no-unresolved
import {query} from '.keystone/api';
// import {Lists} from '.keystone/types';
import Section from '../../components/Section/Section';
import Block from "../../components/Block/Block";
// import photo from '../../assets/images/images/cards/1.png'
// import photo2 from '../../assets/images/images/cards/2.png'
// import photo3 from '../../assets/images/images/cards/3.png'
// import CardGood from "../../components/Cards/CardGood";
import Selects from "../../components/SelectProduct";
import fetchGraphQL from "../../lib/fetchGraphql";
import SelectedProducts from "../../components/SelectedProducts";


function order(field: string) {
    return (a: { [x: string]: number; }, b: { [x: string]: number; }) => a[field] > b[field] ? 1 : -1;
}

// Hook

// export default function HomePage({posts, sections, galItems}: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function ShopPage({filters}) {

    return (
        <Section variant={"section-page"}>
            <Block title={'Shop'}>
                <div className={'block__select'}>
                    <Selects filterdata={filters}/></div>
               <SelectedProducts />
            </Block>
        </Section>

    );
}


export async function getStaticProps() {
    const products = await query.Product.findMany({
        query: 'id slug brand { title } sku series title category { title } image { width height url } shortDesc { document } SkinConcern { title } SkinCareItemType { title } productVariant { id title value price } description { document } benefit { document } ingridient { document } application { document }',
        where:  {
            brand: {
                title: {
                    contains: ProductStore.filters[0].brand
                }
            },
            category: {
                title: {
                    contains: ProductStore.filters[1].category
                }
            },
            SkinConcern: {
                title: {
                    contains: ProductStore.filters[2].skinConcern
                }
            },
            SkinCareItemType: {
                title: {
                    contains: ProductStore.filters[3].skinCareItemType
                }
            },
        }

    });
    const brands = await query.Brand.findMany({
        query: 'id slug title',
    });
    const category = await query.ProductCategory.findMany({
        query: 'id slug title',
    });
    const skinConcern = await query.ProductSkinConcern.findMany({
        query: 'id slug title',
    });
    const skinCareItemType = await query.ProductSkinCareItemType.findMany({
        query: 'id slug title',
    });
    const filters = {
        brands: brands,
        category: category,
        skinConcern: skinConcern,
        skinCareItemType: skinCareItemType
    }
    let page = {
        type: 'about',
    }

    return {
        props: {
            filters,
            products,
            page
        }
    };
}