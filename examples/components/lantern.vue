<template>
	<!-- 灯笼容器 -->
	<div class="lantern">
		<!-- 提着灯笼的线 -->
		<div class="lantern-line"></div>
		<!-- 灯笼主要区域 -->
		<div class="lantern-light">
			<!-- 灯笼中间的线条 -->
			<div class="lantern-circle">
				<div class="lantern-rect">
					<!-- 灯笼中间的文字内容 -->
					<div class="lantern-text-l">新年</div>
					<div class="lantern-text">前端</div>
					<div class="lantern-text-r">快乐</div>
				</div>
			</div>
			<!-- 灯笼穗 -->
			<div class="lantern-tassel-top">
				<div class="lantern-tassel-middle"></div>
				<div class="lantern-tassel-bottom"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {};
	},
	computed: {},
	methods: {},
	mounted() {}
};
</script>

<style lang="less" scoped>
.lantern {
	position: fixed;
	top: 0;
	right: 50px;

	/* 提着灯笼的线的样式 */
	&-line {
		width: 2px;
		height: 50px;
		background-color: #dc8f03;
		position: absolute;
		left: 88px;
	}

	/* 灯笼中间红色区域 */
	&-light {
		position: relative;
		width: 120px;
		height: 90px;
		background-color: red;
		margin: 30px;
		border-radius: 50%;
		box-shadow: -5px 5px 50px 4px #fa6c00;
		/* 设置旋转点 */
		transform-origin: top center;
		animation: swing 3s infinite ease-in-out;

		/* 灯笼顶部和底部的样式 */
		&::before,
		&::after {
			content: '';
			position: absolute;
			border: 1px solid #dc8f03;
			width: 60px;
			height: 12px;
			/* 背景渐变 */
			background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
			left: 30px;
		}

		/* 顶部位置 */
		&::before {
			top: -7px;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}

		/* 底部位置 */
		&::after {
			bottom: -7px;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	}
	/* 灯笼中间的线条 */
	&-circle,
	&-rect {
		height: 90px;
		border-radius: 50%;
		border: 2px solid #dc8f03;
		background-color: rgba(216, 0, 15, 0.1);
	}

	/* 外层 */
	&-circle {
		width: 100px;
		margin: 12px 8px 8px 10px;
	}

	/* 内层 */
	&-rect {
		margin: -2px 8px 8px 26px;
		width: 45px;
		position: relative;
	}

	/* 文字样式 */
	&-text-l {
		position: absolute;
		top: 18px;
		left: -30px;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		color: #dc8f03;
		width: 34px;
	}
	&-text-r {
		position: absolute;
		top: 18px;
		right: -30px;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		color: #dc8f03;
		width: 34px;
	}
	&-text {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
		color: #dc8f03;
		margin-top: 4px;
	}

	/* 灯穗 */
	&-tassel-top {
		width: 5px;
		height: 20px;
		background-color: #ffa500;
		border-radius: 0 0 5px 5px;
		position: relative;
		margin: -5px 0 0 59px;
		/* 让灯穗也有一个动画效果 */
		animation: swing 3s infinite ease-in-out;
	}

	&-tassel-middle,
	&-tassel-bottom {
		position: absolute;
		width: 10px;
		left: -2px;
	}

	&-tassel-middle {
		border-radius: 50%;
		top: 14px;
		height: 10px;
		background-color: #dc8f03;
		z-index: 2;
	}

	&-tassel-bottom {
		background-color: #ffa500;
		border-bottom-left-radius: 5px;
		height: 35px;
		top: 18px;
		z-index: 1;
	}
}

/* 灯笼的动画效果 */
@keyframes swing {
	0% {
		transform: rotate(-6deg);
	}

	50% {
		transform: rotate(6deg);
	}

	100% {
		transform: rotate(-6deg);
	}
}
</style>
