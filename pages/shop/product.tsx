import {BlockProduct} from "../../components/Block/BlockProduct";
import Section from "../../components/Section/Section";
import GalleryProduct from "../../components/GalleryProduct";
import data from "../../data";
import {ProductTabs} from "../../components/Tab";
import React from "react";

import BreadCrumb from "../../components/BreadCrumbs";

const img = [
    {"image": "/images/cards/2.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/3.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/1.png"},
    {"image": "/images/cards/2.png"},
]
const tempProd = data.Valmont[2]
const Product = () => {
  return (
      <Section variant={'section-page page__product'}>
          <GalleryProduct images={img}/>
          <BreadCrumb/>
          <BlockProduct title={'title'} description={tempProd.shortDesc} props={tempProd} />
          <ProductTabs description={tempProd.description} benefit={tempProd.benefit} application={tempProd.application} ingridients={tempProd.ingridient}/>
      </Section>
  )
}
export default Product