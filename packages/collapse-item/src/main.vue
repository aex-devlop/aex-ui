<template>
	<div
		class="aex-collapse-item"
		:class="{ 'is-active': isActive, 'is-disabled': disabled }"
	>
		<div
			role="tab"
			:aria-expanded="isActive"
			:aria-controls="`aex-collapse-content-${id}`"
			:aria-describedby="`aex-collapse-content-${id}`"
		>
			<div
				class="aex-collapse-item__header"
				@click="handleHeaderClick"
				role="button"
				:id="`aex-collapse-head-${id}`"
				:tabindex="disabled ? undefined : 0"
				@keyup.space.enter.stop="handleEnterClick"
				:class="{
					focusing: focusing,
					'is-active': isActive
				}"
				@focus="handleFocus"
				@blur="focusing = false"
			>
				<slot name="title">{{ title }}</slot>
				<i
					class="aex-collapse-item__arrow aex-icon-right"
					:class="{ 'is-active': isActive }"
				>
				</i>
			</div>
		</div>
		<aex-collapse-transition>
			<div
				class="aex-collapse-item__wrap"
				v-show="isActive"
				role="tabpanel"
				:aria-hidden="!isActive"
				:aria-labelledby="`aex-collapse-head-${id}`"
				:id="`aex-collapse-content-${id}`"
			>
				<div class="aex-collapse-item__content">
					<slot></slot>
				</div>
			</div>
		</aex-collapse-transition>
	</div>
</template>
<script>
import AexCollapseTransition from 'aex-ui/src/transitions/collapse-transition';
import Emitter from 'aex-ui/src/mixins/emitter';
import { generateId } from 'aex-ui/src/utils/util';

export default {
	name: 'AexCollapseItem',

	componentName: 'AexCollapseItem',

	mixins: [Emitter],

	components: { AexCollapseTransition },

	data() {
		return {
			contentWrapStyle: {
				height: 'auto',
				display: 'block'
			},
			contentHeight: 0,
			focusing: false,
			isClick: false,
			id: generateId()
		};
	},

	inject: ['collapse'],

	props: {
		title: String,
		name: {
			type: [String, Number],
			default() {
				return this._uid;
			}
		},
		disabled: Boolean
	},

	computed: {
		isActive() {
			return this.collapse.activeNames.indexOf(this.name) > -1;
		}
	},

	methods: {
		handleFocus() {
			setTimeout(() => {
				if (!this.isClick) {
					this.focusing = true;
				} else {
					this.isClick = false;
				}
			}, 50);
		},
		handleHeaderClick() {
			if (this.disabled) return;
			this.dispatch('AexCollapse', 'item-click', this);
			this.focusing = false;
			this.isClick = true;
		},
		handleEnterClick() {
			this.dispatch('AexCollapse', 'item-click', this);
		}
	}
};
</script>
