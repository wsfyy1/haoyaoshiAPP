<template>
	<div class="bao">
		<mt-header fixed title="资质保证">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<h2>经营证书</h2>
		<img src="../assets/zhizhao.jpg" alt="">
		<img src="../assets/xukezheng.jpg" alt="">
		<img src="../assets/xukezheng02.jpg" alt="">
		<img src="../assets/xukezheng03.jpg" alt="">
		<img src="../assets/xukezheng04.jpg" alt="">
		<img src="../assets/xukezheng05.jpg" alt="">
		<img src="../assets/xukezheng06.jpg" alt="">
		<img src="../assets/xukezheng07.jpg" alt="">
	</div>
</template>
<script>
export default {
  name: 'Bao',
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
	.bao{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
	}
	.bao .mint-header{
		background: #0075de;
		height:1rem;
	}
	.bao h2{
		width:100%;
		height:0.7rem;
		line-height:0.7rem;
		font-size: 0.4rem;
		font-weight:900;
		text-align: center;
		background:white;
	}
	.bao img{
		display: block;
		border: 0;
		width: 100%
	}
</style>