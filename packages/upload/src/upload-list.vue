<template>
	<transition-group
		tag="ul"
		:class="[
			'aex-upload-list',
			'aex-upload-list--' + listType,
			{ 'is-disabled': disabled }
		]"
		name="aex-list"
	>
		<li
			v-for="file in files"
			:class="[
				'aex-upload-list__item',
				'is-' + file.status,
				focusing ? 'focusing' : ''
			]"
			:key="file.uid"
			tabindex="0"
			@keydown.delete="!disabled && $emit('remove', file)"
			@focus="focusing = true"
			@blur="focusing = false"
			@click="focusing = false"
		>
			<slot :file="file">
				<img
					class="aex-upload-list__item-thumbnail"
					v-if="
						file.status !== 'uploading' &&
							['picture-card', 'picture'].indexOf(listType) > -1
					"
					:src="file.url"
					alt=""
				/>
				<a
					class="aex-upload-list__item-name"
					@click="handleClick(file)"
				>
					<i class="aex-icon-order"></i>{{ file.name }}
				</a>
				<label class="aex-upload-list__item-status-label">
					<i
						:class="{
							'aex-icon-upload-success': true,
							'aex-icon-success': listType === 'text',
							'aex-icon-check':
								['picture-card', 'picture'].indexOf(listType) >
								-1
						}"
					></i>
				</label>
				<i
					class="aex-icon-close"
					v-if="!disabled"
					@click="$emit('remove', file)"
				></i>
				<i class="aex-icon-close-tip" v-if="!disabled">{{
					t('aex.upload.deleteTip')
				}}</i>
				<!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->

				<aex-progress
					v-if="file.status === 'uploading'"
					:type="listType === 'picture-card' ? 'circle' : 'line'"
					:stroke-width="listType === 'picture-card' ? 6 : 2"
					:percentage="parsePercentage(file.percentage)"
				>
				</aex-progress>
				<span
					class="aex-upload-list__item-actions"
					v-if="listType === 'picture-card'"
				>
					<span
						class="aex-upload-list__item-preview"
						v-if="handlePreview && listType === 'picture-card'"
						@click="handlePreview(file)"
					>
						<i class="aex-icon-zoom-in"></i>
					</span>
					<span
						v-if="!disabled"
						class="aex-upload-list__item-delete"
						@click="$emit('remove', file)"
					>
						<i class="aex-icon-error"></i>
					</span>
				</span>
			</slot>
		</li>
	</transition-group>
</template>
<script>
import Locale from 'aex-ui/src/mixins/locale';
import AexProgress from 'aex-ui/packages/progress';

export default {
	name: 'AexUploadList',

	mixins: [Locale],

	data() {
		return {
			focusing: false
		};
	},
	components: { AexProgress },

	props: {
		files: {
			type: Array,
			default() {
				return [];
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		handlePreview: Function,
		listType: String
	},
	methods: {
		parsePercentage(val) {
			return parseInt(val, 10);
		},
		handleClick(file) {
			this.handlePreview && this.handlePreview(file);
		}
	}
};
</script>
