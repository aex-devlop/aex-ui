<template>
	<div class="aex-collapse" role="tablist" aria-multiselectable="true">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'AexCollapse',

	componentName: 'AexCollapse',

	props: {
		accordion: Boolean,
		value: {
			type: [Array, String, Number],
			default() {
				return [];
			}
		}
	},

	data() {
		return {
			activeNames: [].concat(this.value)
		};
	},

	provide() {
		return {
			collapse: this
		};
	},

	watch: {
		value(value) {
			this.activeNames = [].concat(value);
		}
	},

	methods: {
		setActiveNames(activeNames, currentName, isOpen) {
			activeNames = [].concat(activeNames);
			let value = this.accordion ? activeNames[0] : activeNames;
			this.activeNames = activeNames;
			// this.$emit('input', value);
			this.$emit('change', value, currentName, isOpen);
		},
		handleItemClick(item) {
			let isOpen = true;
			if (this.accordion) {
				this.setActiveNames(
					(this.activeNames[0] || this.activeNames[0] === 0) && this.activeNames[0] === item.name ? '' : item.name,
					item.name,
					this.activeNames[0] === item.name
				);
			} else {
				let activeNames = this.activeNames.slice(0);
				let index = activeNames.indexOf(item.name);

				if (index > -1) {
					activeNames.splice(index, 1);
					isOpen = false;
				} else {
					activeNames.push(item.name);
				}
				this.setActiveNames(activeNames, item.name, isOpen);
			}
		}
	},

	created() {
		this.$on('item-click', this.handleItemClick);
	}
};
</script>
