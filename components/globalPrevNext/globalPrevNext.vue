<template>
    <div class="arrow-btn" :style="styles">
        <!--

                 visibility: hidden;
        visibility: visible;
                -->
        <div class="prev" v-if="prev" @click="handleLeft" :style="{ visibility: `${prevHidden ? 'visible' : 'hidden'}` }"></div>
        <div class="next" v-if="next" @click="handleRight" :style="{ visibility: `${nextHidden ? 'visible' : 'hidden'}` }"></div>
    </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Boolean,
            default() {
                return false
            }
        },
        prevHidden: {
            type: Boolean,
            default() {
                return true
            }
        },
        nextHidden: {
            type: Boolean,
            default() {
                return true
            }
        },
        next: {
            type: Boolean,
            default() {
                return false
            }
        },
        width: {
            type: Number,
            default() {
                return 50
            }
        },
        height: {
            type: Number,
            default() {
                return 50
            }
        },
        styles: {
            type: Object || String
        }
    },
    methods: {
        handleLeft() {
            this.$emit('left')
        },
        handleRight() {
            this.$emit('right')
        }
    }
}
</script>

<style lang="scss" scoped>
.arrow-btn {
    width: 50px;
    height: 50px;
    > .prev,
    > .next {
        position: relative;
        margin: 10% 0 0 10%;
        width: 80%;
        height: 80%;
        cursor: pointer;
        &::before {
            content: ' ';
            position: absolute;
            transform-origin: 0 100%;
            left: 25%;
            width: 3px;
            height: 50%;
            transform: translateX(-50%) rotate(30deg);
            transition: transform 0.3s, background-color 0.3s;
            background: #8b888b;
        }
        &::after {
            content: ' ';
            transform-origin: 0 0;
            position: absolute;
            transform: translateX(-50%) rotate(-30deg);
            transition: transform 0.3s, background-color 0.3s;
            left: 25%;
            top: 50%;
            width: 3px;
            height: 50%;
            background: #8b888b;
        }
        &:hover {
            &::before,
            &::after {
                background: #1990ea;
            }
            &::before {
                transform: translateX(-50%) rotate(45deg);
            }
            &::after {
                transform: translateX(-50%) rotate(-45deg);
            }
        }
    }
    > .next {
        transform: rotate(180deg);
    }
}
</style>
