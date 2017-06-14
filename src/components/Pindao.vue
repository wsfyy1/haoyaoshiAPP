<template>
	<div class="pindao">
		<div class="pin">
			<router-link :to="{ name: 'Lingshi',params:{id:646}}">
				<dl>
					<dt>零食频道</dt>
					<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908110437.jpg"></dd>
				</dl>
			</router-link>
			<router-link :to="{ name: 'Lingshi',params:{id:684}}">
				<dl>
					<dt>母婴频道</dt>
					<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908110629.jpg"></dd>
				</dl>
			</router-link>
			<router-link :to="{ name: 'Lingshi',params:{id:1768}}">
				<dl>
					<dt>计生频道</dt>
					<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908105054.jpg"></dd>
				</dl>
			</router-link>
		</div>
		<div class="dao">
			<router-link :to="{ name: 'Lingshi',params:{id:386}}">
				<dl class="dao1">
					<dt>男性健康</dt>
					<dd><img src="../assets/man.png"></dd>
				</dl>
			</router-link>
			<router-link :to="{ name: 'Lingshi',params:{id:1666}}">
				<dl>
					<dt>女性健康</dt>
					<dd><img src="../assets/woman.png"></dd>
				</dl>
			</router-link>
			<router-link :to="{ name: 'Lingshi',params:{id:695}}">
				<dl class="dao3">
					<dt >儿童健康</dt>
					<dd><img src="../assets/child.png"></dd>
				</dl>
			</router-link>
			<router-link :to="{ name: 'Lingshi',params:{id:635}}">
				<dl class="dao4">
					<dt>中老年健康</dt>
					<dd><img src="../assets/oldd.png"></dd>
				</dl>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Pindao'
}
</script>
<style>
	.pin{
		width: 100%;
		display: flex;
		justify-content: space-around;
		background: #fff;
	}
	.pin dl{
		display: flex;
		text-align:center;
		flex-flow: column wrap;

	}
	.pindao dt{
		font-size:0.3rem;
		color:#666;
	}
	.pindao dd img{
		width: 2rem;
		height: 1.7rem
	}
	.dao{
		display: flex;
		/* justify-content: space-between; */
		flex-flow: row wrap;
		background: #fff;
		margin-top: 5px;
	}
	.dao dl{
		width: 100%;
		border-top:0.5px solid #ccc;
		border-right:0.5px solid #ccc;
		
	}
	.dao dt{
		
	}
	.dao dd img{
		padding-left: 1rem
	}
	.dao1{
		margin-left: 2px;
		border-left: 0.5px solid #ccc;
		
	}
	.dao3{
		margin-left: 2px;
		border-left:0.5px solid #ccc;
		border-bottom:0.5px solid #ccc
	}
	.dao4{
		border-bottom:0.5px solid #ccc
	}
	.dao a{
		padding-right:0;
	}



</style>