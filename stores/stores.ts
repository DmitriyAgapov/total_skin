import ProductStore from "./products";
import MenuStore from "./options";
import CartStore from "./cart";

export default class RootStore {
    menuStore: MenuStore;
    productStore: ProductStore;
    cartStore: CartStore;
    constructor() {
        this.menuStore = new MenuStore()
        this.productStore = new ProductStore()
        this.cartStore = new CartStore()
    }
    hydrate = (data) => {
        if (!data) return
        this.productStore.productsAll
        this.productStore.filtersAll
        this.cartStore.getAllItems
        if(this.productStore.activeProducts) {
            this.productStore.setProducts(data.products)
        }
    }
}
