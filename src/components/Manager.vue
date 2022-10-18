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
  @apply flex flex-wrap text-project-paragraph font-project-default font-semibold mb-40 px-30 mt-20;
  & .list-wrapper{
    @apply w-%50 flex flex-col flex-grow border-4 border-project-stroke;
    & .name {
      @apply w-full h-18 text-center bg-project-background outline-none resize-none text-2xl border-b-4 border-project-stroke overflow-hidden px-10 py-5;
    }
    & .list{
      @apply px-10 my-5;
      & .goal{
        @apply w-full min-h-14 bg-project-background outline-none resize-none text-xl;
      }
    }
  }
}
</style>
