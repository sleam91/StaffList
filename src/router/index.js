import Vue from 'vue'
import VueRouter from 'vue-router'
import StaffView from '../views/Staff.vue'
import DetailsView from '../views/Details.vue'
import EditView from '../views/Edit.vue'
import CreateView from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/staff',
    name: 'StaffView',
    component: StaffView,
    children: [{
      path: ':id',
      name: 'DetailsView',
      component: DetailsView,
    },

    {
      path: ':id/edit',
      name: 'EditView',
      component: EditView,

    }]

  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView,

  }
]






const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
