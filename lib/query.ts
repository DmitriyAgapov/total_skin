export const GET_GEN_3 = `query {
  brands {
    id
    title
    slug
    logo {
      url
    }
  }
  productCategories {
    id
    title
    slug
  }
  productSkinConcerns {
    id
    title
    slug    
  }
  productSkinCareItemTypes {
    id
    title
    slug    
  }  
}`;
export const DB_QUERY = `query GetProductsWithFilters(
  $brand: String
  $category: String
  $skinConcerns: String
  $skinConcernsType: String
) {
  products(
    where: {
      brand: { title: { contains: $brand } }
      category: { title: { contains: $category } }
      SkinConcern: { title: { contains: $skinConcerns } }
      SkinCareItemType: { title: { contains: $skinConcernsType } }
    }
  ) {
    id
    slug
    brand {
      title
    }
    sku
    series
    price
    title
    category {
      title
    }
    image {
      width
      height
      url
    }
    shortDesc {
      document
    }
    SkinConcern {
      title
    }
    SkinCareItemType {
      title
    }
    productVariant {
      id
      title
      value
      price
    }
    description {
      document
    }
    benefit {
      document
    }
    ingridient {
      document
    }
    application {
      document
    }
  }
}
`;