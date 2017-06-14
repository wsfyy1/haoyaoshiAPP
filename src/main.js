// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Header,Button ,Cell,Search ,TabContainer, TabContainerItem ,Tabbar, TabItem  } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Maining  from './Maining'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Maining/>',
  components: { Header,Button,Maining,Search,Tabbar,TabItem,TabContainer,TabContainerItem,}
})
