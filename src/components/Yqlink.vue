<template>
	<div class="yqlink">
	<ul>
		<li>
			<router-link :to="{ name:'Register' }">注册</router-link>		
		</li>
		<li>
			<router-link :to="{ name:'Wode' }">登录</router-link>
		</li>
		<li>
			<router-link :to="{ name:'Register' }">健康咨询</router-link>
		</li>
		<li data-am-widget="gotop">
			<router-link to="">回顶部</router-link>
		</li>
	</ul>
		<img  class="tel" src="../assets/tel.png">
		<img src="../assets/phone.png">
		<p>&copy 2005-2016 好药师 版权所有，并保留所有权利。</p>

	</div>
</template>
<script>
export default{
	name:'Yqlink'
}
</script>
	
<style>
	.yqlink {
		height: 4rem;
		background:#F2F2F2;
		padding-top: 0.2rem;
	}
	.yqlink ul{
		width:5rem;
		margin-left:1rem;
		margin-bottom:0.3rem;
		height: 0.25rem
	}
	.yqlink  ul li{	
		float: left;
		border-right:1px solid #ccc;
		list-style:none;
		padding:0 0.1rem;
		text-align:center;
	}
	.yqlink  ul li a{
		display: block;
		width:100%;
		height:100%;
		font-size: 0.25rem;
		color:#999;
		text-align:center;
	}
	.yqlink img{
		display: block;
		margin:auto;
		margin-top: 0.2rem
	}
	.yqlink p{
		font-size: 0.2rem;
		text-align: center;
		color:#666;
		margin-top: 0.1rem
	}
</style>