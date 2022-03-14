# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 按需引入

```
import { Form } from 'aex-ui';
Vue.use(Form)
```

### 基础表单

在 Form 组件中，每一个表单元素都必须用 `Form-Item` 包裹.   
`label-position` 属性可以改变表单标签的对齐方式，可选值为 `top、left、right` , 默认 `right` , 一般情况表单的标签字符数不会相同，我们会通过 `label-width` 设置表单标签的宽度来配合对齐的设置。   
`size` 属性可以统一改变表单内元素的尺寸, 在 `Form` 组件上设置可以使整个表单统一改变，也可以在 `Form-Item` 上设置改变单个组件的大小

:::demo

```html
    <aex-row style='marginBottom:14px'>
        <aex-col :span='8'>
            <aex-radio-group v-model="labelPosition" size="small">
                <aex-radio-button label="left">左对齐</aex-radio-button>
                <aex-radio-button label="right">右对齐</aex-radio-button>
                <aex-radio-button label="top">顶部对齐</aex-radio-button>
            </aex-radio-group>
        </aex-col>
        <aex-col :span='8'>
            <aex-radio-group v-model="formSize" size="small">
                <aex-radio-button label="">默认</aex-radio-button>
                <aex-radio-button label="medium">medium</aex-radio-button>
                <aex-radio-button label="small">small</aex-radio-button>
                <aex-radio-button label="mini">mini</aex-radio-button>
            </aex-radio-group>
        </aex-col>
    </aex-row>
    <div style='width:400px'>
        <aex-form ref="form" :label-position="labelPosition" :size='formSize' :model="form" label-width="80px">
            <aex-form-item label="输入框">
                <aex-input v-model="form.input"></aex-input>
            </aex-form-item>
            <aex-form-item label="下拉选择">
                <aex-select v-model="form.select" placeholder="请选择选择">
                    <aex-option label="选择1" value="选择1"></aex-option>
                    <aex-option label="选择2" value="选择2"></aex-option>
                </aex-select>
            </aex-form-item>
            <aex-form-item label="日期时间">
                <aex-row>
                    <aex-col :span="11">
                        <aex-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></aex-date-picker>
                    </aex-col>
                    <aex-col class="line" :span="2" style='textAlign:center'>--</aex-col>
                    <aex-col :span="11">
                        <aex-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></aex-time-picker>
                    </aex-col>
                </aex-row>
            </aex-form-item>
            <aex-form-item label="切换滑块">
                <aex-switch v-model="form.switch"></aex-switch>
            </aex-form-item>
            <aex-form-item label="多选框">
                <aex-checkbox-group v-model="form.checks">
                    <aex-checkbox label="多选框1" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框2" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框3" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框4" name="checks"></aex-checkbox>
                </aex-checkbox-group>
            </aex-form-item>
            <aex-form-item label="单选">
                <aex-radio-group v-model="form.radio">
                    <aex-radio label="单选1"></aex-radio>
                    <aex-radio label="单选2"></aex-radio>
                </aex-radio-group>
            </aex-form-item>
            <aex-form-item label="多文字">
                <aex-input type="textarea" v-model="form.textarea"></aex-input>
            </aex-form-item>
            <aex-form-item>
                <aex-button type="primary" @click="onSubmit">提交</aex-button>
                <aex-button>取消</aex-button>
            </aex-form-item>
        </aex-form>
    </div>
    <script>
        export default {
            data() {
                return {
                    labelPosition: 'left',
                    formSize: '',
                    form: {
                        input: '',
                        select: '',
                        date1: '',
                        date2: '',
                        switch: false,
                        checks: [],
                        radio: '',
                        textarea: ''
                    }
                }
            },
            methods: {
                onSubmit() {
                    console.log('表单提交数据：', this.form);
                }
            }
        }
    </script>
```

:::

### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。   
设置 `inline` 属性可以让表单域变为行内的表单域
:::demo 

```html
<aex-form inline :model="form" class="demo-form-inline">
    <aex-form-item label="输入框">
        <aex-input v-model="form.input" clearable></aex-input>
    </aex-form-item>
    <aex-form-item label="下拉选择">
        <aex-select v-model="form.select" placeholder="请选择选择" clearable>
            <aex-option label="选择1" value="选择1"></aex-option>
            <aex-option label="选择2" value="选择2"></aex-option>
        </aex-select>
    </aex-form-item>
    <aex-form-item>
        <aex-button type="primary" @click="onSubmit">查询</aex-button>
    </aex-form-item>
</aex-form>
<script>
    export default {
        data() {
            return {
                form: {
                    input: '',
                    select: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('表单提交数据：', this.form);
            }
        }
    }
</script>
```

