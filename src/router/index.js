import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head'
import Fenlei from '@/components/Fenlei'
import Classify from '@/components/Classify'
import Quan from '@/components/Quan'
import Bao from '@/components/Bao'
import Medicine from '@/components/Medicine'
import AllBuy from '@/components/AllBuy'
import SelfHelp from '@/components/SelfHelp'
import MySearch from '@/components/MySearch'
import WuliuSearch from '@/components/WuliuSearch'
import Pindao from '@/components/Pindao'
import Lingshi from '@/components/Lingshi'
/*import Muying from '@/components/Muying'
import Jisheng from '@/components/Jisheng'
import Man from '@/components/Man'
import Woman from '@/components/Woman'
import Child from '@/components/Child'
import Old from '@/components/Old'*/


Vue.use(Router)

export default new Router({
  routes: [
    {
    path:"/",
   	name: 'Head',
     component: Head
  },
	{
		path:"/",
      name: 'Fenlei',
      component: Fenlei
    },{
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
    	path:"/",
      name: 'Pindao',
      component: Pindao
    },{
    	path:"/Lingshi/:id",
      name: 'Lingshi',
      component: Lingshi
    },
  /*  {
    	path:"/Muying/:id",
      name: 'Muying',
      component: Muying
    },
    {
    	path:"/Jisheng/:id",
      name: 'Jisheng',
      component: Jisheng
    },
    {
    	path:"/Man/:id",
      name: 'Man',
      component: Man
    },
    {
    	path:"/Woman/:id",
      name: 'Woman',
      component: Woman
    },
     {
    	path:"/Child/:id",
      name: 'Child',
      component: Child
    },
    {
    	path:"/Old/:id",
      name: 'Old',
      component: Old
    }*/
  ]
})
