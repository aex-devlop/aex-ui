    <div id="color">
        <h2>Color 颜色/文字/阴影</h2>
        <aex-text>整理了常用的颜色</aex-text>
        <h3>主色调/品牌色</h3>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in primary"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>

        <h3>灰色系</h3>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in gray"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>

        <h3>辅助色</h3>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in success"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in info"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in warning"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>
        <div class="color-group">
            <div
                class="color-item"
                :style="{ background: v[0], color: v[1] }"
                v-for="(v, k) in danger"
                :key="k"
                @click="_onCopy(k)"
            >
                <div>{{ v[0] }}</div>
                <div>{{ k }}</div>
            </div>
        </div>

        <h3>阴影 Box-shadow</h3>
        <div class="color-group">
            <div class="shadow-item shadow1" @click="_onCopy(k)">
                <b>@--box-shadow-1</b><i> 0 1px 6px rgba(@--color-gray-dark-1, 10%)</i
                ><span>S1基础投影，应用于默认状态的卡片、导航栏、组件里局部投影等。</span>
            </div>
            <div class="shadow-item shadow2" @click="_onCopy(k)">
                <b>@--box-shadow-2</b><i>0 4px 12px rgba(@--color-gray-dark-1,10%)</i>
                <span>S2是升起投影，应用于悬停状态的卡片等，是S1的激活态。</span>
            </div>
            <div class="shadow-item shadow3" @click="_onCopy(k)">
                <b>@--box-shadow-3</b><i>0 6px 18px rgba(@--color-gray-dark-1,12%)</i
                ><span>S3是覆盖投影，应用于信息提示等投影。</span>
            </div>
            <div class="shadow-item shadow4" @click="_onCopy(k)">
                <b>@--box-shadow-4</b><i>0 10px 32px rgba(@--color-gray-dark-1,24%)</i
                ><span>S4是弹出投影，应用于模态弹窗投影。</span>
            </div>
        </div>
    </div>

<script>
import copy from 'copy-to-clipboard'; 
export default {

    name: 'color',
    data() {
        return {
            primary: {
                '@--color-primary-dark-2': ['#2A62CE', '#FFF'],
                '@--color-primary-dark-1': ['#306FE9', '#FFF'],
                '@--color-primary': ['#409EFF', '#FFF'],
                '@--color-primary-light-1': ['#99BBFF', '#FFF'],
                '@--color-primary-light-2': ['#EAF1FF', '#697384'],
                '@--color-primary-light-3': ['#F3F7FF', '#697384'],
                '@--color-primary-light-4': ['#FAFBFD', '#697384'],
            },
            gray: {
                '@--color-gray-dark-2': ['#0C1627', '#FFF'],
                '@--color-gray-dark-1': ['#111D30', '#FFF'],
                '@--color-gray': ['#3E495C', '#FFF'],
                '@--color-gray-light-1': ['#697384', '#FFF'],
                '@--color-gray-light-2': ['#99A1B1', '#FFF'],
                '@--color-gray-light-3': ['#C7CBD5', '#3E495C'],
                '@--color-gray-light-4': ['#DBDEE6', '#3E495C'],
                '@--color-gray-light-5': ['#ECEDF0', '#3E495C'],
                '@--color-gray-light-6': ['#F6F7F9', '#3E495C'],
                '@--color-white': ['#FFFFFF', '#697384'],
            },
            success: {
                '@--color-success': ['#3AB293', '#FFF'],
                '@--color-success-light-1': ['#B2E8DD', '#3AB293'],
                '@--color-success-light-2': ['#EBF7F4', '#3AB293'],
            },
            info: {
                '@--color-info': ['#3378FF', '#FFF'],
                '@--color-info-light-1': ['#C1D6FF', '#3378FF'],
                '@--color-info-light-2': ['#EAF1FF', '#3378FF'],
            },
            warning: {
                '@--color-warning': ['#FA6400', '#FFF'],
                '@--color-warning-light-1': ['#FDD0B2', '#FA6400'],
                '@--color-warning-light-2': ['#FEEFE5', '#FA6400'],
            },
            danger: {
                '@--color-danger': ['#E5575A', '#FFF'],
                '@--color-danger-light-1': ['#F7CCCD', '#E5575A'],
                '@--color-danger-light-2': ['#FCEEEE', '#E5575A'],
            },
        };
    },
    methods: {
        _onCopy(txt) {
            copy(txt);
            this.$message.success('已复制到剪贴板！');
        },
    },

}; 
</script>

<style lang="less" scope>
@import 'packages/theme/src/common/var.less'; 
#color {

    h3 {
        margin-top: 50px;
    }
    .color-group {
        display: flex;
        flex-wrap: wrap;

        .color-item {
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            width: 200px;
            height: 80px;
            padding: 10px;
            color: #fff;
            margin-right: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            border-radius: 5px;
            box-shadow: @--box-shadow-1;
            cursor: pointer;
            &:hover {
                box-shadow: @--box-shadow-2;
            }
        }
        .shadow-item {
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            width: 300px;
            height: 120px;
            padding: 10px;
            color: @--color-gray;
            margin-right: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            &.shadow1 {
                box-shadow: @--box-shadow-1;
                &:hover {
                    box-shadow: @--box-shadow-2;
                }
            }
            &.shadow2 {
                box-shadow: @--box-shadow-2;
            }
            &.shadow3 {
                box-shadow: @--box-shadow-3;
            }
            &.shadow4 {
                box-shadow: @--box-shadow-4;
            }
            i {
                line-height: 2;
            }
            span {
                color: @--color-gray-light-2;
            }
        }
    }

}
</style>
