<template>
    <div class="logNav">
        <div>
            <div class="log">基于区块链技术的知识产权融资服务平台</div>
            <ul class="nav_box">
                <li>
                    <nuxt-link :to="{ name: 'index' }">首页</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{ name: 'login' }">金融产品</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{ name: 'login' }">平台资讯</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
.logNav {
    width: 100%;
    height: 80px;
    background-color: $primaryColor;
    color: $white;
    font-size: 18px;

    > div {
        width: 1200px;
        line-height: 80px;
        margin: 0 auto;
        overflow: hidden;

        .log {
            float: left;
            color: $white;
            font-size: 30px;
            font-weight: 700;
        }

        .nav_box {
            float: right;

            li {
                cursor: pointer;
                display: inline-block;
                margin-right: 60px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    color: $white;
                    text-decoration: none;
                    font-size: 14px;
                    &:hover {
                        color: $white;
                    }
                }
            }
        }
    }
}
</style>
