import Vue from 'vue'
import Router from 'vue-router'
import Analytics from './components/graphs'
import model from './components/TestSketch'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/graphs',
        name: 'graphs',
        component: Analytics
      },
 

      {
        path: '/model',
        name: 'model',
        component: model
      }
    ]
});
