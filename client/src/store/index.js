import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // list: [
    //   {
    //     id:1, name:'name01', checked:false
    //   },
    //   {
    //     id:2, name:'name02', checked:true
    //   },
    // ]
  },
  mutations: {
    // ADD_NAME(state) {
    //   state.list.push({
    //     id: Math.random(),
    //     name: state.name,
    //     checked: false,
    //   })
    // },
    // UPDATE_INPUT(state, {id, checked}) {
    //   const idx = state.list.findIndex(item => {
    //     return item.id === id;
    //   })
    //   state.list[idx].checked = checked
    // },
    // DELETE_INPUT(state) {
    //   state.list = state.list.filter(item => item.checked === false)
    // }
  },
  actions: {},
  modules: {},
});
