<template>
    <div class="platLayouts">
        <div class="platTitle">
            <h1 class="title">{{ mainTitle || '' }}</h1>
            <a class="more" @click="more" v-if="moreTitle && !$slots.extra">
                {{ moreTitle || '' }}
                <i v-if="moreIcon" class="el-icon-d-arrow-right"></i>
            </a>
            <span class="more more-slot" v-if="$slots.extra">
                <slot name="extra">{{ moreTitle || '' }}</slot>
                <i v-if="moreIcon" class="el-icon-d-arrow-right"></i>
            </span>
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
        },
        moreIcon: {
            type: Boolean,
            default() {
                return true
            }
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
$primaryColor: #2f7deb;
$white: #ffffff;
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
            color: $primaryColor;
            &.more-slot {
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>
