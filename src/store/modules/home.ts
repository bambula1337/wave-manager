import { SET_LISTS } from '@/store/mutation-types';

export const initialState = {
  lists: null,
};

export const mutations = {
  [SET_LISTS](state: any, lists: object[]) {
    state.lists = lists;
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
};
