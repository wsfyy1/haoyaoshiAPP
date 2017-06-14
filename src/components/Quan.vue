<template>
	<div class="quan">
		<mt-header fixed title="领券专区">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<img src="../assets/quan1.png" alt="">
		<img src="../assets/quan2.png" alt="">
		<img src="../assets/quan3.png" alt="">
		<img src="../assets/quan4.png" alt="">
	</div>
</template>
<script>
export default {
  name: 'Quan',
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
	.quan{
		position:absolute;
		width:100%;
		height:100vh;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		background: #fff;
	}
	.quan .mint-header{
		background: #0075de;
		height:1rem;
	}
	.quan img{
		display: block;
		margin:0 auto;
	}
</style>