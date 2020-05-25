<template>
    <div >
    <h1>{{message}}-{{$route.params.username}}- {{$route.params.id}}</h1>
    
    </div>
</template>
<script>
export default {
    name: 'H2',
    data() {
        return {
            message: 'hi, I am xxp-2'
        }
    }
}
</script>
<style scoped>

</style>