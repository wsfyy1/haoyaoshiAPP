<template>
	<div class="allBuy">
		<mt-header fixed title="全球购">  		 
			    <mt-button icon="back" slot="left" @click="shang">返回</mt-button>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
	</div>
</template>
<script>
export default {
  name: 'AllBuy',
  data:function(){
		return {
			 yincang:true,
			arr:"",
		}
	}, 	
	methods:{
		shang(){
  		this.$router.go(-1)
  	}
			
	}
}	
</script>
<style scope>
	*{
		margin: 0;
		padding: 0;
	}
	.allBuy{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		height:100vh;
		background: #F2F2F2;
	}
	.allBuy .mint-header{
		background: #0075de;
		height:1rem;
	}
</style>