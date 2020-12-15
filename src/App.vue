<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="HelloWorld"/>
  <HelloWorld msg="HelloVue"/>
  <hello msg="vue 3.0"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import hello from './pages/hello.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    hello
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
