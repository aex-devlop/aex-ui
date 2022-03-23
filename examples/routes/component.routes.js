export default {
	title: '组件',
	name: 'components',
	path: '/components/',
	component: () => import('../components/components'),
	children: [
		{
			title: '开发说明',
			group: [
				{
					title: '快速上手',
					name: 'guide',
					path: 'guide',
					component: () => import('../docs/guide.md')
				},
				{
					title: '国际化',
					name: 'i18n',
					path: 'i18n',
					component: () => import('../docs/i18n.md')
				},
				{
					title: '开发组件',
					name: 'dev',
					path: 'dev',
					component: () => import('../docs/dev.md')
				}
			]
		},
		// 基础组件
		{
			title: '基础组件',
			group: [
				{
					title: 'Transition 过渡动画',
					name: 'transition',
					path: 'transition',
					component: () => import('../docs/transition.md')
				},
				{
					title: '栅格布局',
					name: 'layout',
					path: 'layout',
					component: () => import('../docs/layout.md')
				},
				{
					title: '颜色/文字/阴影',
					name: 'color',
					path: 'color',
					component: () => import('../docs/color.vue')
				},
				{
					title: 'Text 文字',
					name: 'text',
					path: 'text',
					component: () => import('../docs/text.md')
				},
				{
					title: 'Icon 图标',
					name: 'icon',
					path: 'icon',
					component: () => import('../docs/icon.vue')
				},
				{
					title: 'Button',
					name: 'button',
					path: 'button',
					component: () => import('../docs/button.md')
				}
			]
		},
		// 表单
		{
			title: '表单',
			group: [
				{
					title: 'Input 输入框',
					name: 'input',
					path: 'input',
					component: () => import('../docs/input.md')
				},
				{
					title: 'InputNumber 计数器',
					name: 'input-number',
					path: 'input-number',
					component: () => import('../docs/input-number.md')
				},
				{
					title: 'Autocomplete 输入建议',
					name: 'autocomplete',
					path: 'autocomplete',
					component: () => import('../docs/autocomplete.md')
				},
				{
					title: 'Radio 单选框',
					name: 'radio',
					path: 'radio',
					component: () => import('../docs/radio.md')
				},
				{
					title: 'Checkbox 多选框',
					name: 'checkbox',
					path: 'checkbox',
					component: () => import('../docs/checkbox.md')
				},
				{
					title: 'Switch 开关',
					name: 'switch',
					path: 'switch',
					component: () => import('../docs/switch.md')
				},
				{
					title: 'Select 选择器',
					name: 'select',
					path: 'select',
					component: () => import('../docs/select.md')
				},
				{
					title: 'Cascader 级联选择',
					name: 'cascader',
					path: 'cascader',
					component: () => import('../docs/cascader.md')
				},
				{
					title: 'Slider 滑块',
					name: 'slider',
					path: 'slider',
					component: () => import('../docs/slider.md')
				},
				{
					title: 'TimePicker 时间选择器',
					name: 'time-picker',
					path: 'time-picker',
					component: () => import('../docs/time-picker.md')
				},
				{
					title: 'DatePicker 日期选择器',
					name: 'date-picker',
					path: 'date-picker',
					component: () => import('../docs/date-picker.md')
				},
				{
					title: 'DateTimePicker 日期时间选择器',
					name: 'datetime-picker',
					path: 'datetime-picker',
					component: () => import('../docs/datetime-picker.md')
				},
				{
					title: 'Upload 上传',
					name: 'upload',
					path: 'upload',
					component: () => import('../docs/upload.md')
				},
				{
					title: 'Form 表单',
					name: 'form',
					path: 'form',
					component: () => import('../docs/form.md')
				}
			]
		},
		// 数据展示
		{
			title: '数据展示',
			group: [
				{
					title: 'Avatar 头像',
					name: 'avatar',
					path: 'avatar',
					component: () => import('../docs/avatar.md')
				},
				{
					title: 'Image 图片',
					name: 'image',
					path: 'image',
					component: () => import('../docs/image.md')
				},
				// {
				// 	title: 'Carousel 轮播图',
				// 	name: 'carousel',
				// 	path: 'carousel',
				// 	component: () => import('../docs/carousel.md')
				// },
				{
					title: 'Steps 步骤条',
					name: 'steps',
					path: 'steps',
					component: () => import('../docs/steps.md')
				},
				{
					title: 'Dropdown 下拉菜单',
					name: 'dropdown',
					path: 'dropdown',
					component: () => import('../docs/dropdown.md')
				},
				{
					title: 'Tabs 标签页',
					name: 'tabs',
					path: 'tabs',
					component: () => import('../docs/tabs.md')
				},
				{
					title: 'Menu 导航菜单',
					name: 'menu',
					path: 'menu',
					component: () => import('../docs/menu.md')
				},
				{
					title: 'Breadcrumb 面包屑',
					name: 'breadcrumb',
					path: 'breadcrumb',
					component: () => import('../docs/breadcrumb.md')
				},
				{
					title: 'Tag 标签',
					name: 'tag',
					path: 'tag',
					component: () => import('../docs/tag.md')
				},
				{
					title: 'Pagination 分页',
					name: 'pagination',
					path: 'pagination',
					component: () => import('../docs/pagination.md')
				},
				{
					title: 'Table 表格',
					name: 'table',
					path: 'table',
					component: () => import('../docs/table.md')
				},
				{
					title: 'Progress 进度条',
					name: 'progress',
					path: 'progress',
					component: () => import('../docs/progress.md')
				}
			]
		},
		// 提示/反馈
		{
			title: '提示/反馈',
			group: [
				{
					title: 'Toast 提示',
					name: 'toast',
					path: 'toast',
					component: () => import('../docs/toast.md')
				},
				{
					title: 'Loading 加载',
					name: 'loading',
					path: 'loading',
					component: () => import('../docs/loading.md')
				},
				{
					title: 'Tooltip 文字提示',
					name: 'tooltip',
					path: 'tooltip',
					component: () => import('../docs/tooltip.md')
				},
				{
					title: 'Alert 提示/警告',
					name: 'alert',
					path: 'alert',
					component: () => import('../docs/alert.md')
				},
				{
					title: 'Popover 弹出框',
					name: 'popover',
					path: 'popover',
					component: () => import('../docs/popover.md')
				},
				{
					title: 'Message 消息提示',
					name: 'message',
					path: 'message',
					component: () => import('../docs/message.md')
				},
				{
					title: 'Notification 通知',
					name: 'notification',
					path: 'notification',
					component: () => import('../docs/Notification.md')
				},
				{
					title: 'MessageBox 提示弹框',
					name: 'message-box',
					path: 'message-box',
					component: () => import('../docs/message-box.md')
				},
				{
					title: 'Dialog 模态对话框',
					name: 'dialog',
					path: 'dialog',
					component: () => import('../docs/dialog.md')
				},
				{
					title: 'Collapse 折叠面板',
					name: 'collapse',
					path: 'collapse',
					component: () => import('../docs/collapse.md')
				}
			]
		},
		// 业务组件
		{
			title: '业务组件',
			group: [
				{
					title: 'Empty 空数据',
					name: 'empty',
					path: 'empty',
					component: () => import('../docs/empty.md')
				},
				{
					title: 'LoadMore 加载更多',
					name: 'load-more',
					path: 'load-more',
					component: () => import('../docs/load-more.md')
				}
			]
		},
		// 其他
		{
			title: '其他',
			group: [
				{
					title: 'Backtop 回到顶部',
					name: 'backtop',
					path: 'backtop',
					component: () => import('../docs/backtop.md')
				},
				{
					title: 'InfiniteScroll 无限滚动',
					name: 'infinite-scroll',
					path: 'infinite-scroll',
					component: () => import('../docs/infinite-scroll.md')
				},
				{
					title: 'Scrollbar 滚动条',
					name: 'Scrollbar',
					path: 'Scrollbar',
					component: () => import('../docs/Scrollbar.md')
				},
				{
					title: 'Skeleton 骨架屏',
					name: 'skeleton',
					path: 'skeleton',
					component: () => import('../docs/skeleton.md')
				},
				{
					title: 'Clickoutside 元素外点击',
					name: 'clickoutside',
					path: 'clickoutside',
					component: () => import('../docs/clickoutside.md')
				}
			]
		},
		// 工具函数
		{
			title: '工具函数',
			group: [
				{
					title: 'Dom 相关',
					name: 'dom',
					path: 'dom',
					component: () => import('../docs/utils/dom.md')
				},
				{
					title: 'Number 相关',
					name: 'number',
					path: 'number',
					component: () => import('../docs/utils/number.md')
				},
				{
					title: 'OS 平台相关',
					name: 'os',
					path: 'os',
					component: () => import('../docs/utils/os.md')
				},
				{
					title: '其它',
					name: 'other',
					path: 'other',
					component: () => import('../docs/utils/other.md')
				}
			]
		}
	]
};
