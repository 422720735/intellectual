<template>
    <div class="platLayouts">
        <div class="platTitle">
            <h1 class="title">{{ mainTitle || '' }}</h1>
            <a class="more" @click="more">
                {{ moreTitle || '' }}
                <i class="el-icon-d-arrow-right"></i>
            </a>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        mainTitle: {
            type: String
        },
        moreTitle: {
            type: String
        }
    },
    methods: {
        more() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.platLayouts {
    width: 1200px;
    margin: 0 auto;
    .platTitle {
        position: relative;
        margin-bottom: 32px;
        .title {
            text-align: center;
            font-size: 28px;
        }
        .more {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(50%);
            cursor: pointer;
            color: #347ce1;
        }
    }
}
</style>
