<template>
    <div id="applyFor">
        <global-header />
        <login-nav />
        <div class="applyHead">
            <h1 class="name fl">知来贷</h1>
            <div class="bank fr">1223</div>
            <div class="clear"></div>
            <h4 class="sub-title">
                专为中小企业量身打造的，让企业融资更多更快
            </h4>
            <h4 class="max-money">
                最高
                <span>1000</span>
                万
            </h4>
            <h4 class="interest">
                利率
                <span>8%-10%</span>
            </h4>
        </div>
        <div class="accept">
            <sub-title sub-title="请选择受理机构" :border-bottom="false" />
            <map-content />
        </div>
        <div class="news-product">
            <div class="news">
                <sub-title sub-title="办理条件" :border-bottom="false" />
                <ul>
                    <li
                        v-for="(items, key) in productList[0].dealConditions"
                        :key="key"
                    >
                        <p>{{ items }}</p>
                    </li>
                </ul>
            </div>
            <div class="product">
                <a-card
                    :bordered="false"
                    :bodyStyle="{ padding: '0 20px' }"
                    :headStyle="{ border: 'none' }"
                >
                    <sub-title
                        :border-bottom="false"
                        slot="title"
                        sub-title="热门金融产品"
                    ></sub-title>
                    <nuxt-link slot="extra" :to="{ name: 'product' }">
                        更多金融产品
                    </nuxt-link>
                    <ul class="productList">
                        <li v-for="(item, i) in productList" :key="i">
                            <sub-title
                                :sub-title="item.name"
                                :more-title="item.bank"
                                is-bold
                            />
                            <div class="word_bg">
                                <div class="money">{{ item.totalMoney }}</div>
                                <div class="modified">——</div>
                                <div class="rate">{{ item.rate }}</div>
                                <div class="sologan">
                                    <el-button
                                        round
                                        size="small"
                                        type="primary"
                                        :loading="loading"
                                    >
                                        我要申请
                                    </el-button>
                                </div>
                            </div>
                            <div class="footer">
                                <span class="date">{{ item.date }}</span>
                                <span class="year">{{ item.year }}</span>
                            </div>
                        </li>
                    </ul>
                </a-card>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import MapContent from '~/layouts/mapContent/mapContent.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import SubTitle from '~/components/subTitle/subTitle.vue'
export default {
    data() {
        return {
            productList: [
                {
                    name: '中银智慧通宝',
                    bank: '中国银行',
                    totalMoney: '1000万以内',
                    rate: '利率：最高不超过5%',
                    date: '2019-01-01~2024-01-01',
                    year: '还款年限:1年',
                    des:
                        '服务小微企业，企业融资成本低；快速审批，放款便捷，满足小微企业融资短、频、快、急的需求；帮助轻资产科技企业利用知识产权获得贷款。',
                    dealConditions: [
                        '（一）符合国家产业政策和中国银行信贷政策',
                        '（二）在成都注册的具有较高的高新技术和市场前景的科技型中小微企业',
                        '（三）企业或企业的实际控制人、股东拥有经官方认证、权属清晰且在有效期内的知识产权',
                        '（四）企业当前贷款银行原则上不超过三家',
                        '（五）企业及实际控制人信用记录良好，未列入人民法院失信被执行人名单、严重违法失信企业名单'
                    ]
                }
            ],
            loading: false
        }
    },
    components: {
        GlobalHeader,
        MapContent,
        SubTitle,
        LoginNav
    }
}
</script>

<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
$mainBgColor: #f9f9f9;
$mainColor2: #1a1a1a;
$subColor: #666666;
$warningColor: #f58b3b;
#applyFor {
    > .applyHead {
        margin: 12px auto;
        padding: 20px;
        width: 1200px;
        box-sizing: border-box;
        border-radius: 11px;
        background-color: $white;
        .name {
            font-size: 28px;
            font-weight: bold;
            color: $mainColor2;
        }
        .sub-title {
            display: inline-block;
            color: $subColor;
        }
        .max-money {
            display: inline-block;
            margin: 0 110px;
            color: $subColor;
            span {
                font-size: 30px;
                color: $primaryColor;
            }
        }
        .interest {
            display: inline-block;
            color: $subColor;
            span {
                font-size: 18px;
                color: $warningColor;
            }
        }
    }
    > .accept {
        margin: 0 auto;
        padding: 20px;
        width: 1200px;
        box-sizing: border-box;
        border-radius: 11px;
        background-color: $white;
    }
    > .news-product {
        display: flex;
        margin: 12px auto 0 auto;
        width: 1200px;
        > .news {
            width: 765px;
            padding: 12px 20px;
            border-radius: 11px;
            background-color: $white;
            .min_title {
                margin-bottom: 17px;
            }
            .min_title + ul {
                font-size: 16px;
                color: $subColor;
                li {
                    margin-bottom: 20px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
        > .product {
            margin-left: 10px;
            flex: 1;
            .productList {
                > li {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 20px;
                    border-radius: 4px;
                    background-color: $white;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    margin-bottom: 10px;

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
                            font-weight: bold;
                            color: #dad7db;
                        }

                        .rate {
                            font-size: 22px;
                            color: $mainColor2;
                            margin-top: 10px;
                            font-weight: bold;
                        }

                        .sologan {
                            font-size: 18px;
                            color: $primaryColor;
                            margin: 60px 0 54px 0;
                            text-align: center;
                        }

                        > div {
                            text-align: center;
                        }
                    }
                    .footer {
                        margin-top: 20px;
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
    }
}
</style>
