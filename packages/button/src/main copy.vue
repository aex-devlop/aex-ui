<template>
    <div class="aex-button" @click="_onClick">
        <slot></slot>
    </div>
</template>

<script>
import { t } from 'aex-ui/src/locale';
export default {
    name: 'AexButton',
    computed: {
        txt() {
            return t('aex.popconfirm.confirmButtonText');
        },
    },
    methods: {
        _onClick(event) {
            if (!this.disabled) {
                if (!this.href) {
                    this.$emit('click', event);
                }
            }
        },
    },
};
</script>
