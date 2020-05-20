import Vue from 'vue'
import App from './App.vue'
import router from './router'
import staff from './assets/staff.json'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      staff:staff.staff
    }
  },

  methods: {
    getEmployee(id) {
      return this.staff.find(employee => employee.id == id)
    },
    removeEmployee(id) {
      this.staff=this.staff.filter(employee => employee.id != id)
    },
    getStaffList() {
      return this.staff
    }
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
