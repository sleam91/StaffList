import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({

  router,
  store,  
  created() {
    this.$store.state.idCounter = this.$store.state.staff.length||1
    console.log("here")
  },
  render: h => h(App)
}).$mount('#app')
