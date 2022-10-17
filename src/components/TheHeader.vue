<template>
  <div class="header">
    <div class="logo-wrapper">
      <img src="@/assets/icons/logo.svg" alt="" class="logo">
      <h1 class="logo-text">manager.</h1>
    </div>
    <div class="user-wrapper">
      <img src="@/assets/icons/user.svg" alt="" class="logo">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheHeader',
});
</script>

<style lang="scss" scoped>
.header{
  @apply flex justify-between items-center px-30 py-3;
  & .logo-wrapper{
    @apply flex items-center;
    & .logo{
      @apply w-23;
    }
    & .logo-text{
      @apply text-3xl font-project-default text-project-title font-semibold;
    }
  }
  & .user-wrapper{
    & .logo{
      @apply w-8;
    }
  }
}
</style>
