<template>
    <div
        class="min_title"
        :class="[isBold && 'is-bold', borderBottom && 'borderBottom']"
    >
        <div class="left">
            <div class="inlineBlock one"></div>
            <div class="inlineBlock two" v-if="subTitle">{{ subTitle }}</div>
        </div>
        <div class="right" v-if="moreTitle">{{ moreTitle }}</div>
    </div>
</template>

<script>
export default {
    props: {
        subTitle: {
            type: String
        },
        moreTitle: {
            type: String
        },
        isBold: {
            type: Boolean,
            default() {
                return false
            }
        },
        borderBottom: {
            type: Boolean,
            default() {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.min_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.borderBottom {
        padding-bottom: 12px;
        border-bottom: solid 1px #cdcbce;
    }
    > div.left {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        > div.one {
            display: block;
            width: 6px;
            height: 18px;
            vertical-align: middle;
            background-color: $primaryColor;
        }

        > div.two {
            vertical-align: middle;
            display: block;
            height: 18px;
            line-height: 18px;
            margin-left: 10px;
            font-weight: bold;
        }
    }
    > div.right {
        font-size: 12px;
        color: #8b888b;
    }
}

.min_title.is-bold {
    > div.left {
        font-size: 28px;
        > div.one {
            height: 28px;
        }
    }
    > div.right {
        font-size: 20px;
    }
}
</style>
