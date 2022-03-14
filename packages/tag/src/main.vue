<script>
export default {
    name: 'AexTag',
    props: {
        text: String,
        closable: Boolean,
        type: String,
        hit: Boolean,
        disableTransitions: Boolean,
        color: String,
        size: String,
        effect: {
            type: String,
            default: 'light',
            validator(val) {
                return ['dark', 'light', 'plain'].indexOf(val) !== -1;
            },
        },
    },
    methods: {
        handleClose(event) {
            event.stopPropagation();
            this.$emit('close', event);
        },
        handleClick(event) {
            this.$emit('click', event);
        },
    },
    computed: {
        tagSize() {
            return this.size || (this.$AEXUI || {}).size;
        },
    },
    render(h) {
        const { type, tagSize, hit, effect } = this;
        const classes = [
            'aex-tag',
            type ? `aex-tag--${type}` : '',
            tagSize ? `aex-tag--${tagSize}` : '',
            effect ? `aex-tag--${effect}` : '',
            hit && 'is-hit',
        ];
        const tagEl = (
            <span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
                {this.$slots.default}
                {this.closable && <i class='aex-tag__close aex-icon-close' on-click={this.handleClose} />}
            </span>
        );

        return this.disableTransitions ? tagEl : <transition name='aex-zoom-in-center'>{tagEl}</transition>;
    },
};
</script>
