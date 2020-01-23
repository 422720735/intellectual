<template>
    <div id="product">
        <global-header />
        <login-nav />
        <div class="search">
            <div>
                <span class="sub"></span>
                <el-input
                    style="width: 330px"
                    v-model.trim="name"
                    size="mini"
                    clearable
                    placeholder="请输入金融产品名称"
                ></el-input>
                <el-select
                    clearable
                    style="width: 280px"
                    v-model="institutions"
                    size="mini"
                    placeholder="请选择金融机构"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <a-input-number
                    style="width: 280px"
                    v-model="money"
                    placeholder="请输入需要贷款的金额"
                    class="change"
                    size="small"
                    :min="0"
                    :max="100000"
                />
                <el-button size="mini" type="primary" :loading="loading">
                    查询
                </el-button>
            </div>
        </div>
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
                            @click="$router.push({ name: 'applyFor' })"
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
    </div>
</template>

<script>
// import { InputNumber } from 'ant-design-vue'
// import { Button, Select, Option, Input } from 'element-ui'
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
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
                    dealConditions: [
                        '（一）符合国家产业政策和中国银行信贷政策',
                        '（二）在成都注册的具有较高的高新技术和市场前景的科技型中小微企业',
                        '（三）企业或企业的实际控制人、股东拥有经官方认证、权属清晰且在有效期内的知识产权',
                        '（四）企业当前贷款银行原则上不超过三家',
                        '（五）企业及实际控制人信用记录良好，未列入人民法院失信被执行人名单、严重违法失信企业名单'
                    ]
                },
                {
                    name: '科技云贷',
                    bank: '建设银行',
                    totalMoney: '200万以内',
                    rate: '利率：5.00%起',
                    date: '2019-01-01~2024-01-01',
                    year: '还款年限:1年',
                    dealConditions: [
                        '（一）小微企业或个体工商户',
                        '（二）企业成立 2 年以上',
                        '（三）企业是国家高新技术企业或科技型中小企业',
                        '（四）企业拥有 1 项或多项下列知识产权：发明公布、发明授权、实用新型、软件著作权、外观设计专利'
                    ]
                },
                {
                    name: '新创贷',
                    bank: '工商银行',
                    totalMoney: '500万以内',
                    rate: '利率：5.22%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:1年',
                    dealConditions: [
                        '（一）企业注册地及纳税在高新区',
                        '（二）符合高新区主导产业：电子信息、生物医药、新经济；',
                        '（三）企业信誉良好，无不良信用记录',
                        '（四）持续经营时间在1年（含）以上且上一年度为盈利,企业主在本行业持续经营3年（含）以上',
                        '（五）贷款银行原则上不超过5家,最多不超过7家',
                        '（六）融资收入比最高不超过50%'
                    ]
                },
                {
                    name: '科创贷',
                    bank: '农业银行',
                    totalMoney: '1000万以内',
                    rate: '利率：4.35~5.65%',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    dealConditions: [
                        '（一）已在成都市行政区域内登记注册，具备独立法人资格的科技型中小企业，取得合法的营业执照、税务登记证、机构代码证等；',
                        '（二）生产经营活动合法合规，符合国家产业、行业、环保政策，且主要从事高新技术产品的研制、开发、生产和服务；',
                        '（三）企业管理团队及科研团队稳定、创新能力强，具备原始性创新、集成创新、引进消化再创新等创新意识和能力，具备较高的市场拓展能力和经营管理水平。',
                        '（四）有固定的生产经营场所和符合规定的自有资金，生产经营及其项目符合国家法律法规、产业政策、环境保护要求和农业银行信贷政策要求贷款资金用途明确、',
                        ' 合法；',
                        '（五）在农业银行开立账户，自愿接受农业银行信贷和结算监督；',
                        '（六）信用评级准入：中型企业信用等级在BBB级（含）以上，小型微型企业信用等级在BBB-级（含）以上。其中，采用“政府增信”项下知识产权质押方式的，',
                        ' 中型企业不低于A-级、小微企业不低于BBB级；采用在线信用融资方式的，客户信用等级应符合农业银行互联网金融业务评级要求并纳入信贷支持白名单。',
                        '（七）企业及其法定代表人、主要投资人、实际控制人、关键管理人员无不良信用记录，或虽然有过不良信用记录，但不良信用记录的产生并非主观恶意且本次申请',
                        ' 用信前已全部偿还了不良信用；',
                        '（八）企业纳税和营业用水电记录正常，且能有效佐证申请人的经营及财务数据（报表）；',
                        '（九）农业银行要求的其他条件'
                    ]
                },
                {
                    name: '天府知来贷',
                    bank: '民生银行',
                    totalMoney: '1000万以内',
                    rate: '利率：基准利率上浮30%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    dealConditions: [
                        '（1）在川注册、具有独立的企业法人资格、实行独立核算；',
                        '（2）生产经营状况良好，组织机构、经营管理制度和财务管理制度健全。',
                        '（3）会计、纳税、银行信用等方面无不良记录；',
                        '（4）三年内无严重违法违规行为记录。',
                        '（5）我行要求的其他条件'
                    ]
                },
                {
                    name: '天府知来贷',
                    bank: '成都银行',
                    totalMoney: '1000万以内',
                    rate: '利率：基准利率上浮30%以内',
                    date: '2019-01-01~2025-01-01',
                    year: '还款年限:0~3年',
                    dealConditions: [
                        '主要为具有发明专利、实用新型专利、外观设计专利、著名商标权的中小微科技型企业服务'
                    ]
                }
            ],
            loading: false,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            institutions: '',
            name: '',
            money: ''
        }
    },
    components: {
        // AInputNumber: InputNumber,
        // ElButton: Button,
        // ElSelect: Select,
        // ElOption: Option,
        // ElInput: Input,
        GlobalHeader,
        LoginNav,
        SubTitle
    }
}
</script>

<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
$mainBgColor: #f9f9f9;
$warningColor: #f58b3b;
.ant-input-number.change {
    height: 28px;
    line-height: 28px;
}
#product {
    background-color: $mainBgColor;

    .search {
        padding: 12px 20px;
        margin: 24px auto;
        width: 1200px;
        border-radius: 11px;
        background-color: $white;
        > div {
            display: flex;
            align-items: center;
            .sub {
                display: inline-block;
                width: 4px;
                height: 16px;
                margin-right: 10px;
                background-color: $primaryColor;
            }
            .el-input,
            .el-select,
            .change.ant-input-number {
                margin-right: 10px;
            }
        }
    }

    .productList {
        margin: 0 auto 50px auto;
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        > li {
            width: 385px;
            padding: 20px;
            border-radius: 4px;
            background-color: $white;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
            &:nth-of-type(3n-1) {
                margin: 0 22px 10px 22px;
            }

            .word_bg {
                display: block;
                margin-top: 100px;

                .money {
                    color: $warningColor;
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
                    color: black;
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
</style>
