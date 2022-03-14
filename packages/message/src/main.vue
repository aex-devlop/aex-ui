<template>
    <transition name="aex-message-fade" @after-leave="handleAfterLeave">
        <div
            :class="[
                'aex-message',
                type && !iconClass ? `aex-message--${type}` : '',
                center ? 'is-center' : '',
                showClose ? 'is-closable' : '',
                customClass,
            ]"
            :style="positionStyle"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
        >
            <!-- 如果没有自定义的图标，就用默认的 -->
            <i :class="iconClass" v-if="iconClass"></i>
            <i :class="typeClass" v-else></i>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" class="aex-message__content">{{ message }}</p>
                <p v-else v-html="message" class="aex-message__content"></p>
            </slot>
            <!-- 关闭按钮 -->
            <i v-if="showClose" class="aex-message__closeBtn aex-icon-close" @click="close"></i>
        </div>
    </transition>
</template>

<script>
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
};
export default {
    name: 'AexMessage',
    data() {
        return {
            visible: false,
            message: '',
            duration: 3000,
            type: 'info',
            iconClass: '',
            customClass: '',
            onClose: null,
            showClose: false,
            closed: false,
            verticalOffset: 20,
            timer: null,
            dangerouslyUseHTMLString: false,
            center: false,
        };
    },
    computed: {
        // 字体图标的类名,如果有自定义的，就为空
        typeClass() {
            return this.type && !this.iconClass ? `aex-message__icon aex-icon-${typeMap[this.type]}` : '';
        },
        // Message 距离窗口顶部的偏移量
        positionStyle() {
            return {
                top: `${this.verticalOffset}px`,
            };
        },
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false;
            }
        },
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
        },
    },
    mounted() {
        this.startTimer();
        document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.keydown);
    },
};
</script>
