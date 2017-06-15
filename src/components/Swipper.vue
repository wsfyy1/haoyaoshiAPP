<template>
  <div class="swipper">
    <mt-swipe :auto="4000">
		  <mt-swipe-item>
		  	<router-link to="/MovieInfo">
		  		<img src="http://img01.img.ehaoyao.com/testwx/2017/04/20170427100339.png ">
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/MovieInfo">
		  		<img src="http://img01.img.ehaoyao.com/testwx/2017/05/20170515204348.jpg">
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/MovieInfo">
		  		<img src="http://img01.img.ehaoyao.com/testwx/2016/12/20161214084844.jpg">
		  	</router-link>
		  </mt-swipe-item>
		</mt-swipe>		
  </div>
</template>

<script>
export default {
  name: 'Swipper'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	*{
		margin:0;
		padding:0;
	}
	html{
		font-size: 15.625vw;
	}
	.swipper{
		margin-top: 1rem;
	}
	.swipper .mint-swipe{
		height:2.5rem;
	
	}
	.swipper img{
		width:100%;
		height:100%;
	}
	.swipper a{
		text-decoration:none;
		padding-right: 0;
	}
	.swipper .mint-swipe-indicator{
		background: #fff;
		opacity: 0.8;
	}
	.swipper .mint-swipe-indicator.is-active{
		background: #08a7e7;
		opacity: 0.8;
	}
	.swipper .mint-swipe-indicators{
		bottom:-2px;
	}
</style>
