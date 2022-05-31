import { action, computed, makeObservable, observable, toJS } from "mobx";
import fetchGraphQL from "../lib/fetchGraphql";
import { GET_GEN_3 } from "../lib/query";
export interface Item {
    id: String
    sku: String
    series: String
    title: String
    brand: Object
    slug: String
    status: String
    price: number
    date: Date
    image: Object
    shortDesc: Object
    productVariant: Array<object>
    productVariantCount: Array<object>
    description: Object
    benefit: Object
    ingridient: Object
    application: Object
    category: Object
    SkinConcern: Object
    SkinCareItemType: Object
}
export default class CartStore {
    constructor() {
        makeObservable(this)
    }
    @observable isLoading = false
    @observable isLoadingData = false
    @observable cartItems: Array<Item> = []
    @observable cartItemCount: number = 0
    @observable cartItemTotalPrice: number = 0
    @observable orders: Array<object> = []
    @action getOrders = (id: string, variant: string) => {
        fetchGraphQL(GET_GEN_3)
            .then((response) => {
                this.isLoadingData = true
                // @ts-ignore
                this.cartItems.push(response.data.brands, response.data.productCategories, response.data.productSkinCareItemTypes, response.data.productSkinConcerns)
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => this.isLoading = false)
    }
    @action addItem = (item: object) => {
        this.cartItems.push(item)
        this.getCartItemsCount
        this.getAllItems
    }
    @action removeItem = (id: string) => {
        console.log('strore', id)
        // let arr = toJS(this.cartItems)
        // console.log(arr)
        const index = this.cartItems.findIndex(n => n.id === id);
        this.cartItems.splice(index, 1)
        this.getCartItemsCount
        this.getAllItems
    }
    @action inCart = (id: string) => {
         this.cartItems.some(item => item.id === id)
        this.getAllItems
    }

    @action setItemCount(value: number) {
        this.cartItemCount = value
        // console.log(this.cartItemCount)
    }
    @action getItems() {
        return this.cartItems
    }
    @computed get getAllItems() {
        console.log('Длина', this.cartItems.length, 'Items', toJS(this.cartItems), this.getItems())
        return this.cartItems
    }
    @computed get getcartItemTotalPrice() {
        let totalprice = 0

            console.log('totalprice',this.cartItems[0])

        return this.cartItemTotalPrice
    }
    @computed get getCartItemsCount() {
        this.setItemCount(this.cartItems.length)
        this.getcartItemTotalPrice
        return this.cartItemCount
    }
}