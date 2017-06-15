<template>
	<div class="medicine">
		<mt-header fixed title="家庭药箱">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_01.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_02.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_03.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_04.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_05.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_06.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_07.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_08.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_09.jpg" alt="">
		<img src="http://img01.img.ehaoyao.com/zx/uploads/special/2016/12/67057/images/indexM_10.jpg" alt="">
	</div>
</template>
<script>
export default {
  name: 'Medicine',
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
	.medicine{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		height:100%;
	}
	.medicine .mint-header{
		background: #0075de;
		height:1rem;
	}
	.medicine img{
		width:100%;
		display: block;
		border:0;
	}
</style>