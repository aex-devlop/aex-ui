<template>
    <transition name="aex-zoom-in-top" @after-leave="doDestroy">
        <div
            v-show="showPopper"
            class="aex-autocomplete-suggestion aex-popper"
            :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
            :style="{ width: dropdownWidth }"
            role="region"
        >
            <aex-scrollbar
                tag="ul"
                wrap-class="aex-autocomplete-suggestion__wrap"
                view-class="aex-autocomplete-suggestion__list"
            >
                <li v-if="!parent.hideLoading && parent.loading"><i class="aex-icon-loading"></i></li>
                <slot v-else> </slot>
            </aex-scrollbar>
        </div>
    </transition>
</template>
<script>
import Popper from 'aex-ui/src/utils/vue-popper';
import Emitter from 'aex-ui/src/mixins/emitter';
import AexScrollbar from 'aex-ui/packages/scrollbar';

export default {
    components: { AexScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'AexAutocompleteSuggestions',

    data() {
        return {
            parent: this.$parent,
            dropdownWidth: '',
        };
    },

    props: {
        options: {
            default() {
                return {
                    gpuAcceleration: false,
                };
            },
        },
        id: String,
    },

    methods: {
        select(item) {
            this.dispatch('AexAutocomplete', 'item-click', item);
        },
    },

    updated() {
        this.$nextTick((_) => {
            this.popperJS && this.updatePopper();
        });
    },

    mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
        this.referenceList = this.$el.querySelector('.aex-autocomplete-suggestion__list');
        this.referenceList.setAttribute('role', 'listbox');
        this.referenceList.setAttribute('id', this.id);
    },

    created() {
        this.$on('visible', (val, inputWidth) => {
            this.dropdownWidth = inputWidth + 'px';
            this.showPopper = val;
        });
    },
};
</script>
