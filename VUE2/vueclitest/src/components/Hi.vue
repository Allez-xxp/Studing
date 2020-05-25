<template>
    <div >
    <h1>{{message}}</h1>
    <!-- 控制hi所属子路由 -->
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'hi',
    data() {
        return {
            message: 'hi, I am xxp'
        }
    }
}
</script>
<style scoped>

</style>