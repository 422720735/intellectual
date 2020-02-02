<template>
    <a-locale-provider :locale="zhCN">
        <a-pagination
            class="limit"
            size="small"
            showQuickJumper
            :defaultCurrent="2"
            :total="500"
            @change="onChange"
        />
    </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN' // 中文
export default {
    data() {
        return {
            zhCN
        }
    },
    methods: {
        onChange() {
            this.$emit('change')
        }
    }
}
</script>

<style lang="scss">
$primaryColor: #2f7deb;
$white: #ffffff;
.limit.ant-pagination {
    display: flex;
    justify-content: flex-end;
    .ant-pagination-item-active {
        background-color: $primaryColor;
        > a {
            color: $white;
            background-color: $primaryColor;
        }
    }
}
</style>
