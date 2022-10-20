<template>
  <div class="manager">
    <transition-group name="lists-animation" class="transition-wrapper" tag="div">
      <div class="list-wrapper" v-for="list in lists" :key="list.id">
        <div class="list">
          <div class="name-wrapper">
            <label for="name">
          <textarea @input="heightFixer($event.target)" name="" id="name" class="name"
                    placeholder="Name" v-model="list.name"></textarea>
            </label>
            <div class="delete-wrapper" @click="deleteList(lists, list.id-1)"
                 @keydown.ctrl="deleteList(lists, list.id)">
              <img src="@/assets/icons/cross.svg" alt="" class="icon">
            </div>
          </div>
          <div class="list">
            <div class="goal-wrapper">
              <label for="goal" v-for="goal in list.goals" :key="goal.id">
          <textarea @input="heightFixer($event.target)" name="" id="goal" class="goal"
                    :readonly="false" placeholder="Text" v-model="goal.text"></textarea>
              </label>
            </div>
            <div class="add-wrapper" @click="createGoal(list.goals)"
                 @keydown.enter="createGoal(list.goals)">
              <img src="@/assets/icons/cross.svg" alt="" class="icon">
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ManagerComponent',
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'Some List',
          goals: [
            {
              id: 1,
              text: 'Some Goal',
            },
          ],
        },
        {
          id: 2,
          name: 'Some',
          goals: [
            {
              id: 1,
              text: 'Some Goal',
            },
          ],
        },
        {
          id: 3,
          name: '',
          goals: [
            {
              id: 1,
              text: '',
            },
          ],
        },
      ],
    };
  },
  methods: {
    heightFixer(el: HTMLInputElement): void {
      el.style.height = '0px';
      el.style.height = `${el.scrollHeight}px`;
    },
    createGoal(list: object[]): void {
      list.push(
        {
          id: list.length + 1,
          text: '',
        },
      );
    },
    deleteList(list: never[], id: number): void {
      list.splice(id, 1);
    },
  },
});
</script>

<style lang="scss" scoped>
.manager {
  @apply flex flex-wrap text-project-paragraph font-project-default font-semibold mb-40 px-30 mt-20;
  .transition-wrapper {
    @apply flex flex-wrap w-full h-full;
    & .list-wrapper {
      @apply min-h-50 w-%50 flex flex-col flex-grow border-4 border-project-stroke;
      & .list {
        @apply w-full relative bg-project-background;

        & .name {
          @apply w-full h-18 text-center bg-project-background outline-none resize-none text-2xl border-b-4 border-project-stroke overflow-hidden px-26 py-5;
        }

        & .delete-wrapper {
          @apply absolute top-5 right-4 cursor-pointer;
          & .icon {
            @apply w-8 opacity-50;
          }
        }

        & .list {
          @apply flex flex-col h-%50 pl-10 my-5 mb-15;

          & .goal {
            @apply w-full bg-project-background outline-none resize-none text-xl pr-22 mb-5 h-7;

          }

          & .add-wrapper {
            @apply absolute -top-3 right-2 cursor-pointer;
            & .icon {
              @apply w-9 rotate-45;
            }
          }
        }
      }
    }
  }
}

//.lists-animation-move{
//  transition: transform 1s !important;
//}
.lists-animation-move {
  transition: all 0.7s;

}

/* apply transition to moving elements */
.lists-animation-enter-active,
.lists-animation-leave-active {
  transition: all 1s;
}

.lists-animation-enter-from,
.lists-animation-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.lists-animation-leave-active {
  position: absolute;
}
</style>
