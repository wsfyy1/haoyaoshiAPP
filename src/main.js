// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Header, Button,Cell,Search ,TabContainer, TabContainerItem  } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Food  from './Food'
import router from './router'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Food/>',
  components: { Header,Food,Button, Search,TabContainer,TabContainerItem}
})