:::

### 表单验证

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名即可。   
校验规则参见 页面底部常用验证 或[async-validator](https://github.com/yiminghe/async-validator)

:::demo 

```html
    <div style='width:400px'>
        <aex-form ref="form" :model="form" :rules="rules" label-width="100px">
            <aex-form-item label="输入框" prop="input">
                <aex-input v-model="form.input"></aex-input>
            </aex-form-item>
            <aex-form-item label="下拉选择" prop="select">
                <aex-select v-model="form.select" placeholder="请选择选择">
                    <aex-option label="选择1" value="选择1"></aex-option>
                    <aex-option label="选择2" value="选择2"></aex-option>
                </aex-select>
            </aex-form-item>
            <aex-form-item label="日期时间" required>
                <aex-row>
                    <aex-col :span="11">
                        <aex-form-item prop="date1">
                            <aex-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></aex-date-picker>
                        </aex-form-item>
                    </aex-col>
                    <aex-col class="line" :span="2" style='textAlign:center'>--</aex-col>
                    <aex-col :span="11">
                        <aex-form-item prop="date2">
                            <aex-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></aex-time-picker>
                        </aex-form-item>
                    </aex-col>
                </aex-row>
            </aex-form-item>
            <aex-form-item label="切换滑块">
                <aex-switch v-model="form.switch"></aex-switch>
            </aex-form-item>
            <aex-form-item label="多选框" prop="checks">
                <aex-checkbox-group v-model="form.checks">
                    <aex-checkbox label="多选框1" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框2" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框3" name="checks"></aex-checkbox>
                    <aex-checkbox label="多选框4" name="checks"></aex-checkbox>
                </aex-checkbox-group>
            </aex-form-item>
            <aex-form-item label="单选" prop="radio">
                <aex-radio-group v-model="form.radio">
                    <aex-radio label="单选1"></aex-radio>
                    <aex-radio label="单选2"></aex-radio>
                </aex-radio-group>
            </aex-form-item>
            <aex-form-item label="多文字" prop="textarea">
                <aex-input type="textarea" v-model="form.textarea"></aex-input>
            </aex-form-item>
            <aex-form-item>
                <aex-button type="primary" @click="onSubmit">提交</aex-button>
                <aex-button @click='resetForm'>重置</aex-button>
            </aex-form-item>
        </aex-form>
    </div>
    <script>
        export default {
            data() {
                return {
                    form: {
                        input: '',
                        select: '',
                        date1: '',
                        date2: '',
                        switch: false,
                        checks: [],
                        radio: '',
                        textarea: ''
                    },
                    rules: {
                        input: [{
                                required: true,
                                message: '内容不能为空！',
                                trigger: 'blur'
                            },
                            {
                                min: 3,
                                max: 5,
                                message: '长度在 3 到 5 个字符',
                                trigger: 'blur'
                            }
                        ],
                        select: [{
                            required: true,
                            message: '内容不能为空！',
                            trigger: 'blur'
                        }],
                        date1: [{
                            type: 'date',
                            required: true,
                            message: '请选择日期',
                            trigger: 'change'
                        }],
                        date2: [{
                            type: 'date',
                            required: true,
                            message: '请选择时间',
                            trigger: 'change'
                        }],
                        checks: [{
                            type: 'array',
                            required: true,
                            message: '内容不能为空！',
                            trigger: 'change'
                        }],
                        radio: [{
                            required: true,
                            message: '内容不能为空！',
                            trigger: 'change'
                        }],
                        textarea: [{
                            required: true,
                            message: '内容不能为空！',
                            trigger: 'blur'
                        }]
                    }
                };
            },
            methods: {
                onSubmit() {
                    this.$refs.form.validate((valid) => {
                        if (valid) {
                            // this.$message.success('验证通过！')
                        } else {
                            // this.$message.error('验证错误！')
                            return false;
                        }
                    });
                },
                resetForm(formName) {
                    this.$refs.form.resetFields();
                }
            }
        }
    </script>
```

:::

### 自定义校验规则

rules 里面用 `validator` 属性自定义验证函数, callback必须被调用，更多高级用法可参考 页面底部常用验证 或 [async-validator](https://github.com/yiminghe/async-validator)。      
`status-icon` 属性为输入框添加了表示校验结果的反馈图标。

:::demo

```html
<aex-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" style='width:400px'>
    <aex-form-item label="密码" prop="pass">
        <aex-input type="password" v-model="ruleForm.pass" autocomplete="off"></aex-input>
    </aex-form-item>
    <aex-form-item label="确认密码" prop="checkPass">
        <aex-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></aex-input>
    </aex-form-item>
    <aex-form-item label="年龄" prop="age">
        <aex-input v-model.number="ruleForm.age"></aex-input>
    </aex-form-item>
    <aex-form-item>
        <aex-button type="primary" @click="submitForm('ruleForm')">提交</aex-button>
        <aex-button @click="resetForm('ruleForm')">重置</aex-button>
    </aex-form-item>
</aex-form>
<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                    age: [{
                        validator: checkAge,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // this.$message.success('验证通过！')
                    } else {
                        // this.$message.error('验证错误！')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
```

:::

### 数字类型验证

当需要验证的表单元素较少时， `rules` 规则也可以直接绑定在 Form-Item 组件上, 尤其在动态增加表单而且需要验证时，比较有用，可以看下个示例【动态增减表单项】      
数字类型的验证需要在 aex-input组件 `v-model` 处加上 `.number` 的修饰符，这是 `Vue` 自身提供的用于将绑定值转化为 `number` 类型的修饰符。
:::demo 

```html
<aex-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" style='width:400px'>
    <aex-form-item label="年龄" prop="age" :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]">
        <aex-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></aex-input>
    </aex-form-item>
    <aex-form-item>
        <aex-button type="primary" @click="submitForm('numberValidateForm')">提交</aex-button>
        <aex-button @click="resetForm('numberValidateForm')">重置</aex-button>
    </aex-form-item>
</aex-form>
<script>
    export default {
        data() {
            return {
                numberValidateForm: {
                    age: ''
                },

            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message.success('验证通过！')
                    } else {
                        this.$message.error('验证错误！')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
```

:::

### 动态增减表单项

:::demo

```html
<aex-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" style='width:600px'>
    <aex-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
        <aex-input v-model="dynamicValidateForm.email"></aex-input>
    </aex-form-item>
    <aex-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }">
        <aex-col :span='18'>
            <aex-input v-model="domain.value"></aex-input>
        </aex-col>
        <aex-col :span='6' align='right'>
            <aex-button type='outline' size='mini' @click="removeDomain(domain)">删除</aex-button>
        </aex-col>
    </aex-form-item>
    <aex-form-item>
        <aex-button type="primary" @click="submitForm('dynamicValidateForm')">提交</aex-button>
        <aex-button icon='aex-icon-plus' @click="addDomain">新增域名</aex-button>
        <aex-button @click="resetForm('dynamicValidateForm')">重置</aex-button>
    </aex-form-item>
</aex-form>
<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
</script>
```

:::

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string |  right/left/top            | right |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto` 。 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| hide-required-asterisk | 是否显示必填字段的标签旁边的红色星号 | boolean | — | false |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 是否以行内形式展示校验信息 | boolean | — | false |
| status-icon  | 是否在输入框中显示校验结果反馈图标 | boolean | — | false |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | — | true |
| size  | 用于控制该表单内组件的尺寸 | string | medium / small / mini | — |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分表单字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)

### Form Events

| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 `auto` 。 | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为 `error` ，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 以行内形式展示校验信息 | boolean | — | false |
| size  | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | - |

### Form-Item Slot

| name | 说明 |
|------|--------|
| — | Form Item 的内容 |
| label | 标签文本的内容 |

### Form-Item Scoped Slot

|  name  |   说明  |
|--------|--------|
|  error | 自定义表单校验信息的显示方式，参数为 { error } |

### Form-Item Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -
| clearValidate | 移除该表单项的校验结果 | -

### 常用验证

```
type: string,number,boolean,method,regexp,integer,float,array,object,enum,date,url,hex,email,any
pattern:需要验证的正则表达式
len: 字符串或数组的长度验证

{required: true,message: '不能为空！',trigger: 'blur'}
{type: 'date',required: true,message: '请选择日期',trigger: 'change'}
{type: 'email',message: 'Email格式错误',trigger: 'blur'}
{type: 'enum', enum: ['admin', 'user', 'guest'] }
{type: 'string', pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ }

```
