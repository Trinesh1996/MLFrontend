import Vue from 'vue'
import Router from 'vue-router'
import Analytics from './components/graphs'
import model from './components/TestSketch'
import about from './components/views/about'
import controlPanel from './components/controlPanel'
import SupervisedLearning from './components/views/SupervisedLearning/SupervisedLearning'
import Regression from './components/views/SupervisedLearning/AboutRegression'
import Classification from './components/views/SupervisedLearning/AboutClassification'

import UnsupervisedLearning from './components/views/UnsupervisedLearning/unsupervisedLearning'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/Graphs',
        name: 'Graphs',
        component: Analytics
      },
 

      {
        path: '/model',
        name: 'model',
        component: model
      },


      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/controlPanel',
        name: 'control_panel',
        component: controlPanel
      },

      {
        path: '/supervisedLearning',
        name: 'supervisedLearning',
        component: SupervisedLearning
      },
      {
        path: '/regression',
        name: 'regression',
        component: Regression
      },

      {
        path: '/classification',
        name: 'classificatiob',
        component: Classification
      },



      {
        path: '/unsupervisedLearning',
        name: 'unsupervisedLearning',
        component: UnsupervisedLearning
      },
      




    ]
});
