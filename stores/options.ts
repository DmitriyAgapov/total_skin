// import {observable, action, computed, reaction} from 'mobx';
//
// class MenuStore {
// 	@observable show;
//
// 	constructor() {
// 		this.show = false;
// 	}
//
// 	@action('toggle left panel')
// 	toggleLeftPanel() {
// 		this.show = !this.show;
//
// 	}
//
// 	@action('show left panel')
// 	openLeftPanel() {
// 		this.show = true;
//
// 	}
//
// 	@action('hide left panel')
// 	closeLeftPanel() {
// 		this.show = false;
// 	}
// 	@reaction()
// 	@computed get isOpenLeftPanel() {
// 		console.log(this.show)
// 		return this.show;
// 	}
// }
// const menuStore = new MenuStore();
//
// export default menuStore;
//
// export { MenuStore };


import {observable} from "mobx";

const MenuStore = observable({
	'Open': {
		title: "Drawer",
		state: false,
		toggleState: function () {
				console.log(this.state)
				this.state = !this.state;
				},
		setOpen: function () {
			this.state = true
		},
		setClose: function () {
			this.state = false
		}
	}
})
export default MenuStore