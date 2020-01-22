<template>
    <div>
        <div class="topHead">
            <div class="href_box">
                <span class="href">
                    登录
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.topHead {
    width: 100%;
    height: 40px;
    color: $white;
    background-color: #999999;
    display: flex;
    align-items: center;

    .href_box {
        width: 1200px;
        margin: 0 auto;
        text-align: right;

        .href {
            font-size: 12px;
            border: solid 1px $white;
            padding: 3px 12px;
            border-radius: 17px;
            cursor: pointer;
        }
    }
}
</style>
