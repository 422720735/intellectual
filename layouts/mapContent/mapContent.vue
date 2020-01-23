<template>
    <div id="mapContent">
        <ul>
            <li class="addressList">
                <div class="title">办公地址</div>
                <div class="contentList">
                    <div id="mapScroll">
                        <ul>
                            <li v-for="(_, index) in 52" :key="index">
                                表格中的数字表示支持该函数的第一个浏览器版本号。
                                "webkit" 或 "moz" 或 "o"
                                指定的数字为支持该函数的第一个版本号前缀
                            </li>
                        </ul>
                    </div>

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
            <li class="rightMap">right</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
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
                border-bottom: solid 1px $subColor;
            }

            .contentList {
                position: relative;
                #mapScroll {
                    height: 600px;
                    overflow-y: auto;
                }
                ul {
                    padding-bottom: 50px;
                    min-height: 3000px;
                    overflow: auto;
                }

                .handleApply {
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    z-index: 101;
                    padding-top: 40px;
                }
                .filter {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    z-index: 99;
                    width: 100%;
                    /*background: linear-gradient(*/
                    /*    to top,*/
                    /*    #fff,*/
                    /*    rgb(255, 255, 255),*/
                    /*    rgba(255, 255, 255, 0.2)*/
                    /*);*/
                    background-color: #ffffff;
                    filter: blur(25px);
                    height: 40px;
                }
            }
        }
        .rightMap {
            flex: 1;
        }
    }
}
</style>
