<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/"> home页面</router-link>
    <router-link to="/list"> list</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div @click="$store.commit('add')">commit num: '{{$store.state.num}}'</div>

    <div @click="$store.dispatch('add')">action num: '{{$store.state.num}}'</div>

    <div >getter {{$store.getters.getNum}}</div>

    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
