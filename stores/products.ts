import {action, observable, computed, makeObservable} from 'mobx'
import fetchGraphQL from "../lib/fetchGraphql";
import {GET_GEN_3, DB_QUERY} from "../lib/query";

export default class ProductStore {
    constructor() {
        makeObservable(this)
    }
    title = "Products"
    @observable isLoading = false
    @observable isLoadingData = true
    @observable posts: Array<any> = []
    @observable filters:  Array<any> = []
    @observable selectedFilters:  Array<any> = [
        { brand: ''},
        {category: ''},
        {skinConcern: ''},
        {skinCareItemType: ''}
    ]

    @observable activeProducts: Object = {}
    @action getFilters =  () => {
         fetchGraphQL(GET_GEN_3)
            .then((response) => {
                this.isLoadingData = true
                // @ts-ignore
                this.filters.push(response.data.brands, response.data.productCategories, response.data.productSkinCareItemTypes,response.data.productSkinConcerns )


            })
            .catch((error) => {
                console.log(error);
            }).finally(() =>   this.isLoading = false)

    }
    @action setFilter = (arr: any, value: object) => {
        this.setLoading(true)
        this.selectedFilters[arr] = value
        this.productsAll
        this.setLoading(false)

    }
    @action setLoading(value:boolean) {
        this.isLoading = value
    }
    @action setLoadingData(value:boolean) {
        this.isLoadingData = value
    }

    @action getFilter() {
        return this.filters
    }
    @action setProducts(data:any) {
        this.setLoading(true)
        this.activeProducts = data
        this.productsAll
        this.setLoading(false)
    }

    @action setFilterZero = () => {
        this.setLoading(true)

        this.setFilter(0, {
            brand: ''
        });
        this.setFilter(1, {
            category: ''
        });
        this.setFilter(2, {
            skinConcern: ''
        });
        this.setFilter(3, {
            skinCareItemType: ''
        });
        this.productsAll
        this.setLoading(false)
    }
    @action setProduct = (data:any) => {
        console.log(data)
    }
    @action getCurrentProducts =  () => {
        const vars = {
            "brand": this.selectedFilters[0].brand,
            "category": this.selectedFilters[1].category,
            "skinConcern": this.selectedFilters[2].skinConcern,
            "skinCareItemType": this.selectedFilters[3].skinCareItemType
        }
        fetchGraphQL(DB_QUERY, vars)
            .then((response) => {
                this.isLoadingData = true
                // console.log(vars)
                // @ts-ignore
                this.activeProducts = response.data.products as object
                // console.log('Store-activeProducts', toJS(this.activeProducts))

            })
            .catch((error) => {
                console.log(error);
            }).finally(() =>  this.isLoadingData = false)
    }
    @action getProducts() {
        return this.activeProducts
    }
	@computed get filtersAll() {
		return  this.getFilters()
	}
    @computed get productsAll() {
        this.setLoading(true)
		return this.getCurrentProducts()
	}

}
