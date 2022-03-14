<template>
	<div class="aex-empty">
		<img class="aex-empty__image" :src="src" :style="imageStyle" />
		<div class="aex-empty__text">
			<slot name="text">
				<span>{{ text || t(`aex.empty.${type}`) }}</span>
				<span
					v-if="$listeners.click"
					class="aex-empty__button"
					@click="_click"
					>{{ buttonText || t(`aex.empty.btn_${type}`) }}</span
				>
			</slot>
		</div>
	</div>
</template>

<script>
import Locale from 'aex-ui/src/mixins/locale';
export default {
	name: 'AexEmpty',
	mixins: [Locale],
	data() {
		return {};
	},
	props: {
		type: {
			type: String,
			default: ''
		},
		imageWidth: {
			type: String,
			default: '100%'
		},
		imageHeight: {
			type: String,
			default: 'auto'
		},
		baseUrl: {
			type: String,
			default:
				'https://aexphoto-1251755124.file.myqcloud.com/img/image_tips'
		},
		text: String,
		buttonText: String
	},
	computed: {
		src() {
			return `${this.baseUrl}/${this.type}.png`;
		},
		imageStyle() {
			return {
				width: this.imageWidth,
				height: this.imageHeight
			};
		}
	},

	methods: {
		_click() {
			this.$emit('click');
		}
	}
};
</script>
