<template>
	<div class="yqlink">
	<ul>
		<li>注册</li>
		<li>登录</li>
		<li>健康咨询</li>
		<li>回顶部</li>
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
		background:#f8f8f8;
		padding-top: 0.2rem;
		/* height: 1rem */
	}
	.yqlink ul{
		width:5rem;
		margin-left:1rem;
		margin-bottom:0.3rem;
		height: 0.2rem
	}
	.yqlink  ul li{
		font-size: 0.25rem;
		float: left;
		border-right:1px solid #ccc;
		list-style:none;
		padding:0 0.2rem;
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