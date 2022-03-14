<template>
	<transition name="msgbox-fade">
		<div
			class="aex-message-box__wrapper"
			tabindex="-1"
			v-show="visible"
			@click.self="handleWrapperClick"
			role="dialog"
			aria-modal="true"
			:aria-label="title || 'dialog'"
		>
			<div
				class="aex-message-box"
				:class="[customClass, center && 'aex-message-box--center']"
			>
				<div class="aex-message-box__header" v-if="title !== null">
					<div class="aex-message-box__title">
						<!-- <div :class="['aex-message-box__status', icon]" v-if="icon && center"></div> -->
						<span>{{ title }}</span>
					</div>
					<button
						type="button"
						class="aex-message-box__headerbtn"
						aria-label="Close"
						v-if="showClose"
						@click="
							handleAction(
								distinguishCancelAndClose ? 'close' : 'cancel'
							)
						"
						@keydown.enter="
							handleAction(
								distinguishCancelAndClose ? 'close' : 'cancel'
							)
						"
					>
						<i class="aex-message-box__close aex-icon-close"></i>
					</button>
				</div>
				<div class="aex-message-box__content">
					<div class="aex-message-box__container">
						<div
							:class="['aex-message-box__status', icon]"
							v-if="icon && !center && message !== ''"
						></div>
						<div
							class="aex-message-box__message"
							v-if="message !== ''"
						>
							<slot>
								<p v-if="!dangerouslyUseHTMLString">
									{{ message }}
								</p>
								<p v-else v-html="message"></p>
							</slot>
						</div>
					</div>
				</div>
				<div class="aex-message-box__btns">
					<aex-button
						:loading="cancelButtonLoading"
						:class="[cancelButtonClasses]"
						v-if="showCancelButton"
						:round="roundButton"
						:block="blockButton"
						size="medium"
						type="text-secondary"
						@click.native="handleAction('cancel')"
						@keydown.enter="handleAction('cancel')"
					>
						{{ cancelButtonText || t('aex.messagebox.cancel') }}
					</aex-button>
					<aex-button
						:loading="confirmButtonLoading"
						ref="confirm"
						:class="[confirmButtonClasses]"
						v-show="showConfirmButton"
						:round="roundButton"
						:block="blockButton"
						size="medium"
						@click.native="handleAction('confirm')"
						@keydown.enter="handleAction('confirm')"
					>
						{{ confirmButtonText || t('aex.messagebox.confirm') }}
					</aex-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/babel">
import Popup from 'aex-ui/src/utils/popup';
import Locale from 'aex-ui/src/mixins/locale';
import AexButton from 'aex-ui/packages/button';
import { removeClass } from 'aex-ui/src/utils/dom';
import Dialog from 'aex-ui/src/utils/aria-dialog';

let messageBox;
let typeMap = {
	success: 'success',
	info: 'info',
	warning: 'warning',
	error: 'error'
};

export default {
	mixins: [Popup, Locale],
	data() {
		return {
			uid: 1,
			title: undefined,
			type: '',
			message: '',
			iconClass: '',
			customClass: '',
			showConfirmButton: true,
			showCancelButton: false,
			action: '',
			confirmButtonText: '',
			cancelButtonText: '',
			confirmButtonLoading: false,
			cancelButtonLoading: false,
			confirmButtonClass: '',
			confirmButtonDisabled: false,
			cancelButtonClass: '',
			callback: null,
			dangerouslyUseHTMLString: false,
			focusAfterClosed: null,
			isOnComposition: false,
			distinguishCancelAndClose: false
		};
	},
	props: {
		modal: {
			default: true
		},
		lockScroll: {
			default: true
		},
		showClose: {
			type: Boolean,
			default: true
		},
		closeOnClickModal: {
			default: true
		},
		closeOnPressEscape: {
			default: true
		},
		closeOnHashChange: {
			default: true
		},
		center: {
			default: false,
			type: Boolean
		},
		roundButton: {
			default: false,
			type: Boolean
		},
		blockButton: {
			default: false,
			type: Boolean
		}
	},

	components: {
		AexButton
	},

	computed: {
		icon() {
			const { type, iconClass } = this;
			return (
				iconClass ||
				(type && typeMap[type] ? `aex-icon-${typeMap[type]}` : '')
			);
		},

		confirmButtonClasses() {
			return `${this.confirmButtonClass}`;
		},
		cancelButtonClasses() {
			return `${this.cancelButtonClass}`;
		}
	},

	methods: {
		getSafeClose() {
			const currentId = this.uid;
			return () => {
				this.$nextTick(() => {
					if (currentId === this.uid) this.doClose();
				});
			};
		},
		doClose() {
			if (!this.visible) return;
			this.visible = false;
			this._closing = true;

			this.onClose && this.onClose();
			messageBox.closeDialog(); // 解绑
			if (this.lockScroll) {
				setTimeout(this.restoreBodyStyle, 200);
			}
			this.opened = false;
			this.doAfterClose();
			setTimeout(() => {
				if (this.action) this.callback(this.action, this);
			});
		},

		handleWrapperClick() {
			if (this.closeOnClickModal) {
				this.handleAction(
					this.distinguishCancelAndClose ? 'close' : 'cancel'
				);
			}
		},

		handleInputEnter() {
			if (this.inputType !== 'textarea') {
				return this.handleAction('confirm');
			}
		},

		handleAction(action) {
			this.action = action;
			if (typeof this.beforeClose === 'function') {
				this.close = this.getSafeClose();
				this.beforeClose(action, this, this.close);
			} else {
				this.doClose();
			}
		},

		getFirstFocus() {
			const btn = this.$el.querySelector(
				'.aex-message-box__btns .aex-button'
			);
			const title = this.$el.querySelector(
				'.aex-message-box__btns .aex-message-box__title'
			);
			return btn || title;
		},
		handleClose() {
			this.handleAction('close');
		}
	},

	watch: {
		inputValue: {
			immediate: true,
			handler(val) {
				this.$nextTick((_) => {
					if (this.$type === 'prompt' && val !== null) {
						this.validate();
					}
				});
			}
		},

		visible(val) {
			if (val) {
				this.uid++;
				if (this.$type === 'alert' || this.$type === 'confirm') {
					this.$nextTick(() => {
						this.$refs.confirm.$el.focus();
					});
				}
				this.focusAfterClosed = document.activeElement;
				messageBox = new Dialog(
					this.$el,
					this.focusAfterClosed,
					this.getFirstFocus()
				);
			}

			// prompt
			if (this.$type !== 'prompt') return;
			if (val) {
				setTimeout(() => {
					if (this.$refs.input && this.$refs.input.$el) {
						this.getInputElement().focus();
					}
				}, 500);
			} else {
				this.editorErrorMessage = '';
				removeClass(this.getInputElement(), 'invalid');
			}
		}
	},

	mounted() {
		this.$nextTick(() => {
			if (this.closeOnHashChange) {
				window.addEventListener('hashchange', this.close);
			}
		});
	},

	beforeDestroy() {
		if (this.closeOnHashChange) {
			window.removeEventListener('hashchange', this.close);
		}
		setTimeout(() => {
			messageBox.closeDialog();
		});
	}
};
</script>
