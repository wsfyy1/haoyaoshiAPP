<template>
	<div class="mySearch">
		<mt-header fixed title="我要寻药">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<div class="Pnumber">
			<input type="text" placeholder="请输入账号" v-model="zhanghao">
		</div>
		<div class="yanzhengma">
			<input type="password" placeholder="请输入密码" v-model="mima">
		</div>
		<button class="denglu" @click="tijiao">立即登录</button>
		<router-link to="" class="a1">免费注册</router-link>
		<router-link to="" class="a2">账号登录</router-link>
		<p>您还可以通过以下方式登录：</p>
		<div class="fangshi">
			<dl>
				<dt><img src="http://m.ehaoyao.com/v4/images/xinlang_fa2f7c4.png" alt=""></dt>
				<dd>微博登录</dd>
			</dl>
			<dl>
				<a href="tencent://message/?uin=292042177&Site=有事Q我&Menu=yes">
					<dt><img src="http://m.ehaoyao.com/v4/images/qq1_d6f3c00.png" alt=""></dt>
					<dd>QQ登录</dd>
				</a>
				
			</dl>
		</div>		
		<Yqlink></Yqlink>
	</div>
</template>
<script>
import jsonp from "jsonp"
import Vue from "vue"
import { MessageBox } from 'mint-ui';
import Yqlink from '@/components/Yqlink'
export default {
  name: 'MySearch',
  components:{
  	Yqlink
  },
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
	   				this.$router.push({ name:'Lingshi' , params:{id:1617}})
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
	html{
		font-size: 15.625vw;
	}
	.mySearch{
		width:100%;
		height:100vh;
		background: #F2F2F2;
		position: absolute;
		left:0;
		top:1rem;
		z-index:1;
	}
	.mySearch .mint-header{
		background: #0075de;
		height:1rem;
	}
	.mySearch input{
		padding-left:40px;
	}
	.mySearch .Pnumber{
		width:100%;
		height:0.8rem;
	}
	.mySearch .Pnumber input{
		width:100%;
		height:100%;
		border:0;
		outline: none;
		display: block;
	}
	.mySearch .yanzhengma{
		width:100%;
		height:0.8rem;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
		background: #fff;
	}
	.mySearch .yanzhengma input{
		display: block;
		float: left;
		width:50%;
		height: 100%;
		border:0;
		outline: none;
	}
	.mySearch .denglu{
		width:90%;
		height:0.7rem;
		border:0;
		border-radius: 5px;
		background:#0075de;
		margin-left:5%;
		color:#fff;
		outline: none;
	}
	.mySearch .a1{
		color:#5790bb;
		font-size: 0.25rem;
		float:right;
		border-left: 2px solid #bfbfbf;
		margin-top: 10px;
		padding-left: 10px;
	}
	.mySearch .a2{
		color:#5790bb;
		font-size: 0.25rem;
		float:right;
		margin-top: 10px;
	}
	.mySearch p{
		width:90%;
		height:0.5rem;
		padding-top: 0.25rem;
		margin:40px 0 0 5%;
		border-top:1px solid #dad9d9;
		font-size: 0.25rem;
		color:#666;
	}
	.mySearch .fangshi{
		width:100%;
		height:0.8rem;
		padding-left:10%;
		margin-bottom: 0.4rem;
	}
	.mySearch .fangshi dl{
		width:0.9rem;
		height:1.2rem;
		float:left;
		margin-left: 60px;
	}
	.mySearch .fangshi dl a{
		display: block;
		width: 100%;
		height:100%;
	}
	.mySearch .fangshi dl dt{
		width:0.7rem;
		height:0.7rem;
		padding: 0.1rem 0 0 0.1rem;
		border-radius: 0.45rem;
		border:1px solid #d2d2d2;
		background:#fff;
	}
	.mySearch .fangshi dl dt img{
		display: block;
		width:80%;
	}
	.mySearch .fangshi dl dd{
		width:100%;
		height:0.3rem;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.15rem;
		color:#666;
	}
</style>

