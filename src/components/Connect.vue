<template>
	<div class="connect">
		<!-- <mt-header fixed title="欢迎在线咨询">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header> -->
	  	<ul>
	  		<li></li>
	  	</ul>
	  	<form >
	  		<input type="text"  class="text_box">
			<input type="submit" class="submit_btn">
	  	</form>
	</div>
</template>
<script>
export default {
	name:"Connect",

}
	$(function(){
		var socket = io();  //实例化io
		$("form").submit(function(e){
			var val = $(".text_box").val();
			socket.emit("hungry",val)  //给后台发送数据
			return false;  //阻止提交的默认事件
			var val = $(".text_box").val("");
		})
		socket.on("hungry",function(data){
			var li = `<li>${data}<li>`
			$("ul").append(li)
		})
	})
</script>
<style>
	*{margin: 0;padding: 0;}
	form{
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		display:flex;
		margin-bottom: 1rem;
	}
	.connect .text_box{
		width:85vw;
		height:1rem;
		border:1px solid black;
		font-size:.5rem;
	}
	.connect .submit_btn{
		width:13vw;
		height:1rem;
		border:1px solid black;
		background:blue;
		font-size:.25rem;
		color:white;
	}
	.connect ul{
		height:80vh;
	}
	.connect ul li{
		font-size:.25rem;
	}
</style>