<template>
<div>
    <h2>{{msg}}</h2><hr/>
    <h3>{{$store.state.count}}-{{count}}</h3>
    <p>
        <button @click="$store.commit('add')">增加</button>
        <button @click="$store.commit('reduce')">减少</button>
    </p>
</div>
</template>
<script>
import store from '@/vuex/store';
import {mapState} from 'vuex';
export default {
    data() {
        return {
            msg: 'Hello Vuex!!'
        }
    },
    //第一种方法 利用computed的计算属性赋值
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     }
    // },

    // 第二种方法 通过mapState的对象赋值
    // computed: mapState({
    //     count: state => state.count
    // }),

    // 第三种方法 通过mapState的数组赋值
    computed: mapState(["count"]),
    store
}
</script>