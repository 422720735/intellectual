<template>
    <div id="mapContent">
        <ul>
            <li class="addressList">
                <div class="title">办公地址</div>
                <div class="contentList">
                    <perfect-scrollbar
                        id="mapScroll"
                        watch-options
                        :options="{}"
                    >
                        <ul>
                            <li v-for="(_, index) in 52" :key="index">
                                表格中的数字表示支持该函数的第一个浏览器版本号。
                                "webkit" 或 "moz" 或 "o"
                                指定的数字为支持该函数的第一个版本号前缀
                            </li>
                        </ul>
                    </perfect-scrollbar>
                    <div class="filter"></div>
                    <div class="handleApply">
                        <el-button
                            size="mini"
                            type="primary"
                            :loading="loading"
                        >
                            向该网点申请
                        </el-button>
                    </div>
                </div>
            </li>
            <li class="rightMap"><baidu-map /></li>
        </ul>
    </div>
</template>

<script>
import BaiduMap from './baiduMap/baiduMap.vue'
export default {
    data() {
        return {
            loading: false
        }
    },
    components: {
        BaiduMap
    }
}
</script>

<style lang="scss" scoped>
$subColor: #666666;
#mapContent {
    margin-top: 20px;
    > ul {
        display: flex;
        .addressList {
            margin: 0 auto;
            width: 450px;
            .title {
                padding: 20px;
                border-bottom: solid 1px #cacdcc;
            }

            .contentList {
                position: relative;
                #mapScroll {
                    height: 600px;
                    ul {
                        margin-top: 20px;
                        padding-bottom: 80px;
                        min-height: 3000px;
                        > li {
                            margin-bottom: 40px;
                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
                .handleApply {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    background-color: #ffffff;
                    z-index: 101;
                }
                .filter {
                    position: absolute;
                    left: 0;
                    bottom: 22px;
                    z-index: 99;
                    width: 100%;
                    /*
                    background-image: linear-gradient(
                        -180deg,
                        rgba(255, 255, 255, 0) 0%,
                        #fff 70%
                    );
                    */

                    background: linear-gradient(
                        to top,
                        #fff,
                        rgb(255, 255, 255),
                        rgba(255, 255, 255, 0.2)
                    );
                    filter: blur(24px);
                    height: 70px;
                }
            }
        }
        .rightMap {
            flex: 1;
            background-color: orangered;
        }
    }
}
</style>
