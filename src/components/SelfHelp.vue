<template>
	<div class="selfHelp">
		<mt-header fixed title="自诊助手">
	  		 <router-link to="/" slot="left">
			    <mt-button icon="back" v-if="yincang">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right" @click="xianshi"></mt-button>
	  	</mt-header>
		<h3>请选择您的性别以及出生日期</h3>
		<div class="sex">
			<button class="activeSex" >男</button>
			<button >女</button>
		</div>			
		<input type="text" placeholder="请输入您的出生日期" class="birth">	
		<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		<mt-button type="primary" size="large"  @click="handleClick" class="next">下一步</mt-button>
	</div>
</template>
<script>
export default {
  	name: 'SelfHelp',	
	methods: {
		xianshi(){
			this.yincang=true
		},
	    onValuesChange(picker, values) {
	      if (values[0] > values[1]) {
	        picker.setSlotValue(1, values[0]);
	      }
	    }
	 },
	data() {
	    return {
	      yincang:true,
		  arr:"",
	      slots: [
	        {
	          flex: 1,
	          values: ['1990', '1991', '1992', '1993', '1994', '1995'],
	      	  className: 'slot1',
	          textAlign: 'center'
	        }, {
	          divider: true,
	          content: '-',
	          className: 'slot2',
	        }, {
	          flex: 1,
	          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
	          className: 'slot3',
	          textAlign: 'center'
	        }, {
	          divider: true,
	          content: '-',
	          className: 'slot4'
	        }, {
	          flex: 1,
	          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
	          className: 'slot5',
	          textAlign: 'center'
	        }
	      ]
	    };
	}
}
</script>
<style scope>
	*{
		margin: 0;
		padding: 0;
	}
	.selfHelp{
		position:absolute;
		left:0;
		top:1rem;
		z-index:100;
		width:100vw;
		height:100%;
		background: #F2F2F2;
	}
	.selfHelp .mint-header{
		background: #0075de;
		height:1rem;
	}
	.selfHelp h3{
		width:100%;
		height:0.4rem;
		margin-top: 0.5rem;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.4rem;
	}
	.selfHelp .sex{
		width:5rem;
		height:0.6rem;
		margin:10px auto;
		border-radius: 5px;
	}
	.selfHelp .sex button{
		border:0;
		width:2.5rem;
		height:0.7rem;
		background: white;
		border:1px solid #d5d5d5;
		float:left;
		outline: none;
		color:#666;
		
	}
	.selfHelp .sex .activeSex{
		background: #DD2726;
		color:#fff;
	}
	.selfHelp .birth{
		display: block;
		width:5rem;
		height:0.7rem;
		margin:30px auto;
		border:0;
		border:1px solid #d5d5d5;
		border-radius: 5px;
		padding-left:10px;
	}
	
	.selfHelp .next{
		position: fixed;
		left:0;
		bottom: 0;
	}
</style>