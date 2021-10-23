import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from './views/Detail.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [

    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})

