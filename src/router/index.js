import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head'
import Swipper from '@/components/Swipper'
import Fenlei from '@/components/Fenlei'
import Pindao from '@/components/Pindao'
import Yqlink from '@/components/Yqlink'


import Classify from '@/components/Classify'
import Quan from '@/components/Quan'
import Bao from '@/components/Bao'
import Medicine from '@/components/Medicine'
import AllBuy from '@/components/AllBuy'
import SelfHelp from '@/components/SelfHelp'
import MySearch from '@/components/MySearch'
import WuliuSearch from '@/components/WuliuSearch'
import Register from '@/components/Register'
import Wode from '@/components/Wode'


import Lingshi from '@/components/Lingshi'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    },
    {
    	path: '/Classify',
	    name: 'Classify',
	    component: Classify
    },{
    	path: '/Quan',
	    name: 'Quan',
	    component: Quan
    },{
    	path: '/Bao',
	    name: 'Bao',
	    component: Bao
    },{
    	path: '/Medicine',
	    name: 'Medicine',
	    component: Medicine
    },{
    	path: '/AllBuy',
	    name: 'AllBuy',
	    component: AllBuy
    },{
    	path: '/SelfHelp',
	    name: 'SelfHelp',
	    component: SelfHelp
    },{
    	path: '/MySearch',
	    name: 'MySearch',
	    component: MySearch
    },{
    	path: '/WuliuSearch',
	    name: 'WuliuSearch',
	    component: WuliuSearch
    },{
    	path:"/Lingshi/:id",
      name: 'Lingshi',
      component: Lingshi
    },{
      path:"/Register",
      name: 'Register',
      component: Register
    },{
      path:"/Wode",
      name: 'Wode',
      component: Wode
    }

  ]
})
