<template>
	<div class="wode">
		<mt-header fixed title="手机验证码登录">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<div class="Pnumber">
			<input type="text" v-model="zhanghao" placeholder="请输入账号">
		</div>
		<div class="yanzhengma">
			<input type="password" v-model="mima" placeholder="请输入密码">
			<!-- <button class="btn">获取验证码</button> -->
		</div>
		<button class="denglu" @click="tijiao">立即登录</button>
		<router-link :to="{ name:'Register' }" class="a1">免费注册</router-link>
		<p>您还可以通过以下方式登录：</p>
		<div class="fangshi">
			<dl>
				<dt><img src="http://m.ehaoyao.com/v4/images/xinlang_fa2f7c4.png" alt=""></dt>
				<dd>微博登录</dd>
			</dl>
			<dl>
				<dt><img src="http://m.ehaoyao.com/v4/images/qq1_d6f3c00.png" alt=""></dt>
				<dd>QQ登录</dd>
			</dl>
		</div>
	</div>
</template>
<script>
import jsonp from "jsonp"
import Vue from "vue"
import { MessageBox } from 'mint-ui';
export default {
  name: 'Wode',
  data:function(){
		return {
			yincang:true,
			arr:"",
			zhanghao:"",
	  		mima:"",
	  		cheng:""
		}
	}, 
	computed:function(){
  		MessageBox('提示', '操作成功');
  	},	
	methods:{
		xianshi(){
			this.yincang=true
		},
		tijiao:function(){
	  		console.log(this.zhanghao)
	  		var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+this.zhanghao+"&password="+this.mima
	  		Vue.axios.post(url).then((res)=> {
	  		 	console.log(res)
	    		 return res.data
	   		}).then((data)=>{
	   			if(data==0){
	   				MessageBox.alert("用户名不存在", "提示");
	   			}else if(data==2){
	   				MessageBox.alert("账号密码不匹配", "提示");

	   			}else{
	   				this.cheng="登录成功"
	   				this.$router.push("/")
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
	.wode{
		width:100%;
	}
	.wode .mint-header{
		background: #0075de;
		height:1rem;
	}
	.wode input{
		padding-left:40px;
	}
	.wode .Pnumber{
		width:100%;
		height:0.8rem;
		margin-top: 1rem;
	}
	.wode .Pnumber input{
		width:100%;
		height:100%;
		border:0;
		outline: none;
		display: block;
	}
	.wode .yanzhengma{
		width:100%;
		height:0.8rem;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		background: #fff;
	}
	.wode .yanzhengma input{
		display: block;
		float: left;
		width:50%;
		height: 100%;
		border:0;
		outline: none;
	}
	/*.wode .yanzhengma button{
		display: block;
		width:28%;
		height:80%;
		margin: 1% 3% 0 0;
		border: 0;
		float: right;
		font-size: 0.25rem;
		background: #0075de;
		color:#fff;
		border-radius:2px;
		outline: none;
	}*/
	.wode .denglu{
		width:90%;
		height:0.7rem;
		border:0;
		border-radius: 5px;
		background:#0075de;
		margin-left:5%;
		color:#fff;
		outline: none;
	}
	.wode .a1{
		color:#5790bb;
		font-size: 0.25rem;
		float:right;
		margin-top: 10px;
		padding-left: 10px;
	}
	.wode p{
		width:90%;
		height:0.5rem;
		padding-top: 0.25rem;
		margin:40px 0 0 5%;
		border-top:1px solid #dad9d9;
		font-size: 0.25rem;
		color:#666;
	}
	.wode .fangshi{
		width:100%;
		height:0.8rem;
		padding-left:10%;
	}
	.wode .fangshi dl{
		width:0.9rem;
		height:1.2rem;
		float:left;
		margin-left: 60px;
	}
	.wode .fangshi dl dt{
		width:0.7rem;
		height:0.7rem;
		padding: 0.1rem 0 0 0.1rem;
		border-radius: 0.45rem;
		border:1px solid #d2d2d2;
		background:#fff;
	}
	.wode .fangshi dl dt img{
		display: block;
		width:80%;
	}
	.wode .fangshi dl dd{
		width:100%;
		height:0.3rem;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.15rem;
		color:#666;
	}
</style>