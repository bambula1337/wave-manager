<template>
  <div class="home">
    <TheHeader/>
    <Manager/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import Manager from '@/components/Manager.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    TheHeader,
    Manager,
  },
});
</script>

<style lang="scss">
.home {
}
</style>
