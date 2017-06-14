<template> 
   <div id ="box">
  <router-view></router-view> 
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-container1" >
        <Fenlei></Fenlei>
        <Pindao></Pindao>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
       <mt-tab-container-item id="tab-container4">
        <mt-cell v-for="n in 7" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
       <mt-tab-container-item id="tab-container5">
        <Wode></Wode>
      </mt-tab-container-item>
    </mt-tab-container>
  <div class="footer"> 
       <mt-tabbar >
            <mt-tab-item >
                <i class="iconfont icon-shouye-copy-copy-copy" @click="choose1"></i>
                <span > 首页</span>
            </mt-tab-item>
            <mt-tab-item  >
                <i class="iconfont icon-ditu" @click="choose2"></i>  
                <span> 联系我们</span>
            </mt-tab-item>
            <mt-tab-item >
                 <i class="iconfont icon-fenlei1"  @click="choose3"></i>  
                 <span >分类</span>
            </mt-tab-item>
            <mt-tab-item >
                  <i class="iconfont icon-gouwuche1"  @click="choose4"></i> 
                  <span>购物车</span>
            </mt-tab-item>
            <mt-tab-item  >
              <i class="iconfont icon-wode" @click="choose5"></i>
              <span>我的</span>
            </mt-tab-item>
      </mt-tabbar>
    </div> 
  </div>
</template>

<script>
import Fenlei from "./components/Fenlei"
import Pindao from "./components/Pindao"
import Wode from "./components/Wode"

export default {
  name: 'Maining',
  data(){
    return{
      selected: 'tab-container1'
    }
  },
  template:"<Fenlei></Fenlei><Pindao></Pindao><Wode></Wode>",
  components:{
    Fenlei,
    Pindao,
    Wode
  },
  methods:{
    choose1(){
      this.selected  = 'tab-container1'
    },
    choose2(){
      this.selected  = 'tab-container2'
    },
    choose3(){
      this.selected  = 'tab-container3'
    },
    choose4(){
      this.selected  = 'tab-container4'
    },
     choose5(){
      this.selected  = 'tab-container5'
    }
  }
}
</script>

<style scope>
#box{
  height:100vh;
}
.footer{
height: 1rem;
position: fixed;
bottom: 0;
left:0;
width: 100%;

}
span{
  color:black;
}
.mint-tab-item-label{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:  column nowrap;
}

.iconfont{
  color:#000;
  font-size:0.4rem;
}
.mint-tab-container-wrap{
  height: 70vh
}
.mint-tab-item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:  column nowrap;
}
.mint-tabbar{
  height: 1rem;
}
#box .mt-tab-container-item{
  background: #F2F2F2;
}
</style>
