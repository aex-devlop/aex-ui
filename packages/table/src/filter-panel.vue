<template>
    <transition name="aex-zoom-in-top">
        <div class="aex-table-filter" v-if="multiple" v-clickoutside="handleOutsideClick" v-show="showPopper">
            <div class="aex-table-filter__content">
                <aex-scrollbar wrap-class="aex-table-filter__wrap">
                    <aex-checkbox-group class="aex-table-filter__checkbox-group" v-model="filteredValue">
                        <aex-checkbox v-for="filter in filters" :key="filter.value" :label="filter.value">{{
                            filter.text
                        }}</aex-checkbox>
                    </aex-checkbox-group>
                </aex-scrollbar>
            </div>
            <div class="aex-table-filter__bottom">
                <button
                    @click="handleConfirm"
                    :class="{ 'is-disabled': filteredValue.length === 0 }"
                    :disabled="filteredValue.length === 0"
                >
                    {{ t('aex.table.confirmFilter') }}
                </button>
                <button @click="handleReset">{{ t('aex.table.resetFilter') }}</button>
            </div>
        </div>
        <div class="aex-table-filter" v-else v-clickoutside="handleOutsideClick" v-show="showPopper">
            <ul class="aex-table-filter__list">
                <li
                    class="aex-table-filter__list-item"
                    :class="{ 'is-active': filterValue === undefined || filterValue === null }"
                    @click="handleSelect(null)"
                >
                    {{ t('aex.table.clearFilter') }}
                </li>
                <li
                    class="aex-table-filter__list-item"
                    v-for="filter in filters"
                    :label="filter.value"
                    :key="filter.value"
                    :class="{ 'is-active': isActive(filter) }"
                    @click="handleSelect(filter.value)"
                >
                    {{ filter.text }}
                </li>
            </ul>
        </div>
    </transition>
</template>

<script type="text/babel">
import Popper from 'aex-ui/src/utils/vue-popper';
import { PopupManager } from 'aex-ui/src/utils/popup';
import Locale from 'aex-ui/src/mixins/locale';
import Clickoutside from 'aex-ui/src/utils/clickoutside';
import Dropdown from './dropdown';
import AexCheckbox from 'aex-ui/packages/checkbox';
import AexCheckboxGroup from 'aex-ui/packages/checkbox-group';
import AexScrollbar from 'aex-ui/packages/scrollbar';

export default {
    name: 'AexTableFilterPanel',

    mixins: [Popper, Locale],

    directives: {
        Clickoutside,
    },

    components: {
        AexCheckbox,
        AexCheckboxGroup,
        AexScrollbar,
    },

    props: {
        placement: {
            type: String,
            default: 'bottom-end',
        },
    },

    methods: {
        isActive(filter) {
            return filter.value === this.filterValue;
        },

        handleOutsideClick() {
            setTimeout(() => {
                this.showPopper = false;
            }, 16);
        },

        handleConfirm() {
            this.confirmFilter(this.filteredValue);
            this.handleOutsideClick();
        },

        handleReset() {
            this.filteredValue = [];
            this.confirmFilter(this.filteredValue);
            this.handleOutsideClick();
        },

        handleSelect(filterValue) {
            this.filterValue = filterValue;

            if (typeof filterValue !== 'undefined' && filterValue !== null) {
                this.confirmFilter(this.filteredValue);
            } else {
                this.confirmFilter([]);
            }

            this.handleOutsideClick();
        },

        confirmFilter(filteredValue) {
            this.table.store.commit('filterChange', {
                column: this.column,
                values: filteredValue,
            });
            this.table.store.updateAllSelected();
        },
    },

    data() {
        return {
            table: null,
            cell: null,
            column: null,
        };
    },

    computed: {
        filters() {
            return this.column && this.column.filters;
        },

        filterValue: {
            get() {
                return (this.column.filteredValue || [])[0];
            },
            set(value) {
                if (this.filteredValue) {
                    if (typeof value !== 'undefined' && value !== null) {
                        this.filteredValue.splice(0, 1, value);
                    } else {
                        this.filteredValue.splice(0, 1);
                    }
                }
            },
        },

        filteredValue: {
            get() {
                if (this.column) {
                    return this.column.filteredValue || [];
                }
                return [];
            },
            set(value) {
                if (this.column) {
                    this.column.filteredValue = value;
                }
            },
        },

        multiple() {
            if (this.column) {
                return this.column.filterMultiple;
            }
            return true;
        },
    },

    mounted() {
        this.popperElm = this.$el;
        this.referenceElm = this.cell;
        this.table.bodyWrapper.addEventListener('scroll', () => {
            this.updatePopper();
        });

        this.$watch('showPopper', (value) => {
            if (this.column) this.column.filterOpened = value;
            if (value) {
                Dropdown.open(this);
            } else {
                Dropdown.close(this);
            }
        });
    },
    watch: {
        showPopper(val) {
            if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
                this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
            }
        },
    },
};
</script>
