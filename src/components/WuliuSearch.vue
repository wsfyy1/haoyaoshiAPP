<template>
	<div class="wuliuSearch">
		<mt-header fixed title="物流查询">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
	</div>
</template>
<script>
export default {
  name: 'WuliuSearch',
  data:function(){
		return {
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
	*{
		margin: 0;
		padding: 0;
	}
	.wuliuSearch{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		height:100vh;
		background: #F2F2F2;
	}
	.wuliuSearch .mint-header{
		background: #0075de;
		height:1rem;
	}	
</style>