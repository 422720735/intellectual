<template>
    <div id="mapContent">
        <ul>
            <li class="addressList">left</li>
            <li class="rightMap">right</li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#mapContent {
    margin-top: 20px;
    > ul {
        display: flex;
        .addressList {
            width: 450px;
        }
        .rightMap {
            flex: 1;
            background-color: red;
        }
    }
}
</style>
