import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    count: 1
}
const mutations = {
    add(state, n) {
        state.count+= n;
    },
    reduce(state) { 
        state.count--;
    }
}
const getters = {
    count: function(state) {
        return state.count += 20;
    }
}

const actions = {
    addAction(context) {
        context.commit('add',10);
        // 延迟执行
        setTimeout(() =>{
            context.commit('reduce')
        },5000);
        console.log('我比reduce提前执行了');
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions

})
