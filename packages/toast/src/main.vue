<template>
	<transition name="aex-toast-fade" @after-leave="handleAfterLeave">
		<div
			:class="['aex-toast', customClass]"
			v-show="visible"
			@mouseenter="clearTimer"
			@mouseleave="startTimer"
		>
			{{ message }}
		</div>
	</transition>
</template>

<script>
export default {
	name: 'AexToast',
	data() {
		return {
			visible: false,
			message: '',
			duration: 3000,
			customClass: '',
			onClose: null,
			showClose: false,
			closed: false,
			timer: null,
			dangerouslyUseHTMLString: false
		};
	},

	watch: {
		closed(newVal) {
			if (newVal) {
				this.visible = false;
			}
		}
	},
	methods: {
		// 自动销毁
		handleAfterLeave() {
			this.$destroy(true);
			this.$el.parentNode.removeChild(this.$el);
		},

		// 关闭，并执行自定义的关闭事件
		close() {
			this.closed = true;
			if (typeof this.onClose === 'function') {
				this.onClose(this);
			}
		},

		clearTimer() {
			clearTimeout(this.timer);
		},

		// 在 duration 秒后自动关闭 message
		startTimer() {
			if (this.duration > 0) {
				this.timer = setTimeout(() => {
					if (!this.closed) {
						this.close();
					}
				}, this.duration);
			}
		},

		// esc关闭消息
		keydown(e) {
			if (e.keyCode === 27) {
				if (!this.closed) {
					this.close();
				}
			}
		}
	},
	mounted() {
		this.startTimer();
		document.addEventListener('keydown', this.keydown);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.keydown);
	}
};
</script>
