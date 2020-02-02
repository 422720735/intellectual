<template>
    <div id="news">
        <global-header />
        <login-nav />
        <div class="newsContent">
            <h1>这件事上，世界知识产权组织也夸成都做得好！</h1>
            <div class="vice">
                <div class="left_time">
                    发布时间：2019-12-05
                </div>
                <div class="right_hover">
                    <auto-share />
                </div>
            </div>
        </div>
        <footer-layout />
    </div>
</template>

<script>
import GlobalHeader from '~/components/globalHeader/globalHeader.vue'
import LoginNav from '~/components/loginNav/loginNav.vue'
import AutoShare from '~/components/autoShare/autoShare.vue'
import FooterLayout from '~/layouts/footerLayout/footerLayout.vue'
export default {
    components: {
        GlobalHeader,
        FooterLayout,
        AutoShare,
        LoginNav
    }
}
</script>

<style lang="scss" scoped>
#news {
    .newsContent {
        margin: 87px auto 0 auto;
        width: 1200px;
        min-height: calc(100vh - 514px);
        h1 {
            font-size: 34px;
            font-weight: bold;
            color: black;
        }
        .vice {
            margin-top: 25px;
            font-size: 14px;
            color: #c1c1c1;
            border-bottom: solid 1px #c1c1c1;
            display: flex;
            justify-content: space-between;
            padding-bottom: 12px;

            .left_time,
            .right_hover {
                line-height: 30px;
                display: inline-block;
            }
        }
    }
}
</style>
