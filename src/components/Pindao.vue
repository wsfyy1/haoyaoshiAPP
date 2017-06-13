<template>
	<div class="pin">
		<dl>
			<dt>零食频道</dt>
			<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908110437.jpg"></dd>
		</dl>
		<dl>
			<dt>母婴频道</dt>
			<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908110629.jpg"></dd>
		</dl>
		<dl>
			<dt>计生频道</dt>
			<dd><img src="http://img01.img.ehaoyao.com/testwx/2016/09/20160908105054.jpg"></dd>
		</dl>
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
	}
	dl{
		display: flex;
		justify-content: center;
		flex-flow: column wrap
	}
</style>