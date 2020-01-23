<template>
    <div class="product">
        <global-header />
        <login-nav />
        <div class="search">
            <div>
                <span class="sub"></span>
                <el-input
                    style="width: 330px"
                    v-model.trim="name"
                    size="mini"
                    clearable
                    placeholder="请输入金融产品名称"
                ></el-input>
                <el-select
                    clearable
                    style="width: 280px"
                    v-model="institutions"
                    size="mini"
                    placeholder="请选择金融机构"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <a-input-number
                    style="width: 280px"
                    v-model="money"
                    placeholder="请输入需要贷款的金额"
                    class="change"
                    size="small"
                    :min="0"
                    :max="100000"
                />
                <el-button size="mini" type="primary" :loading="loading">
                    查询
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
// import { InputNumber } from 'ant-design-vue'
// import { Button, Select, Option, Input } from 'element-ui'
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import 'ant-design-vue/lib/input-number/style/index.css'

export default {
    data() {
        return {
            loading: false,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            institutions: '',
            name: '',
            money: ''
        }
    },
    components: {
        // AInputNumber: InputNumber,
        // ElButton: Button,
        // ElSelect: Select,
        // ElOption: Option,
        // ElInput: Input,
        GlobalHeader,
        LoginNav
    }
}
</script>

<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
.product {
    background-color: #fbf8f9;
}
.ant-input-number.change {
    height: 28px;
    line-height: 28px;
}

.search {
    margin: 24px auto;
    width: 1200px;

    > div {
        display: flex;
        align-items: center;
        .sub {
            display: inline-block;
            width: 4px;
            height: 16px;
            margin-right: 10px;
            background-color: $primaryColor;
        }
        .el-input,
        .el-select,
        .change.ant-input-number {
            margin-right: 10px;
        }
    }
}
</style>
