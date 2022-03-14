<template>
	<div
		class="aex-steps"
		:class="[
			!simple && 'aex-steps--' + direction,
			simple && 'aex-steps--simple',
			strip && 'aex-steps--strip'
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
import Migrating from 'aex-ui/src/mixins/migrating';

export default {
	name: 'AexSteps',

	mixins: [Migrating],

	props: {
		space: [Number, String],
		active: Number,
		direction: {
			type: String,
			default: 'horizontal'
		},
		alignCenter: Boolean,
		simple: Boolean,
		dot: Boolean,
		strip: Boolean,
		finishedIcon: {
			type: String,
			default: ''
		},
		finishColor: {
			type: String,
			default: '#3378ff'
		},
		textDirection: {
			type: String,
			default: 'vertical' // horizontal
		}
	},

	data() {
		return {
			steps: []
		};
	},

	methods: {
		getMigratingConfig() {
			return {
				props: {
					center: 'center is removed.'
				}
			};
		}
	},

	watch: {
		active(newVal, oldVal) {
			this.$emit('change', newVal, oldVal);
		},

		steps(steps) {
			steps.forEach((child, index) => {
				child.index = index + 1;
			});
		}
	}
};
</script>
