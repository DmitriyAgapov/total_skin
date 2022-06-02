import React, {useEffect, useState} from 'react';
// eslint-disable-next-line import/no-unresolved
import {query} from '.keystone/api';
import Section from '../../components/Section/Section';
import Block from "../../components/Block/Block";
import Selects from "../../components/SelectProduct";
import { observer} from "mobx-react-lite";
import SelectedProducts from "../../components/SelectedProducts";

const PageProduct = observer(function ShopPage(props) {
    return (
        <Section variant={"section-shop section-page"}>
            <Block title={'Shop'}>
                <div className={'block__select'}>
                    <Selects props={props.initialState.filters}/>
                </div>
               <SelectedProducts />
            </Block>
        </Section>
    );
})

export async function getServerSideProps() {
    const products = await query.Product.findMany({
        query: 'id slug brand { title } sku series title category { title } image { width height url } shortDesc { document } SkinConcern { title } SkinCareItemType { title } productVariant { id title value price } description { document } benefit { document } ingridient { document } application { document }',
        // where:  {
        //     brand: {
        //         title: {
        //             // contains: ProductStore.filters[0].brand
        //         }
        //     },
        //     category: {
        //         title: {
        //             // contains: ProductStore.filters[1].category
        //         }
        //     },
        //     SkinConcern: {
        //         title: {
        //             // contains: ProductStore.filters[2].skinConcern
        //         }
        //     },
        //     SkinCareItemType: {
        //         title: {
        //             // contains: ProductStore.filters[3].skinCareItemType
        //         }
        //     },
        // }

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
    let page = {
        title: 'about',
    }
    const filters = {
        brands: brands,
        category: category,
        skinConcern: skinConcern,
        skinCareItemType: skinCareItemType,
        page: page
    }

    return { props: { initialState: { filters: filters , products: products  } }}
}

export default PageProduct