<template>
    <div id="home">
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
                        <h6>
                            企业资料，申贷文件实时上链，数据不可篡改，信息追踪溯源
                        </h6>
                    </div>
                </div>
            </li>
            <li>
                <div class="clear">
                    <img class="fl" src="~/static/images/information1.png" />
                    <div class="fl">
                        <h4>政府基金保障</h4>
                        <h6>
                            成都市知识产权运营基金6000万，促进知识产权运营体系建设
                        </h6>
                    </div>
                </div>
            </li>
        </ul>
        <plat-layouts class="platLayoutsOne" main-title="热门金融产品">
            <nuxt-link slot="extra" :to="{ name: 'product' }">
                更多金融产品
            </nuxt-link>
            <div class="productList">
                <div class="carousel-btn-prev">
                    <GlobalPrevNext
                        prev
                        @left="changeLeft"
                        :prev-hidden="visible_prev"
                    />
                </div>
                <div class="swiper">
                    <ul
                        class="productContent"
                        :style="{
                            transform: `translateX(${offsetX}px)`,
                            width: `${totalWidth}`
                        }"
                    >
                        <li
                            v-for="(item, i) in productList"
                            :key="i"
                            @mouseenter="handleDetails(i)"
                        >
                            <sub-title
                                :sub-title="item.name"
                                :more-title="item.bank"
                                is-bold
                            />
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
                    <GlobalPrevNext
                        next
                        @right="changeRight"
                        :next-hidden="visible_next"
                    />
                </div>
            </div>
            <div
                class="already"
                id="live"
                style="height: 196px;overflow: hidden"
            >
                <ul class="listOne">
                    <li v-for="(data, k) in financial" :key="k">
                        <div>
                            <span>{{ data.name | mask }}</span>
                            <span>资本：{{ data.money }}万</span>
                            <span>员工：{{ data.person }}人</span>
                            <span>金融产品：{{ data.product }}</span>
                            <span style="text-align: right">
                                放款：{{ data.explain }}万
                            </span>
                        </div>
                    </li>
                </ul>
                <ul class="listTwo"></ul>
            </div>
            <div
                class="product-details"
                :class="hoverVisible && 'active'"
                @mouseleave="handleHidden"
            >
                <div class="details">
                    <div class="triangle_1" :class="detailsArrow"></div>
                    <div class="triangle_2" :class="detailsArrow"></div>
                    <div>
                        <sub-title
                            sub-title="办理条件"
                            :border-bottom="false"
                        />
                        <ul>
                            <li
                                v-for="(items, key) in productList[hoverIndex]
                                    .dealConditions"
                                :key="key"
                            >
                                <p>{{ items }}</p>
                            </li>
                        </ul>
                        <div class="handle-btn">
                            <el-button
                                round
                                size="small"
                                type="primary"
                                @click="$router.push({ name: 'applyFor' })"
                            >
                                我要申请
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </plat-layouts>
        <div class="process">
            <div>
                <h1>融资流程</h1>
                <img
                    v-if="require(`~/static/images/tree.png`)"
                    v-lazy="require(`~/static/images/tree.png`)"
                />
            </div>
        </div>
        <plat-layouts class="platLayoutsTwo" main-title="平台资讯">
            <nuxt-link slot="extra" :to="{ name: 'information' }">
                更多平台资讯
            </nuxt-link>
            <div class="newsBox">
                <div class="left" @click="$router.push({ name: 'newsInfo_4' })">
                    <img
                        v-if="require(`~/static/images/special/b.jpeg`)"
                        v-lazy="require(`~/static/images/special/b.jpeg`)"
                    />
                </div>
                <ul class="right">
                    <li @click="$router.push({ name: 'newsInfo_5' })">
                        <div class="title">
                            <small>
                                这件事上，世界知识产权组织也夸成都做得好！
                            </small>
                            <span>2019-12-05</span>
                        </div>
                        <div class="content">
                            <img
                                v-if="
                                    require(`~/static/images/special/5_1.jpg`)
                                "
                                v-lazy="
                                    require(`~/static/images/special/5_1.jpg`)
                                "
                            />
                            <p>
                                12月2-4日，“2019成都国际数字版权交易博览会”在蓉举行，同期举办了由世界知识产权组织、国家版权局主办的“‘一带一路’版权国际论坛”。
                            </p>
                        </div>
                    </li>
                    <li @click="$router.push({ name: 'newsInfo_1' })">
                        <div class="title">
                            <small>成都市知识产权运营基金</small>
                            <span>2019-12-04</span>
                        </div>
                        <div class="content">
                            <img
                                v-if="require(`~/static/images/special/1.jpg`)"
                                v-lazy="
                                    require(`~/static/images/special/1.jpg`)
                                "
                            />
                            <p>
                                成都市知识产权运营基金由成都市财政出资，委托专业投资管理机构按照市场化方式运营的知识产权运营母基金
                            </p>
                        </div>
                    </li>
                    <li @click="$router.push({ name: 'newsInfo_2' })">
                        <div class="title">
                            <small>
                                2019成都国际知识产权行业峰会搭建全球知识产权新平台
                            </small>
                            <span>2019-06-12</span>
                        </div>
                        <div class="content">
                            <img
                                v-if="
                                    require(`~/static/images/special/2_1.png`)
                                "
                                v-lazy="
                                    require(`~/static/images/special/2_1.png`)
                                "
                            />
                            <p>
                                6月12日，“2019成都国际知识产权行业峰会”在成都市武侯区举行，来自美国、日本等国家的法律界人士、知识产权领域专家，和国内知名的新经济企业代表、知识产权领域的学者、投资人、协会代表参会，了解彼此的建设成果，沟通前沿的建设经验。
                            </p>
                        </div>
                    </li>
                    <li @click="$router.push({ name: 'newsInfo_3' })">
                        <div class="title">
                            <small>
                                成都高新区：专利申请总量超14万件
                                知识产权及标准融资破15亿元
                            </small>
                            <span>2018-01-25</span>
                        </div>
                        <div class="content">
                            <img
                                v-if="require(`~/static/images/special/3.jpg`)"
                                v-lazy="
                                    require(`~/static/images/special/3.jpg`)
                                "
                            />
                            <p>
                                当前，知识产权竞争已成为比产品竞争、品牌竞争层次更深、技术水平更高的竞争。
                                成都高新区正深入实施知识产权战略和标准化战略，助力企业融入全球价值链。
                                1月25日，记者从成都高新区获悉，2017年，成都高新区新增专利申请28576件、
                                授权专利9254件，同比增长15%和16.4%，分别占成都市的25.1%和22.5%；截至2017年底，
                                成都高新区累计申请专利14.2万件，累计获得专利授权6.2万件。区内企业累计主导或
                                参与制定国际、国家、行业、地方、团体标准698项，国际标准总量占四川省90%，
                                标准总量占成都市三分之一。
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </plat-layouts>
        <plat-layouts main-title="合作机构">
            <div class="moneyOrg">
                <ul class="list">
                    <li>
                        <img
                            v-if="require(`~/static/images/bank1.png`)"
                            v-lazy="require(`~/static/images/bank1.png`)"
                            alt="成都银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank2.png`)"
                            v-lazy="require(`~/static/images/bank2.png`)"
                            alt="成都农商银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank3.png`)"
                            v-lazy="require(`~/static/images/bank3.png`)"
                            alt="成都工商银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank4.png`)"
                            v-lazy="require(`~/static/images/bank4.png`)"
                            alt="华夏银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank5.png`)"
                            v-lazy="require(`~/static/images/bank5.png`)"
                            alt="中国建设银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank6.png`)"
                            v-lazy="require(`~/static/images/bank6.png`)"
                            alt="中国农业银行"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/bank7.png`)"
                            v-lazy="require(`~/static/images/bank7.png`)"
                            alt="中国民生银行"
                        />
                    </li>
                </ul>
            </div>
            <div class="institutions">
                <ul class="list">
                    <li>
                        <img
                            v-if="require(`~/static/images/institutions1.png`)"
                            v-lazy="
                                require(`~/static/images/institutions1.png`)
                            "
                            alt="北京中金浩资产评估有限责任公司"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/institutions5.png`)"
                            v-lazy="
                                require(`~/static/images/institutions5.png`)
                            "
                            alt="四川恒通房地产土地评估事务所有限公司"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/institutions6.png`)"
                            v-lazy="
                                require(`~/static/images/institutions6.png`)
                            "
                            alt="四川恒通房地产土地评估事务所有限公司"
                        />
                    </li>
                    <li>
                        <img
                            v-if="require(`~/static/images/institutions7.png`)"
                            v-lazy="
                                require(`~/static/images/institutions7.png`)
                            "
                            alt="四川恒通房地产土地评估事务所有限公司"
                        />
                    </li>
                </ul>
            </div>
        </plat-layouts>
        <footer-layout />
    </div>
</template>

<script>
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import PlatLayouts from '~/layouts/platLayouts/platLayouts.vue'
import SubTitle from '~/components/subTitle/subTitle.vue'
import GlobalPrevNext from '~/components/globalPrevNext/globalPrevNext.vue'
import FooterLayout from '~/layouts/footerLayout/footerLayout.vue'

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
                    des:
                        '服务小微企业，企业融资成本低；快速审批，放款便捷，满足小微企业融资短、频、快、急的需求；帮助轻资产科技企业利用知识产权获得贷款。',
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
                    des: '在线审核，放款速度快',
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
                    des: '政府申请贴息，贴息后利率为3.48%',
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
                    des:
                        '适用于轻资产型企业，仅以知识产权质押，可申请贷款利率补助，最高可补贴同期基准利率30%',
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
                    des: '手续简单，放款速度快',
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
                    des: '支行权限审批，成本低，放款快',
                    dealConditions: [
                        '主要为具有发明专利、实用新型专利、外观设计专利、著名商标权的中小微科技型企业服务'
                    ]
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
            nextArrow: true,
            hoverVisible: false,
            hoverIndex: 0,
            detailsArrow: 'middleLayout' // leftLayout middleLayout rightLayout
        }
    },
    computed: {
        visible_prev() {
            if (
                this.currentIndex === 1 ||
                this.productList.length <= this.slidesPerView
            ) {
                return false
            } else return true
        },
        visible_next() {
            if (
                this.productList.length > this.slidesPerView &&
                this.currentIndex < this.productList.length - this.slidesPerView
            ) {
                return true
            } else return false
        },
        totalWidth() {
            if (this.productList.length >= this.slidesPerView) {
                let total = 0
                const width = 385
                this.productList.map(_ => {
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
    mounted() {
        const speed = 200
        // 向上滚动
        const box = document.getElementById('live')
        const one = document.querySelectorAll('.listOne')[0]
        const two = document.querySelectorAll('.listTwo')[0]
        two.innerHTML = one.innerHTML

        function Marquee() {
            if (box.scrollTop >= one.offsetHeight) {
                box.scrollTop = 0
            } else {
                box.scrollTop = box.scrollTop + 1
            }
        }

        let MyMar = setInterval(Marquee, speed)
        box.onmouseover = () => {
            clearInterval(MyMar)
        }
        box.onmouseout = () => {
            MyMar = setInterval(Marquee, speed)
        }
    },
    methods: {
        handleDetails(index) {
            this.hoverIndex = index
            if (this.currentIndex === index) this.detailsArrow = 'middleLayout'
            else if (this.currentIndex - 1 === index)
                this.detailsArrow = 'leftLayout'
            else if (this.currentIndex + 1 === index)
                this.detailsArrow = 'rightLayout'
            this.hoverVisible = true
        },
        handleHidden() {
            this.hoverVisible = false
        },
        changeLeft() {
            if (this.currentIndex > 1) {
                this.offsetX += 409
                this.currentIndex -= 1
            }
        },
        changeRight() {
            if (
                this.currentIndex <
                this.productList.length - this.slidesPerView
            ) {
                this.offsetX -= 409
                this.currentIndex += 1
            }
        }
    },
    filters: {
        mask(val) {
            return (
                val.substring(0, 2) +
                '**********' +
                val.substring(val.length - 2)
            )
        }
    },
    components: {
        GlobalPrevNext,
        FooterLayout,
        GlobalHeader,
        PlatLayouts,
        LoginNav,
        SubTitle
    }
}
</script>

<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
$mainBgColor: #f9f9f9;
$subColor: #666666;
$warningColor: #f58b3b;
body {
    background-color: $mainBgColor;
}
#home {
    min-width: 1556px;
    background-color: $mainBgColor;
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
        box-sizing: border-box;
        height: 114px;
        margin: 0 auto;
        border-radius: 94px;
        transform: translateY(-30px);
        background-color: $white;
        box-shadow: 3px 5px 5px -2px #f1eff2;
        li {
            > div {
                img {
                    width: 54px;
                    height: 68px;
                    margin-right: 20px;
                }
                h4 {
                    margin-top: 4px;
                    font-size: 16px;
                    font-weight: bold;
                }
                h6 {
                    margin-top: 4px;
                    font-size: 14px;
                    color: #777478;
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
                    margin-left: 85px;
                }
            }
        }
    }
    .productList {
        position: relative;
        z-index: 99;
        width: 1200px;
        box-sizing: border-box;
        .swiper {
            width: 1200px;
            overflow-x: hidden;
        }
        .productContent {
            display: flex;
            transition: all 0.3s;
            > li {
                width: 385px;
                margin: 12px 12px;
                padding: 20px;
                border-radius: 4px;
                background-color: $white;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
    .platLayoutsOne {
        position: relative;
        margin-top: 40px;
    }
    .platLayoutsTwo {
        margin-top: 70px;
    }
    .product-details {
        position: absolute;
        z-index: 120;
        top: 590px;
        margin: 0 auto;
        width: 1200px;
        box-sizing: border-box;
        padding: 20px 43px;
        border-radius: 11px;
        background-color: $white;
        border: solid 1px #cdcbce;
        transition: opacity 0.3s, visibility 0.3s;
        opacity: 0;
        visibility: hidden;
        &.active {
            opacity: 1;
            visibility: visible;
        }
        .details {
            position: relative;
            .triangle_1 {
                content: '';
                display: block;
                width: 0;
                height: 0;
                top: -31px;
                border-width: 0 10px 10px;
                border-style: solid;
                border-color: transparent transparent #cdcbce;
                position: absolute;
            }
            .triangle_2 {
                content: '';
                display: block;
                width: 0;
                height: 0;
                top: -30px;
                border-width: 0 10px 10px;
                border-style: solid;
                border-color: transparent transparent $white;
                position: absolute;
                vertical-align: middle;
            }
            .leftLayout {
                left: 182px;
            }
            .middleLayout {
                left: 575px;
            }
            .rightLayout {
                left: 993px;
            }

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
            .handle-btn {
                display: flex;
                justify-content: center;
                margin: 23px 0 17px;
            }
        }
    }
    .process {
        width: 100%;
        text-align: center;
        min-width: 1556px;
        margin-top: 32px;
        height: 467px;
        background-image: url('~static/images/process.png');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        > div {
            margin: 0 auto;
            width: 1556px;
            h1 {
                font-size: 28px;
                font-weight: 500;
                color: $white;
                letter-spacing: 1px;
                margin-bottom: 58px;
            }
        }
    }

    .newsBox {
        box-sizing: border-box;
        overflow: hidden;
        padding: 20px;
        margin-top: 32px;
        margin-bottom: 50px;
        border-radius: 11px;
        background-color: $white;

        .left {
            float: left;
            width: 356px;
            height: 356px;
            margin-right: 20px;

            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }

        .right {
            width: 784px;
            float: left;
            font-size: 14px;
            color: #c5c5c5;

            > li {
                cursor: pointer;
                margin-bottom: 12px;

                &:last-child {
                    margin-bottom: 0;
                }

                .title {
                    display: flex;
                    justify-content: space-between;

                    small {
                        font-size: 16px;
                        font-weight: 700;
                        color: #000000;
                    }
                }

                .content {
                    margin-top: 6px;
                    display: flex;
                    align-items: center;

                    img {
                        display: block;

                        width: 50px;
                        height: 50px;
                    }

                    p {
                        width: 724px;
                        margin-left: 10px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                }
            }
        }
    }

    .moneyOrg {
        width: 1200px;
        margin-top: 40px;
        border-radius: 11px;
        box-shadow: 4px 4px 10px #efeff0;
        background-color: $white;
        background-image: url('~static/images/money.png');
        background-repeat: no-repeat;
        background-position: left top;

        .list {
            margin-left: 150px;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 170px;
                margin: 23px 40px 23px 0;
            }
        }
    }

    .institutions {
        width: 1200px;
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 11px;
        box-shadow: 4px 4px 10px #efeff0;
        background-color: $white;
        background-image: url('~static/images/assess.png');
        background-repeat: no-repeat;
        background-position: left top;

        .list {
            margin-left: 150px;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 450px;
                margin: 23px 75px 23px 0;
            }
        }
    }

    .already {
        margin-top: 20px;
        > ul {
            padding: 20px 20px;
            background-color: $white;
            border-radius: 11px;

            &:last-child {
                margin-top: -20px;
            }

            li {
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }

                > div {
                    display: flex;
                    margin-bottom: 10px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    width: 1160px;
                    overflow: hidden;

                    span {
                        display: block;
                        font-weight: bold;
                        font-size: 16px;

                        &:nth-of-type(1) {
                            width: 20%;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                        }

                        &:nth-of-type(3) {
                            width: 20%;
                        }

                        &:nth-of-type(4) {
                            width: 20%;
                        }

                        &:nth-of-type(5) {
                            width: 20%;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .carousel-btn-prev,
    .carousel-btn-next {
        display: none;
    }
}
</style>
