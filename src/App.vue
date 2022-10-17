<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// Tailwind styles
import '@/assets/styles/tailwind/tailwind.scss';

export default Vue.extend({
  name: 'AppComponent',
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("@/assets/images/waves.png") no-repeat center 120%;
  background-size: 100vw;
}
</style>
