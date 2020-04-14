<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- 导航做法：router-link标签 -->
       <router-link to="/">首页</router-link>  <!--相当于a标签，链接作用 -->
       <router-link to="/Hi">Hi页</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
