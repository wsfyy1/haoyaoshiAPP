<template>
	<div>	
		<div class="lingshi">
			<mt-header fixed  class="titl" title="好药师商城">
			    <mt-button icon="back" class="yc" slot="left" @click="shang">返回</mt-button>
			  <mt-button icon="more" slot="right" ></mt-button>
		  	</mt-header>
			<ul>
		    	<li v-for="item in arr">
		    		<img :src="item.imageLink" />
		    		<p>{{item.itemName}}</p>
		    		<p>{{item.factory}}</p>
		    		<p class=""><span class="brand">{{item.tags[2]}}</span></p>
		    		<p class="jiage"><span class="pri">￥{{item.price}}</span><i class="iconfont icon-gouwuche1"></i></p>
		    		
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
   methods:{
  		shang(){
  		this.$router.go(-1)
  	}  		
  },
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
  }
}
</script>
<style scope>
	.lingshi{
		position: absolute;
		width: 100%;
		z-index:100;
		left:0rem;
		top:1rem;
		background:#F2F2F2;
	}
	.lingshi .mint-header{
		background: #0075de;
		height:1rem;
	}
	.lingshi .titl{
		font-size:0.3rem;
		height: 1rem
	}
	.lingshi ul{
		display: flex;
		justify-content: center;
		flex-flow:row wrap;
	}
	.lingshi li {
		width: 46%;
		list-style: none;
		padding: 0.1rem;
		border:1px solid #dcdcdc;
	}
	.lingshi .yc{
		font-size:0.25rem;
	}
	.lingshi li img{
		display: block;
		margin:0 auto;
	}
	.lingshi li p{
		font-size:0.22rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin:5px 0;
	}
	.lingshi li .jiage{
		margin:10px 0;
	}
	.lingshi li span{
		font-size:0.1rem;		
	}
	.brand{
		background: #0075de;
		border-radius: 2px;
		color:white;		
	}
	.pri{
		color: #f00;
		float:left;
		margin-top: 0.1rem;
	}
	 .icon-gouwuche1{
	 	float:right;
	 	color:white;
	 	background: #e7103e;
	 	border-radius: 0.2rem;
	 	font-size: 0.38rem!important;
	 }
</style>