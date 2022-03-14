<template>
	<div
		class="aex-step"
		:style="style()"
		:class="[
			isDot && 'is-dot',
			isStrip && 'is-strip',
			isSimple ? 'is-simple' : `is-${$parent.direction}`,
			!isStrip && isLast && !space && !isCenter && 'is-flex',
			isCenter && !isVertical && !isSimple && 'is-center'
		]"
	>
		<template v-if="!isStrip">
			<!-- icon & line -->
			<div
				:class="['aex-step__head', isProcess && 'is-process']"
				:style="
					isFinished
						? { borderColor: finishColor, color: finishColor }
						: ''
				"
			>
				<!-- 中间的线条 -->
				<div class="aex-step__line" :style="lineStyle()">
					<i class="aex-step__line-inner" :style="lineInnerStyle"></i>
				</div>

				<!-- 步骤标示，icon / text  -->
				<div
					v-if="!isDot"
					class="aex-step__icon"
					ref="stepIcon"
					:class="`is-${icon ? 'icon' : 'text'}`"
					:style="
						!icon && isProcess
							? {
									borderColor: finishColor,
									color: '#fff',
									background: finishColor
							  }
							: ''
					"
				>
					<!-- 默认显示 如果有icon就展示icon-->
					<slot v-if="!isFinished || !__finishedIcon" name="icon">
						<i
							v-if="icon"
							class="aex-step__icon-inner"
							:class="[icon]"
						></i>
						<!-- 默认是展示数字 -->
						<div class="aex-step__icon-inner" v-else-if="!isSimple">
							{{ index }}
						</div>
					</slot>

					<!-- 选中显示自定义icon -->
					<i
						v-else
						:class="__finishedIcon"
						class="aex-step__icon-inner is-status"
					/>
				</div>
				<!-- 点样式 -->
				<div
					v-else
					class="aex-step__icon"
					ref="stepIcon"
					:style="
						isFinished
							? {
									borderColor: finishColor,
									background: finishColor
							  }
							: ''
					"
				/>

				<!-- 标题横向排版 -->
				<div
					v-if="textDirection == 'horizontal'"
					class="aex-step__title--horizontal"
					ref="titleHorizontal"
					:style="isFinished ? { color: finishColor } : ''"
				>
					<slot name="title">{{ title }}</slot>
				</div>
			</div>
			<!-- title & description -->
			<div class="aex-step__main" v-if="textDirection == 'vertical'">
				<div
					class="aex-step__title"
					ref="title"
					:style="isFinished ? { color: finishColor } : ''"
				>
					<slot name="title">{{ title }}</slot>
				</div>
				<div v-if="isSimple" class="aex-step__arrow"></div>
				<div
					v-else
					class="aex-step__description"
					:style="isFinished ? { color: finishColor } : ''"
				>
					<slot name="description">{{ description }}</slot>
				</div>
			</div>
		</template>

		<!-- 条状风格 -->
		<template v-else>
			<div
				class="aex-step__strip__line"
				:style="isFinished ? { background: finishColor } : ''"
			>
				<div
					class="aex-step__strip__title"
					ref="title"
					:style="isFinished ? { color: '#fff' } : ''"
				>
					<slot name="title">{{ title }}</slot>
				</div>
			</div>
			<div
				v-show="isFinished"
				class="aex-step__strip__arrow"
				:style="{ borderLeftColor: finishColor }"
			></div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'AexStep',

	props: {
		title: String,
		icon: String,
		finishedIcon: String,
		description: String
	},

	data() {
		return {
			index: -1,
			lineInnerStyle: {}
		};
	},

	beforeCreate() {
		this.$parent.steps.push(this);
	},

	beforeDestroy() {
		const steps = this.$parent.steps;
		const index = steps.indexOf(this);
		if (index >= 0) {
			steps.splice(index, 1);
		}
	},

	computed: {
		// 后面处理横向文字 TODO:
		textDirection() {
			return this.$parent.textDirection;
		},
		isProcess() {
			return this.$parent.active + 1 == this.index;
		},
		isFinished() {
			return this.index >= 0 && this.index <= this.$parent.active;
		},
		// 完成时的图标
		__finishedIcon() {
			return this.finishedIcon || this.$parent.finishedIcon;
		},
		// 完成时的颜色
		finishColor() {
			return this.$parent.finishColor;
		},
		isCenter() {
			return this.$parent.alignCenter;
		},
		isVertical() {
			return this.$parent.direction === 'vertical';
		},
		isSimple() {
			return this.$parent.simple;
		},
		isDot() {
			return this.$parent.dot;
		},
		isStrip() {
			return this.$parent.strip;
		},
		isLast() {
			const parent = this.$parent;
			return parent.steps[parent.steps.length - 1] === this;
		},
		stepsCount() {
			return this.$parent.steps.length;
		},
		space() {
			const {
				isSimple,
				$parent: { space }
			} = this;
			return isSimple ? '' : space;
		}
	},

	methods: {
		calcProgress(val) {
			let step = 100; // line-inner 的动态宽度
			const style = {};
			style.transitionDelay = 150 * this.index + 'ms'; // 默认延迟
			if (val < this.index) {
				step = 0;
				style.transitionDelay = -150 * this.index + 'ms';
			}

			style.borderWidth = step && !this.isSimple ? '1px' : 0;
			this.$parent.direction === 'vertical'
				? (style.height = step + '%')
				: (style.width = step + '%');

			this.lineInnerStyle = style;
		},
		lineStyle() {
			// 如果是 vertical 模式,不处理，
			if (this.isVertical) return {};
			const titleHorizontal = this.$refs['titleHorizontal'];
			const stepIcon = this.$refs.stepIcon;
			const titleHorizontalWidth = !!titleHorizontal
				? titleHorizontal.offsetWidth
				: 0;
			const stepIconWidth = !!stepIcon ? stepIcon.offsetWidth : 0;
			const _offset = `${stepIconWidth + titleHorizontalWidth + 10}px`;
			return {
				left: !this.isCenter
					? _offset
					: this.textDirection == 'horizontal'
					? `calc(50% + ${_offset} - 10px)`
					: `calc(50% + 20px)`
			};
		},
		style() {
			const style = {};
			const parent = this.$parent;
			const len = parent.steps.length;

			if (!!this.isStrip) {
				style.flexBasis = `${100 / len}%`;
				if (this.$parent.active > this.index) {
					style.background = this.finishColor;
				}
			} else {
				const space =
					typeof this.space === 'number'
						? this.space + 'px'
						: this.space
						? this.space
						: 100 / (len - (this.isCenter ? 0 : 1)) + '%';
				style.flexBasis = space;
				if (this.isVertical) return style;
				if (this.isLast) {
					const titleHorizontal = this.$refs['titleHorizontal'];
					style.maxWidth = 100 / this.stepsCount + '%';
					// 如果最后一个是titleHorizontal模式，就加个宽度
					style.width = !!titleHorizontal
						? `${titleHorizontal.offsetWidth + 30}px`
						: 'auto';
				} else {
					style.marginRight = -this.$parent.stepOffset + 'px';
				}
			}
			return style;
		}
	},

	mounted() {
		const unwatch = this.$watch('index', (val) => {
			this.$watch('$parent.active', this.calcProgress, {
				immediate: true
			});
			unwatch();
		});
	}
};
</script>
