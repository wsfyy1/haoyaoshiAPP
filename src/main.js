// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Cell,Search ,TabContainer, TabContainerItem ,Tabbar, TabItem  } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Maining  from './Maining'
import router from './router'

Vue.config.productionTip = false
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Maining/>',
  components: { Maining,Search,Tabbar,TabItem,TabContainer,TabContainerItem}
})
