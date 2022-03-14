<template>
	<transition
		name="dialog-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div
			v-show="visible"
			class="aex-dialog__wrapper"
			@click.self="handleWrapperClick"
		>
			<div
				role="dialog"
				:key="key"
				aria-modal="true"
				:aria-label="title || 'dialog'"
				:class="[
					'aex-dialog',
					{
						'is-fullscreen': fullscreen,
						'aex-dialog--center': center,
						'aex-dialog--custom': custom
					},
					customClass
				]"
				ref="dialog"
				:style="style"
			>
				<template v-if="!custom">
					<div class="aex-dialog__header">
						<slot name="title">
							<span class="aex-dialog__title">{{ title }}</span>
						</slot>
						<button
							type="button"
							class="aex-dialog__headerbtn"
							aria-label="Close"
							v-if="showClose"
							@click="handleClose"
						>
							<i class="aex-dialog__close aex-icon-close"></i>
						</button>
					</div>
					<div class="aex-dialog__body" v-if="rendered">
						<slot></slot>
					</div>
					<div class="aex-dialog__footer" v-if="$slots.footer">
						<slot name="footer"></slot>
					</div>
				</template>
				<slot v-else></slot>
			</div>
		</div>
	</transition>
</template>

<script>
import Popup from 'aex-ui/src/utils/popup';
import Migrating from 'aex-ui/src/mixins/migrating';
import emitter from 'aex-ui/src/mixins/emitter';

export default {
	name: 'AexDialog',

	mixins: [Popup, emitter, Migrating],

	props: {
		title: {
			type: String,
			default: ''
		},

		modal: {
			type: Boolean,
			default: true
		},

		modalAppendToBody: {
			type: Boolean,
			default: true
		},

		appendToBody: {
			type: Boolean,
			default: false
		},

		lockScroll: {
			type: Boolean,
			default: true
		},

		closeOnClickModal: {
			type: Boolean,
			default: true
		},

		closeOnPressEscape: {
			type: Boolean,
			default: true
		},

		showClose: {
			type: Boolean,
			default: true
		},

		width: String,

		fullscreen: Boolean,

		customClass: {
			type: String,
			default: ''
		},

		top: {
			type: String,
			default: '15vh'
		},
		beforeClose: Function,
		center: {
			type: Boolean,
			default: false
		},
		custom: Boolean, //自定义内容
		destroyOnClose: Boolean
	},

	data() {
		return {
			closed: false,
			key: 0
		};
	},

	watch: {
		visible(val) {
			if (val) {
				this.closed = false;
				this.$emit('open');
				this.$el.addEventListener('scroll', this.updatePopper);
				this.$nextTick(() => {
					this.$refs.dialog.scrollTop = 0;
				});
				if (this.appendToBody) {
					document.body.appendChild(this.$el);
				}
			} else {
				this.$el.removeEventListener('scroll', this.updatePopper);
				if (!this.closed) this.$emit('close');
				if (this.destroyOnClose) {
					this.$nextTick(() => {
						this.key++;
					});
				}
			}
		}
	},

	computed: {
		style() {
			let style = {};
			if (!this.fullscreen) {
				style.marginTop = this.top;
				if (this.width) {
					style.width = this.width;
				}
			}
			return style;
		}
	},

	methods: {
		getMigratingConfig() {
			return {
				props: {
					size: 'size is removed.'
				}
			};
		},
		handleWrapperClick() {
			if (!this.closeOnClickModal) return;
			this.handleClose();
		},
		handleClose() {
			if (typeof this.beforeClose === 'function') {
				this.beforeClose(this.hide);
			} else {
				this.hide();
			}
		},
		hide(cancel) {
			if (cancel !== false) {
				this.$emit('update:visible', false);
				this.$emit('close');
				this.closed = true;
			}
		},
		updatePopper() {
			this.broadcast('AexSelectDropdown', 'updatePopper');
			this.broadcast('AexDropdownMenu', 'updatePopper');
		},
		afterEnter() {
			this.$emit('opened');
		},
		afterLeave() {
			this.$emit('closed');
		}
	},

	mounted() {
		if (this.visible) {
			this.rendered = true;
			this.open();
			if (this.appendToBody) {
				document.body.appendChild(this.$el);
			}
		}
	},

	destroyed() {
		// 如果是添加在body上，在销毁的时候会移除DOM
		if (this.appendToBody && this.$el && this.$el.parentNode) {
			this.$el.parentNode.removeChild(this.$el);
		}
	}
};
</script>
