<template>
	<div class="wuliuSearch">
		<mt-header fixed title="物流查询">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			 </router-link>
			 <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
	  	<h3>输入手机号</h3>
		<div class="Pnumber">
			<input type="text" v-model="zhanghao" placeholder="手机号">
		</div>
		<div class="yanzhengma">
			<input type="password" v-model="mima" placeholder="请输入密码">
			<!-- <button class="btn">获取验证码</button> -->
		</div>
		<button class="denglu" @click="tijiao">查询</button>
	  	<Yqlink></Yqlink>
	</div>
</template>
<script>
import Yqlink from '@/components/Yqlink'
export default {
  name: 'WuliuSearch',
  components:{
  	Yqlink
  },
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
	.wuliuSearch input{
		padding-left:40px;
	}
	.wuliuSearch .Pnumber{
		width:95%;
		height:0.8rem;
		margin:0 auto;
	}
	.wuliuSearch .Pnumber input{
		display: block;
		width:100%;
		height:100%;
		border:0;
		outline: none;
		display: block;
	}
	.wuliuSearch .yanzhengma{
		width:95%;
		height:0.8rem;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		background: #fff;
		margin:5px auto;
	}
	.wuliuSearch .yanzhengma input{
		display: block;
		float: left;
		width:50%;
		height: 100%;
		border:0;
		outline: none;
	}
	.wuliuSearch .denglu{
		width:90%;
		height:0.7rem;
		border:0;
		border-radius: 5px;
		background:#0075de;
		margin-left:5%;
		color:#fff;
		outline: none;
		margin-bottom: 0.3rem;
	}
	.wuliuSearch h3{
		font-size: 0.25rem;
		font-weight:100;
		height:0.6rem;
		line-height: 0.6rem;
		border-top: 1px solid #dcdcdc;
		margin-top: 5px;
		padding-left: 10px;
	}
	.wuliuSearch .yqlink{
		position: fixed;
		left:0;
		bottom: 0;
	}	
</style>