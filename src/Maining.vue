<template> 
   <div id ="box">
  <router-view></router-view> 

  <div class="footer"> 
       <mt-tabbar >
            <mt-tab-item >
              <router-link :to="{ name:'Head' }">
                <i class="iconfont icon-shouye-copy-copy-copy"></i>
                <span > 首页</span>
              </router-link>
            </mt-tab-item>
            <mt-tab-item  >
              <router-link :to="{ name:'Lingshi' , params:{ id:1666 } }">
                <i class="iconfont icon-ditu" ></i>  
                <span> 热销产品</span>
              </router-link>
            </mt-tab-item>
            <mt-tab-item >
              <router-link :to="{ name:'Classify' }">
                 <i class="iconfont icon-fenlei1"></i>  
                 <span >分类</span>
              </router-link>
            </mt-tab-item>
            <mt-tab-item >
              <router-link :to="{ name:'Classify'}" >
                <i class="iconfont icon-gouwuche"></i> 
                <span>购物车</span>
              </router-link>
            </mt-tab-item>
            <mt-tab-item  >
              <router-link :to="{ name:'Wode' }">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
              </router-link>
            </mt-tab-item>
      </mt-tabbar>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Maining'
}
</script>

<style scope>
#box{
  height:100vh;
  background: #F2F2F2;
}
.footer{
height: 1rem;
position: fixed;
bottom: 0;
left:0;
width: 100%;

}
.footer .mint-tab-item a span{
  color:black;
  font-size: 0.2rem;
  margin-top: 0.08rem;
}
.footer .mint-tab-item-label{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:  column nowrap;
}

.footer .iconfont{
  color:#000;
  font-size:0.4rem;
}
.footer .mint-tab-container-wrap{
  height: 100vh-2rem
}
.footer .mint-tab-item a{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:  column nowrap;
}
.footer .mint-tabbar{
  height: 1rem;
}
#box .mt-tab-container-item{
  background: #F2F2F2;
  height:100%;
}
.footer .sp{
  height:100vh;
}
.footer .mint-tab-container-item .classify{
  position:static;
  width:100vw;
  height:100vh;
  background:#F2F2F2; 
}
</style>
