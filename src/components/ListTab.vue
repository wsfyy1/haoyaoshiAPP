<template>
  <div class="ListTab">
    <div class="but">
      <button @click="choose1">综合最佳</button>
       <button @click="choose2">收藏最多</button>
        <button @click="choose3">做过最多</button>
      </div>
         <mt-tab-container v-model="active" >
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="item in 10" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'ListTab',
  data () {
    return {
      active: 'tab-container1'
    }
  },
  methods:{
    choose1(){
      this.active = "tab-container1"
    },
     choose2(){
      this.active = "tab-container2"
    },
     choose3(){
      this.active = "tab-container3"
    }
  },
  //获取数据
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.but{
  border-top:1px solid #ccc;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.but button{
    color:orange;
    background-color: white;
    border:0;
    outline:none;
}


</style>
