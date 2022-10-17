<template>
  <div class="manager">
    <div class="list-wrapper">
      <label for="name">
        <textarea @input="heightFixer($event.target)" name="" id="name" class="name"></textarea>
      </label>
      <div class="list">
        <label for="goal">
          <textarea @input="heightFixer($event.target)" name="" id="goal" class="goal" :readonly="false"></textarea>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ManagerComponent',
  methods: {
    heightFixer(el: HTMLInputElement): void {
      el.style.height = '0px';
      el.style.height = `${el.scrollHeight}px`;
    },
  },
});
</script>

<style lang="scss" scoped>
.manager {
  @apply text-project-paragraph font-project-default font-semibold mb-50 px-30;
  & .list-wrapper{
    @apply border-4 border-project-stroke;
    & .name {
      @apply w-%30 text-center bg-project-background outline-none resize-none text-xl border-4 border-project-stroke overflow-hidden -mt-0.5;
    }
    & .list{
      & .goal{
        @apply w-%30 bg-project-background outline-none resize-none text-xl;
      }
    }
  }
}
</style>
