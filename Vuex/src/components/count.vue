<template>
<div>
    <h2>{{msg}}</h2><hr/>
    <h3>{{$store.state.a.count}}-{{count}}</h3>
    <!-- <h3>{{count}}</h3>  -->
    <p>
        <button @click="$store.commit('add',10)">增加</button>
        <button @click="reduce">减少</button>
    </p>
    <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </p>
</div>
</template>
<script>
import store from '@/vuex/store';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
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
    computed: {
        // ...mapState(["count"]),
        // gettters过滤器
        // count() {
        //     return this.$store.getters.count;
        // }

        // 用mapGetters简化模板
        // ...mapGetters(["count"]),
        count(){
            return this.$store.state.a.count;
        }
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>