import {action, makeObservable, observable} from "mobx";

export default class UserStore {
	constructor() {
		makeObservable(this)
	}
	@observable login: boolean = false;
	@action logIn () {
		this.login = true
	}
	@action logOff () {
		this.login = false
	}


	hydrate = (data) => {
		if (!data) return
		this.open = data.lastUpdate !== null ? data.lastUpdate : Date.now()
		this.width = data.width == 0 ? this.setWidth(1024) : data.width
	}
}