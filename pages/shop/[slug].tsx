import {BlockProduct} from "../../components/Block/BlockProduct";
import Section from "../../components/Section/Section";
import GalleryProduct from "../../components/GalleryProduct";

import {ProductTabs} from "../../components/Tab";
import React, {useCallback} from "react";
import {query} from '.keystone/api';
import BreadCrumb from "../../components/BreadCrumbs";
import {GetServerSideProps} from "next";
import {useStore} from "../../components/StoreProvider";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const img = [
    {"image": "/images/cards/2.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/3.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/2.png"},
]

const ProductPage = (props) => {

    let datas:any = undefined
    useCallback(()  => {
        datas = toJS(props)
        return console.log(datas)
    }, [])
    const data = props.initialState.product[0]
  return (
      <Section variant={'section-page page__product'}>
          <GalleryProduct images={img}/>
          <BreadCrumb/>
          <BlockProduct props={data} />
          <ProductTabs props={data}/>
      </Section>
  )
}


    export async function getServerSideProps({params: {slug}}: GetServerSideProps) {
        const product =  await query.Product.findMany({
            where: { slug:  { equals : slug as string }},
            query: 'id sku slug series title brand {   title   id   slug } price image {   url } shortDesc {   document } productVariant {   id   title   value   price } description {   document } benefit {   document } ingridient {   document } application {   document } category {   id   slug   title } SkinConcern {   id   title   slug } SkinCareItemType {   id   title   slug } productVariant {   price }  ',
        });
        // const categories = await query.TruckCategory.findMany({
        //     query: 'id url title imageSvg { url }  item (take:8){id sku title inStock url photoCloud {cloudImg { publicUrl } } category  { id title url} weightLoad wheelType kmuType { title } engineType { title power } photo { image {  url } altText } content { document} price}'
        // })
        // const title = await trucks[0].category.title
        return { props: { initialState: { product }}};
    }

export default ProductPage