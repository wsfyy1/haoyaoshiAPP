<template>
	<div>
		<div class="fenlei">
			<ul>
				<li>
					<router-link :to="{ name:'Classify' }">
						<i class="iconfont icon-fenlei"></i>
						<span>商品分类</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'Quan' }">
						<i class="iconfont icon-quan"></i>
						<span>领券专区</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'Bao' }">
						<i class="iconfont icon-bao"></i>
						<span>资质保证</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'Medicine' }">
						<i class="iconfont icon-yaoxiang"></i>
						<span>家庭药箱</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'AllBuy' }">
						<i class="iconfont icon-quanqiu1"></i>
						<span>全球购</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'SelfHelp' }">
						<i class="iconfont icon-zizhen"></i>
						<span>自诊助手</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'MySearch' }">
						<i class="iconfont icon-caigouxunyuan"></i>
						<span>我要寻药</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name:'WuliuSearch' }">
						<i class="iconfont icon-wuliuchaxun_Nose"></i>
						<span>物流查询</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'Fenlei'
	}
</script>
<style scope>
	*{
		padding: 0;
		margin: 0;
	}
	.fenlei{
		background: #fff;
		margin:5px 0;
	}
	.fenlei a{
		text-decoration: none;
	}
	.fenlei ul{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width:100%;
		margin: 0;
		margin-top: 5px;
		padding-top:10px;
	}
	.fenlei ul li{
		list-style: none;
		width:20%;
		margin:5px;				
	}
	.fenlei ul li a{
		display: flex;
		width:100%;
		flex-direction: column;
		align-items: center;
		
	}
	.fenlei ul li a i {
		display: block;
		width:1rem;
		height:1rem;
		text-align:center;
		line-height:1rem;
		margin-bottom:5px;
		font-size:0.6rem!important;
		color:white!important;
		border-radius:0.4rem;
	}
	.icon-fenlei{background: #ffb313}
	.icon-quan{background: #ff135b}
	.icon-bao{background: #ff4513}
	.icon-yaoxiang{background: #ff135b}
	.icon-quanqiu1{background: #12eddb}
	.icon-zizhen{background: #e5004f}
	.icon-caigouxunyuan{background: #ff5500}
	.icon-wuliuchaxun_Nose{background: #08a7e7}
	.fenlei ul li span{
		font-size: 0.25rem;
		color:#616161;
		margin:8px 0;
	}
</style>