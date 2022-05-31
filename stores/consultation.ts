import {action, observable,toJS, makeObservable, get} from 'mobx'
import fetchGraphQL from "../lib/fetchGraphql";
import { useMemo } from "react";
import {GET_GEN_3, DB_QUERY} from "../lib/query";
let OrderStore:any

class ConsultationStore {
	constructor() {
		makeObservable(this)
	}
		title = "Products"
		@observable isLoading = false
		@observable posts: Array<any> = []
		@observable filters: Array<object> = [
			{ brand: ''},
			{category: ''},
			{skinConcern: ''},
			{skinCareItemType: ''}
		]
		@observable activeProducts: Array<any>  = []
		@action getPosts = async () => {
			this.isLoading = true
			fetchGraphQL(GET_GEN_3)
			.then((response) => {
				this.posts.push(response.data)
			})
				.catch((error) => {
				console.log(error);
			})
			console.log('posts-store', ConsultationStore.posts[0]?.posts)
			this.isLoading = false
		}
		@action setFilter = (arr:any, value: object) => {
			this.isLoading = true
			this.filters[arr] = value
			this.currentProducts()
			this.isLoading = false
		}
		@action getFilter ()  {
			return this.filters
		}

		@action setFilterZero = () => {
			OrderStore.setFilter(3, {
				skinCareItemType: ''
			});
			ConsultationStore.setFilter(0, {
				brand: ''
			});
			ConsultationStore.setFilter(1, {
				category: ''
			});
			ConsultationStore.setFilter(2, {
				skinConcern: ''
			});
		}

		// @action currentProducts = async (filters: any = this.filters ) => {
		// 	this.isLoading = true
		// 	const { brand } = toJS(filters)
		// 	const vars  = {
		// 		"brand": filters[0].brand,
		// 		"category": filters[1].category,
		// 		"skinConcern": filters[2].skinConcern,
		// 		"skinCareItemType": filters[3].skinCareItemType
		// 	}
		//
		// 	await fetchGraphQL(DB_QUERY, vars)
		// 		.then((response) => {
		// 			this.activeProducts = response.data
		//
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		})
		// 	this.isLoading = false
		// }
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
function initializeStore(initialData = null) {
	const _store = OrderStore ?? new OrderStore()

	if (initialData) {
		_store.hydrate(initialData)
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!OrderStore) OrderStore = _store

	return _store
}
export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
createStore()
export default OrderStore