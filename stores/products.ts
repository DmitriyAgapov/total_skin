import {action, observable, computed, runInAction,toJS, makeObservable, get} from 'mobx'

import fetchGraphQL from "../lib/fetchGraphql";
import { useMemo } from "react";
import {GET_GEN_3, DB_QUERY} from "../lib/query";
let ProductStore:any
class ProdStore {
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
			console.log('posts-store', ProductStore.posts[0]?.posts)
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
			ProductStore.setFilter(3, {
				skinCareItemType: ''
			});
			ProductStore.setFilter(0, {
				brand: ''
			});
			ProductStore.setFilter(1, {
				category: ''
			});
			ProductStore.setFilter(2, {
				skinConcern: ''
			});
		}

		@action currentProducts = async (filters: any = this.filters ) => {
			this.isLoading = true
			const { brand } = toJS(filters)
			const vars  = {
				"brand": filters[0].brand,
				"category": filters[1].category,
				"skinConcern": filters[2].skinConcern,
				"skinCareItemType": filters[3].skinCareItemType
			}

			await fetchGraphQL(DB_QUERY, vars)
				.then((response) => {
					this.activeProducts = response.data

				})
				.catch((error) => {
					console.log(error);
				})
			this.isLoading = false
		}
		@action hydrate = (data) => {
			if (!data) return

			this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
			this.light = !!data.light
		}
}

function createStore() {
	ProductStore = new ProdStore()
	ProductStore.getPosts()
	ProductStore.currentProducts()
}
function initializeStore(initialData = null) {
	const _store = ProductStore ?? new ProdStore()

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
	if (initialData) {
		_store.hydrate(initialData)
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!ProductStore) ProductStore = _store

	return _store
}
export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
createStore()
export default ProductStore