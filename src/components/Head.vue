<template>
  <div class="Headd">
    <div class="head">
      <img src="http://m.ehaoyao.com/v4/images/logo.png">
      <mt-search  class="search"  placeholder="请输入你要搜索的商品"></mt-search>
      <router-link :to="{ name:'Wode' }">登录</router-link>
    </div> 
    <Swipper></Swipper>
    <Fenlei></Fenlei>
    <Pindao></Pindao>
    <Yqlink></Yqlink>
  </div>
</template>

<script>
import Swipper from '@/components/Swipper'
import Fenlei from '@/components/Fenlei'
import Pindao from '@/components/Pindao'
import Yqlink from '@/components/Yqlink'
export default {
  name: 'Head',
  components:{
    Swipper,
    Fenlei,
    Pindao,
    Yqlink
  }
}
</script>

<style scope>
*{
  margin:0;
  padding:0;
}
html{
  font-size:15.625vw;
}
.mint-searchbar-cancel{display: none}
.head{
  position: fixed;
  left:0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height: 1rem;
  background: #0075de;

}
.mint-searchbar-inner{
  padding: 0; 

}
.mint-searchbar{
  padding: 0;
  height: 100%;
  border:1px solid #ccc;
  background: white

}
.mint-searchbar-inner .mintui-search{
  font-size:20px;
}
.search{
  width: 70%;
  height: 37px;
  font-size:30px;
  border-radius: 10px 
}
.head img{
  width: 0.8rem;
  height: 0.8rem

}
a{
  display: flex;
  font-size:0.3rem;
  text-decoration: none;
  color:white;
  padding-right: 0.2rem
}

</style>