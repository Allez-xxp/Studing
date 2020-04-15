<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link> | 
      <router-link to="/params/198/武汉加油，中国加油！">参数页</router-link> |
      <router-link to="/goHome">Home页</router-link> | 
      <router-link to="/goParams/198/武汉加油，中国加油！">Params首页</router-link> |
      <router-link to="/H1">H1页</router-link> |
      <router-link to="/Allez">Allez</router-link> |
      <router-link to="/aaaa">Error</router-link> |
    </div>
    <transition name="f" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() { 
      this.$router.go(-1);
    },
    goGo() { 
      this.$router.go(1);
    },
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.f-enter{
  opacity: 0;  
}
.f-enter-active{
  transition: opacity .5s;
}
.f-leave{
  opacity: 1;
}
.f-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
