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
            <div class="productList">
                <div class="carousel-btn-prev">
                    <GlobalPrevNext prev @left="changeLeft" :prev-hidden="visible_prev" />
                </div>
                <div class="swiper">
                    <ul class="productContent clear" :style="{ transform: `translateX(${offsetX}px)`, width: `${totalWidth}` }">
                        <li v-for="(item, i) in productList" :key="i">
                            <sub-title :sub-title="item.name" :more-title="item.bank" is-bold />
                            <div class="word_bg">
                                <div class="money">{{ item.totalMoney }}</div>
                                <div class="modified">——</div>
                                <div class="rate">{{ item.rate }}</div>
                                <div class="sologan">{{ item.des }}</div>
                            </div>
                            <div class="footer">
                                <span class="date">{{ item.date }}</span>
                                <span class="year">{{ item.year }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="carousel-btn-next">
                    <GlobalPrevNext next @right="changeRight" :next-hidden="visible_next" />
                </div>
            </div>
            <div class="product-details">详情</div>
        </plat-layouts>
    </div>
</template>

<script>
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import PlatLayouts from '~/layouts/platLayouts/platLayouts.vue'
import SubTitle from '~/components/subTitle/subTitle.vue'
import GlobalPrevNext from '~/components/globalPrevNext/globalPrevNext.vue'
export default {
    data() {
        return {
            offsetX: 0,
            slidesPerView: 3,
            currentIndex: 1,
            productList: [
                {
                    name: '中银智慧通宝',
                    bank: '中国银行',
                    totalMoney: '1000万以内',
                    rate: '利率：最高不超过5%',
                    date: '2019-01-01~2024-01-01',
                    year: '还款年限:1年',
                    des: '服务小微企业，企业融资成本低；快速审批，放款便捷，满足小微企业融资短、频、快、急的需求；帮助轻资产科技企业利用知识产权获得贷款。',
                    dealConditions:
                        '（一）符合国家产业政策和中国银行信贷政策 \n' +
                        '（二）在成都注册的具有较高的高新技术和市场前景的科技型中小微企业 \n' +
                        '（三）企业或企业的实际控制人、股东拥有经官方认证、权属清晰且在有效期内的知识产权 \n' +
                        '（四）企业当前贷款银行原则上不超过三家 \n' +
                        '（五）企业及实际控制人信用记录良好，未列入人民法院失信被执行人名单、严重违法失信企业名单'
                },
                {
                    name: '科技云贷',
                    bank: '建设银行',
                    totalMoney: '200万以内',
                    rate: '利率：5.00%起',
                    date: '2019-01-01~2024-01-01',
                    year: '还款年限:1年',
                    des: '在线审核，放款速度快',
                    dealConditions:
                        '（一）小微企业或个体工商户 \n' +
                        '（二）企业成立 2 年以上 \n' +
                        '（三）企业是国家高新技术企业或科技型中小企业 \n' +
                        '（四）企业拥有 1 项或多项下列知识产权：发明公布、发明授权、实用新型、软件著作权、外观设计专利'
                },
                {
                    name: '新创贷',
                    bank: '工商银行',
                    totalMoney: '500万以内',
                    rate: '利率：5.22%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:1年',
                    des: '政府申请贴息，贴息后利率为3.48%',
                    dealConditions:
                        '（一）企业注册地及纳税在高新区\n' +
                        '（二）符合高新区主导产业：电子信息、生物医药、新经济；\n' +
                        '（三）企业信誉良好，无不良信用记录\n' +
                        '（四）持续经营时间在1年（含）以上且上一年度为盈利,企业主在本行业持续经营3年（含）以上\n' +
                        '（五）贷款银行原则上不超过5家,最多不超过7家\n' +
                        '（六）融资收入比最高不超过50%'
                },
                {
                    name: '科创贷',
                    bank: '农业银行',
                    totalMoney: '1000万以内',
                    rate: '利率：4.35~5.65%',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    des: '适用于轻资产型企业，仅以知识产权质押，可申请贷款利率补助，最高可补贴同期基准利率30%',
                    dealConditions:
                        '（一）已在成都市行政区域内登记注册，具备独立法人资格的科技型中小企业，取得合法的营业执照、税务登记证、机构代码证等；\n' +
                        '（二）生产经营活动合法合规，符合国家产业、行业、环保政策，且主要从事高新技术产品的研制、开发、生产和服务；\n' +
                        '（三）企业管理团队及科研团队稳定、创新能力强，具备原始性创新、集成创新、引进消化再创新等创新意识和能力，具备较高的市场拓展能力和经营管理水平。\n' +
                        '（四）有固定的生产经营场所和符合规定的自有资金，生产经营及其项目符合国家法律法规、产业政策、环境保护要求和农业银行信贷政策要求贷款资金用途明确、\n' +
                        ' 合法；\n' +
                        '（五）在农业银行开立账户，自愿接受农业银行信贷和结算监督；\n' +
                        '（六）信用评级准入：中型企业信用等级在BBB级（含）以上，小型微型企业信用等级在BBB-级（含）以上。其中，采用“政府增信”项下知识产权质押方式的，\n' +
                        ' 中型企业不低于A-级、小微企业不低于BBB级；采用在线信用融资方式的，客户信用等级应符合农业银行互联网金融业务评级要求并纳入信贷支持白名单。\n' +
                        '（七）企业及其法定代表人、主要投资人、实际控制人、关键管理人员无不良信用记录，或虽然有过不良信用记录，但不良信用记录的产生并非主观恶意且本次申请 \n' +
                        ' 用信前已全部偿还了不良信用；\n' +
                        '（八）企业纳税和营业用水电记录正常，且能有效佐证申请人的经营及财务数据（报表）；\n' +
                        '（九）农业银行要求的其他条件'
                },
                {
                    name: '天府知来贷',
                    bank: '民生银行',
                    totalMoney: '1000万以内',
                    rate: '利率：基准利率上浮30%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    des: '手续简单，放款速度快',
                    dealConditions:
                        '（1）在川注册、具有独立的企业法人资格、实行独立核算； \n' +
                        '（2）生产经营状况良好，组织机构、经营管理制度和财务管理制度健全。 \n' +
                        '（3）会计、纳税、银行信用等方面无不良记录； \n' +
                        '（4）三年内无严重违法违规行为记录。 \n' +
                        '（5）我行要求的其他条件\n'
                },
                {
                    name: '天府知来贷',
                    bank: '成都银行',
                    totalMoney: '1000万以内',
                    rate: '利率：基准利率上浮30%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    des: '支行权限审批，成本低，放款快',
                    dealConditions: '主要为具有发明专利、实用新型专利、外观设计专利、著名商标权的中小微科技型企业服务'
                }
            ],
            financial: [
                {
                    bank: '农业银行',
                    name: '成都海科机械设备制造有限公司',
                    money: 3450,
                    person: '100-300',
                    explain: 400,
                    product: '科创贷（农业银行）'
                },
                {
                    bank: '农业银行',
                    name: '成都普瑞斯特新材料有限公司',
                    money: 2000,
                    person: '50-100',
                    explain: 400,
                    product: '科创贷（农业银行）'
                },
                {
                    bank: '农业银行',
                    name: '成都锐成芯微科技股份有限公司',
                    money: 4388,
                    person: '50-100',
                    explain: 720,
                    product: '科创贷（农业银行）'
                },
                {
                    bank: '农业银行',
                    name: '四川茂烨建筑智能化工程有限公司',
                    money: 1200,
                    person: '< 50',
                    explain: 830,
                    product: '科创贷（农业银行）'
                },
                {
                    bank: '农业银行',
                    name: '四川世纪银通科技有限公司',
                    money: 4000,
                    person: '100-300',
                    explain: 1000,
                    product: '科创贷（农业银行）'
                },
                {
                    bank: '民生银行',
                    name: '成都兴科达电器实业有限公司',
                    money: 5160,
                    person: '100-300',
                    explain: 1000,
                    product: '天府知来贷（民生银行）'
                },
                {
                    bank: '民生银行',
                    name: '四川蓝景光电技术有限责任公司',
                    money: 500,
                    person: '> 600',
                    explain: 2400,
                    product: '天府知来贷（民生银行）'
                },
                {
                    bank: '成都银行',
                    name: '成都市XX科技有限公司',
                    money: 1300,
                    person: '50-100',
                    explain: 300,
                    product: '天府知来贷（成都银行）'
                },
                {
                    bank: '成都银行',
                    name: '成都XX技术有限公司',
                    money: 1300,
                    person: '50-100',
                    explain: 600,
                    product: '天府知来贷（成都银行）'
                },
                {
                    bank: '成都银行',
                    name: '成都XX科技有限公司',
                    money: 1000,
                    person: '50-100',
                    explain: 50,
                    product: '天府知来贷（成都银行）'
                },
                {
                    bank: '成都银行',
                    name: '成都XX科技股份有限公司',
                    money: 4388,
                    person: '50-100',
                    explain: 500,
                    product: '天府知来贷（成都银行）'
                },
                {
                    bank: '成都银行',
                    name: '成都XX软件有限公司',
                    money: 500,
                    person: '50-100',
                    explain: 100,
                    product: '天府知来贷（成都银行）'
                }
            ],
            prevArrow: false,
            nextArrow: true
        }
    },
    computed: {
        visible_prev() {
            if (this.currentIndex === 1 || this.productList.length <= this.slidesPerView) {
                return false
            } else return true
        },
        visible_next() {
            if (this.productList.length > this.slidesPerView && this.currentIndex < this.productList.length - this.slidesPerView) {
                return true
            } else return false
        },
        totalWidth() {
            if (this.productList.length >= this.slidesPerView) {
                let total = 0
                const width = 385
                this.productList.map((item, index) => {
                    total += width
                    total += 24
                })
                total -= 24
                return total + 'px'
            } else {
                return '1200px'
            }
        }
    },
    methods: {
        handleDetails() {
            alert(12)
        },
        changeLeft() {
            if (this.currentIndex > 1) {
                this.offsetX += 409
                this.currentIndex -= 1
            }
        },
        changeRight() {
            if (this.currentIndex < this.productList.length - this.slidesPerView) {
                this.offsetX -= 409
                this.currentIndex += 1
            }
        }
    },
    components: {
        GlobalPrevNext,
        GlobalHeader,
        PlatLayouts,
        LoginNav,
        SubTitle
    }
}
</script>

<style lang="scss">
body {
    background-color: #fbf8f9;
}
.home {
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
        position: relative;
        z-index: 99;
        width: 1200px;
        .swiper {
            width: 1200px;
            overflow: hidden;
        }
        .productContent {
            /*width: 2021px;*/
            transition: all 0.3s;
            > li {
                float: left;
                width: 385px;
                margin: 0 12px;
                padding: 20px;
                border-radius: 4px;
                background-color: #ffffff;
                &:first-child {
                    margin-left: 0;
                }
                &:last-child {
                    margin-right: 0;
                }
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
        .carousel-btn-prev,
        .carousel-btn-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            font-size: 80px;
        }
        .carousel-btn-prev {
            left: -50px;
        }
        .carousel-btn-next {
            right: -50px;
        }
    }
    .platLayouts {
        position: relative;
        margin-top: 40px;
    }
    .product-details {
        z-index: 120;
        bottom: -330px;
        position: absolute;
        background-color: red;
        margin: 0 auto;
        width: 1200px;
        min-height: 300px;
        overflow: hidden;
        border-radius: 24px;
        border: solid 1px #cdcbce;
    }
}

@media (max-width: 1200px) {
    .carousel-btn-prev,
    .carousel-btn-next {
        display: none;
    }
}
</style>
