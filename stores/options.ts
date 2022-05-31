import {action, makeObservable, observable} from "mobx";
import {useWindowSize} from "../utils";
export default class MenuStore {
	constructor() {
		makeObservable(this)
	}
	@observable open: boolean = false;
	@observable openDrawer: boolean = false;
	@observable backDrop: boolean = false;
	
	@observable openModal: boolean = false;
	@observable width: number = 0;

	@action toggleState() {
		console.log(this.open)
		this.open = !this.open;
	}
	@action toggleStateDrawer() {
		console.log(this.openDrawer)
		this.openDrawer = !this.openDrawer;
		this.backDrop = !this.backDrop 
	}
	@action toggleStateModal() {
		console.log(this.openModal)
		this.openModal = !this.openModal;
	}

	@action setOpen() {
		this.open = true
	}
	@action setOpenModal() {
		this.openModal = true
	}

	@action setClose() {
		this.open = false
	}
	@action setCloseDrawer() {
		this.openDrawer = false
	}
	@action setCloseModal() {
		this.openModal = false
	}

	@action setWidth(value: number) {
		this.width = value
	}

	static setWidth(width: number) {
		this.width = width
	}
	hydrate = (data) => {
		if (!data) return
		this.open = data.lastUpdate !== null ? data.lastUpdate : Date.now()
		this.width = data.width == 0 ? this.setWidth(1024) : data.width
	}
}
// const MenuStore = observable({
// 	'Open': {
// 		title: "Drawer",
// 		state: false,
// 		toggleState: function () {
//
// 				},
// 		setOpen: function () {
// 			this.state = true
// 		},
// 		setClose: function () {
// 			this.state = false
// 		}
// 	},
// 	'Width': {
// 		title: "width",
// 		value: undefined,
// 		setWidth: function(value: number) {
// 			this.value = value
// 		}
// 	}
// })
// export default MenuStore