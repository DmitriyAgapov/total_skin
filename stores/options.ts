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
	},
	'Width': {
		title: "width",
		value: undefined,
		setWidth: function(value: number) {
			this.value = value
		}
	}
})
export default MenuStore