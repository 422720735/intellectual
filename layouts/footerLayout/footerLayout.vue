<template>
    <footer class="footer">
        <div>
            <ul>
                <li>迅鳐成都科技有限公司</li>
                <li>公司网址：www.mrray.cn</li>
                <li>
                    联系地址：四川省成都市天府大道北段1677号交子金融科技中心A座0113
                </li>
                <li>联系电话：028—87827621</li>
                <li>商务合作：service@mrray.cn</li>
                <li>人力资源部：hr@mrray.cn</li>
                <li>
                    <span>Copyright&nbsp;&copy;</span>
                    2015-2035&nbsp;迅鳐成都科技有限公司&nbsp;版权所有&nbsp;蜀ICP备16007868号
                </li>
            </ul>
            <div>
                <img src="~/static/images/QrCode.png" alt="" />
                <div style="text-align: center;margin-top: 10px">
                    扫码关注迅鳐公众号
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
$primaryColor: #2f7deb;
$white: #ffffff;
.footer {
    width: 100%;
    margin-top: 64px;
    background-color: #333333;
    padding: 30px 0;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
        color: $white;
        font-size: 12px;

        ul {
            li {
                margin-bottom: 9px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
