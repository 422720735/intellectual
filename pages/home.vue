<template>
    <div class="home">
        <global-header />
        <login-nav />
        <!--轮播-->
        <div class="carousel">
            <img src="~/static/images/top1.png" />
        </div>
        <ul class="information">
            <li>
                <div class="clear">
                    <img class="fl" src="~/static/images/information1.png" />
                    <div class="fl">
                        <h4>RayBaaS区块链平台技术支持</h4>
                        <h6>企业资料，申贷文件实时上链，数据不可篡改，信息追踪溯源</h6>
                    </div>
                </div>
            </li>
            <li>
                <div class="clear">
                    <img class="fl" src="~/static/images/information1.png" />
                    <div class="fl">
                        <h4>RayBaaS区块链平台技术支持</h4>
                        <h6>企业资料，申贷文件实时上链，数据不可篡改，信息追踪溯源</h6>
                    </div>
                </div>
            </li>
        </ul>
        <plat-layouts main-title="热门金融产品" more-title="更多金融产品" @click="handleDetails">
            <div>
                <ul class="productList">
                    <li>
                        <sub-title sub-title="知来贷" more-title="银行" is-bold />
                        <div class="word_bg">
                            <div class="money">1000万以内</div>
                            <div class="modified">——</div>
                            <div class="rate">利率：最高不超过5%</div>
                            <div class="sologan">
                                服务小微企业，企业融资成本低；快速审批，放款便捷，满足小微企业融资短、频、快、急的需求；帮助轻资产科技企业利用知识产权获得贷款。
                            </div>
                        </div>
                        <div class="footer">
                            <span class="date">2019-01-01~2024-01-01</span>
                            <span class="year">还款年限:1年</span>
                        </div>
                    </li>
                    <li>
                        <sub-title sub-title="知来贷" more-title="银行" is-bold />
                    </li>
                    <li>
                        <sub-title sub-title="知来贷" more-title="银行" is-bold />
                    </li>
                </ul>
            </div>
        </plat-layouts>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
</template>

<script>
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import PlatLayouts from '~/layouts/platLayouts/platLayouts.vue'
import SubTitle from '~/components/subTitle/subTitle.vue'
export default {
    methods: {
        handleDetails() {
            alert(12)
        }
    },
    components: {
        GlobalHeader,
        PlatLayouts,
        LoginNav,
        SubTitle
    }
}
</script>

<style lang="scss">
.home {
    background-color: #fbf8f9;
    .carousel {
        width: 100%;
        max-width: 100%;
        min-width: 1200px;
        img {
            width: 100%;
        }
    }
    .information {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 58px;
        width: 1200px;
        height: 114px;
        margin: 0 auto;
        border-radius: 94px;
        transform: translateY(-30px);
        background-color: #ffffff;
        box-shadow: 3px 5px 5px -2px #f1eff2;
        li {
            > div {
                img {
                    width: 54px;
                    height: 68px;
                    margin-right: 20px;
                }
            }
            &:first-child > div {
                &:after {
                    float: left;
                    display: inline-block;
                    content: '';
                    width: 4px;
                    height: 56px;
                    background-color: #cfcccf;
                    margin-left: 36px;
                }
            }
        }
    }
    .productList {
        display: flex;
        justify-content: space-between;
        > li {
            width: 385px;
            padding: 20px;
            border-radius: 4px;
            background-color: #ffffff;
            .word_bg {
                display: block;
                margin-top: 100px;

                .money {
                    color: #fe683a;
                    font-size: 40px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .modified {
                    color: #dad7db;
                }

                .rate {
                    font-size: 22px;
                    color: black;
                    margin-top: 10px;
                    font-weight: bold;
                }

                .sologan {
                    font-size: 18px;
                    color: #2f7deb;
                    margin-bottom: 20px;
                    margin-top: 25px;
                    height: 90px;
                    text-align: center;
                }

                > div {
                    text-align: center;
                }
            }
            .footer {
                margin-top: 20px;
                overflow: hidden;
                border-top: 1px #d5d6d6 solid;
                display: flex;
                justify-content: space-between;
                > span {
                    margin-top: 8px;
                    color: #757475;
                }
            }
        }
    }
}
</style>
