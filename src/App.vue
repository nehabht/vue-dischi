<template>
  <div id="app">
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,

  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color: #2c3e50;
  overflow: auto;
}

img{
  max-width: 100%;
}

</style>


