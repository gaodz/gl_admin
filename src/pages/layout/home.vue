<template>
  <el-container style="height: 100%;">
    <el-header style="background: #248E36">123123</el-header>
    <el-container style="height: calc(100% - 60px);" direction="horizontal">
      <el-aside style="background: #BFBF0F">
        <nav-menu></nav-menu>
      </el-aside>
      <el-main style="background: #1C2EAD">7890
        <img alt="Vue logo" src="../../assets/logo.png">
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import navMenu from './navMenu'
export default {
  components: {
    navMenu
  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
 
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>

</style>
