<template>
  <div >
    <div class="head">
          <span class ="back iconfont icon-fanhui1"></span>
          <mt-search  class="search"  placeholder="晚餐"></mt-search>
          <span  class="more iconfont icon-xuanzetiaomu" ></span>
          <h2></h2>
    </div> 

   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Food'
}
</script>

<style>
.mint-searchbar-cancel{display: none}
.head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px
}
.mint-searchbar-inner{
  padding: 0; 
  background: #ededf4
}
.mint-searchbar{
  padding: 0;
  height: 100%;
  border:1px solid #ccc;
  border-radius:5px;

}
.mint-searchbar-inner .mintui-search{
  font-size:20px;
  color:#9292a0;
}
.search{
  width: 80%;
  height: 30px;
  font-size:30px;
}
input{
  background-color: #ededf4
}
.more{
 height: 41px;
 width:5%;
 display: block;
 font-size:26px;
 display: flex;
 align-items: center;
}

</style>
