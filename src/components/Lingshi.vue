<template>
	<div>
	
		<div class="lingshi">
		<mt-header fixed  class="titl" title="好药师商城">
  		 <router-link to="/" slot="left">
		    <mt-button icon="back"  class="yc" v-if="yincang">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right" ></mt-button>
  	</mt-header>
	<ul>
    	<li v-for="item in arr">
    		<!-- <router-link :to="{ name:'Xiang', params:{id:item.goodsId}}"> -->
    		<img :src="item.imageLink" />
    		<p>{{item.itemName}}</p>
    		<p>{{item.factory}}</p>
    		<p><span class="brand">{{item.tags[2]}}</span></p>
    		<p><span class="pri">￥{{item.price}}</span><i class="iconfont icon-gouwuche1"></i></p>
    		</router-link>
    	</li>
    </ul>
		</div>
		
	</div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'Lingshi',
  data(){
  	return {
  		arr:"",
  		yincang:true,
  	}
  },
  /* methods:{
  	xianshi(){
  		this.yincang=true
  	}
  		
  },*/
  created:function(){
  	console.log(window.location)
  	var arr=window.location.href.split("/")
  var str=arr[arr.length-1]
   	console.log(str)

	  var url = "/products?page=1&keyWord=&sortFields=&categories="+str+"&brand=&dosage=&type="
     Vue.axios.get(url).then((res)=> {
        return res.data.response.searchBaseInfo
      }).then((data)=>{
      	this.arr=data;
      	
      	console.log(this.arr)
      })
  

/*
created(){
	Vue.axios.get("/products?page=1&keyWord=&sortFields=&categories=646&brand=&dosage=&").then((res) =>{  
		console.log(res.data.response.searchBaseInfo)
		return res.response.searchBaseInfo
		
	}).then((data)=>{
		console.log(this)
		this.arr = data
	})*/
  }
}
</script>
<style scope>
	.lingshi{
		position: absolute;
		width: 100%;
		/*height: 100vh;*/
		z-index:100;
		left:0rem;
		top:1rem;
		background:white;
	}
<<<<<<< HEAD

=======
	.lingshi .mint-header{
		background: #0075de;
		height:1rem;
	}
>>>>>>> 863083844305da7dc77925326e4fad2ed4d51c44
	.lingshi .titl{
		font-size:0.3rem;
		height: 1rem

	}
	.lingshi ul{
		display: flex;
		justify-content: space-around;
		flex-flow:row wrap;
	}
	.lingshi li {
		width: 48%;
		height: 5rem;
		list-style: none;
		padding-left: 0.1rem
	}
	.lingshi .yc{
		font-size:0.25rem;
	}
	.lingshi li p{
		font-size:0.22rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.lingshi li span{
		font-size:0.22rem;
	}
	.brand{
		background: skyblue;

		
	}
	.pri{
		color: #f00;
		margin-right: 2rem
	}
	 .icon-gouwuche1{
	 	/* width: 1rem;
	 	height:1rem; */
	 	color:white;
	 	background: #e7103e;
	 	border-radius: 0.5rem
	 }


</style>