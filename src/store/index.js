import Vue from 'vue'
import Vuex from 'vuex'
import staff from '@/assets/staff.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staff: staff.staff,
    idCounter: 0
  },
  getters: {
    getEmployee: state => id => {
      return state.staff.find(employee => employee.id == id)
    },
  },
  mutations: {
    removeEmployee(state, id) {
      state.staff = state.staff.filter(employee => employee.id != id)
    },
    addEmployee(state, employee) {
      employee.id = ++state.idCounter;
      state.staff.push(employee);
    },
    setId(state){
      state.idCounter=state.staff.length||1
    }
  },
  actions: {
    addEmployee(context,employee){
      context.commit('addEmployee',employee)
    },
    removeEmployee(context,employee){
      context.commit('removeEmployee',employee)
    },
    setId(context){
      context.commit('setId')
    }
  },
  modules: {
  },
})
