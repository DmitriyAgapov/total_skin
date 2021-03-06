import {action, makeObservable} from 'mobx'

let OrderStore:any

class OrderStore {
	constructor() {
		makeObservable(this)
	}
		title = "Orders"

		@action hydrate = (data) => {
			if (!data) return

			this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
			this.light = !!data.light
		}
}

function createStore() {
	OrderStore = new OrderStore()
	OrderStore.getPosts()
	OrderStore.currentProducts()
}

createStore()
export default OrderStore