<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<mt-button type="primary">primary</mt-button>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  .cons{
    padding: 20px;

  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
