<template>
		<div class="classify">
			<mt-header fixed title="商品分类">
		  		 <router-link to="/" slot="left">
				    <mt-button  v-if="yincang">X</mt-button>
				  </router-link>
				  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
		  	</mt-header>
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">食品百货</mt-tab-item>
				<mt-tab-item id="2">母婴专场</mt-tab-item>
				<mt-tab-item id="3">中药养生</mt-tab-item>
				<mt-tab-item id="4">营养保健</mt-tab-item>
				<mt-tab-item id="5">医疗器械</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  	<mt-tab-container-item id="1">
			    	<ul>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:642 }} ">酒水</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:646 }}">零食</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:764 }}">饮料</router-link>
			    		</li>
			    	</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
				    <ul>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:684 }}">幼儿奶粉</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:692 }}">米粉</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:1791 }}">麦粉</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:695 }}">小馒头</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:701 }}">玩具</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:705 }}">防辐射服</router-link>
			    		</li>
			    	</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
				    <ul>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:433 }}">西洋参</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:434 }}">太子参</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:1665 }}">阿胶块</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:1666 }}">阿胶糕</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:438 }}">菊花</router-link>
			    		</li>
			    	</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
				    <ul>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:632 }}">蛋白质粉</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:633 }}">成人奶粉</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:655 }}">维生素</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:656 }}">矿物质</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:657 }}">抗疲劳</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:658 }}">美容抗衰老</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:660 }}">调节胃肠</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:661 }}">养血补血</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:669 }}">提高免疫</router-link>
			    		</li>
			    	</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
				    <ul>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:380 }}">血糖仪</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:381 }}">血糖试纸</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:393 }}">手术器具</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:749 }}">医用耗材</router-link>
			    		</li>
			    		<li>
			    			<router-link :to="{ name:'Lingshi', params:{ id:394 }}">颈椎治疗</router-link>
			    		</li>
			    	</ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>

</template>
<script>
export default {
  name: 'Classify',
  data(){
  	return{
  		selected:'1',
  		yincang:true,
		arr:"",
  	}
  }, 	
	methods:{
		xianshi(){
		this.yincang=true
	},
			
   }
}	
</script>
<style scope>
	html{
		font-family:"微软雅黑";
	}
	.classify{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		height:100%;
		background:#F2F2F2; 
	}
	.classify .mint-header{
		background: #0075de;
		height:1rem;
	}
	.classify .mint-navbar{
		flex-direction: column;
		width:25%;
		height:100%;
		float:left;
	}
	.classify .mint-tab-item{
		width:100%;
		height:0.25rem;
		border-bottom: 1px solid #f4f4f4;				
	}
	.mint-navbar .mint-tab-item.is-selected{
		background:#F2F2F2; 
		border-bottom: 0;
		border-left: 3px solid #DD2726;
	}
	.classify .mint-tab-item-label{
		font-size:0.3rem;
		color:black;
	}
	.classify .mint-tab-item.is-selected .mint-tab-item-label{
		color:#DD2726;
	}
	.classify .mint-tab-container{
		float:right;
		width:75%;
		height:100%;
	}
	.classify  ul{
		width:100%;
		margin-top:10px;
		padding:0 10px;
	}
	.classify h4{
		width:100%;
		height:0.3rem;
		line-height: 0.3rem;
		font-size:0.3rem;
		text-align: center;
		margin-bottom: 10px;
	}
	.classify  ul li{
		width:100%;
		height:0.8rem;
		margin-bottom: 10px;
		background: #fff;
		list-style: none;
		
	}
	.classify  ul li a{
		display: block;
		width: 100%;
		height: 100%;
		font-size:0.28rem;
		color:#999;
		text-align: center;
		line-height: 0.8rem;
	}
</style>