<template>
	<div class="register">
		<mt-header fixed title="用户注册">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" ></mt-button>
	  	</mt-header>
		<div class="Pnumber">
			<input type="text" v-model="zhanghao" placeholder="用户名/手机号/邮箱">
		</div>
		<div class="mima">
			<input type="password" v-model="mima" placeholder="密码">
		</div>
		<button class="denglu" @click="tijiao">立即注册</button>
	</div>
</template>
<script>
import jsonp from "jsonp"
import Vue from "vue"
export default {
	name: 'Register',
  	data:function(){
		return {
			yincang:true,
			arr:"",
			zhanghao:"",
	  		mima:"",
	  		cheng:""
		}
	},
	methods:{
		tijiao:function(){
			console.log(this.zhanghao)
			var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+this.zhanghao+"&password="+this.mima
			 Vue.axios.post(url).then((res)=> {
			 	console.log(res)
	    		 return res.data
	   		}).then((data)=>{
	   			if(data==1){
	   				this.cheng="注册成功"
	   				this.$router.push("/Wode")
	   			}else{
	   				this.cheng="该用户已注册"
	   			}
	   		})
		}

	}
}
</script>
<style scope>
	*{
		margin: 0;
		padding: 0;
	}
	.register{
		width:100%;
		height:100vh;
		background: #F2F2F2;
	}
	.register .mint-header{
		background: #0075de;
		height:1rem;
	}
	.register input{
		padding-left:40px;
	}
	.register .Pnumber{
		width:100%;
		height:0.8rem;
		margin-top: 1rem;
	}
	.register .Pnumber input{
		width:100%;
		height:100%;
		border:0;
		outline: none;
		display: block;
	}
	.register .mima{
		width:100%;
		height:0.8rem;
		margin-top: 1px;
	}
	.register .mima input{
		width:100%;
		height:100%;
		border:0;
		outline: none;
		display: block;
	}
	.register .denglu{
		width:90%;
		height:0.7rem;
		border:0;
		border-radius: 5px;
		background:#0075de;
		margin-left:5%;
		color:#fff;
		outline: none;
	}
	.register .a1{
		color:#5790bb;
		font-size: 0.25rem;
		float:right;
		margin-top: 10px;
		padding-left: 10px;
	}
	.register p{
		width:90%;
		height:0.5rem;
		padding-top: 0.25rem;
		margin:40px 0 0 5%;
		border-top:1px solid #dad9d9;
		font-size: 0.25rem;
		color:#666;
	}
	.register .fangshi{
		width:100%;
		height:0.8rem;
		padding-left:10%;
	}
	.register .fangshi dl{
		width:0.9rem;
		height:1.2rem;
		float:left;
		margin-left: 60px;
	}
	.register .fangshi dl dt{
		width:0.7rem;
		height:0.7rem;
		padding: 0.1rem 0 0 0.1rem;
		border-radius: 0.45rem;
		border:1px solid #d2d2d2;
		background:#fff;
	}
	.register .fangshi dl dt img{
		display: block;
		width:80%;
	}
	.register .fangshi dl dd{
		width:100%;
		height:0.3rem;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.15rem;
		color:#666;
	}
</style>