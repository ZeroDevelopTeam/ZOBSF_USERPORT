<template>
	<section class="my-retrieve">
		<h2 ><strong class="title">{{$route.name}}</strong></h2>
		<div class="my-retrieve-detail">
	    	<el-card class="order-info" v-for="o in 5" :key="o">
	    		<el-row class="info-title">
	    			<strong>2017-06-27</strong>&nbsp;&nbsp;&nbsp;回收订单号: 11032278161636747
	    		</el-row>
	    		<el-row :gutter="20" class="info-detail">
		    		<el-col :span="4">
		    			<a @click="toGoodsInfo(o)"><img src="../../../image/xiaowangzi.png"/></a>
		    		</el-col>
		    		<el-col :span="10">
		    			<p><strong title="小王子(65周年纪念版)"><a @click="toGoodsInfo(o)">小王子(65周年纪念版)</a></strong></p>
						<p title="圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)">圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)</p>
						<p>数量：1</p>
						<p>单价：￥19</p>
		    		</el-col>
		    		<el-col :span="5">
		    			<p><h2>总金额：￥19</h2></p>
						<p>运费：￥0</p>
		    		</el-col>
		    		<el-col :span="5">
		    			<p><h2>交易成功</h2></p>
						<p><a href="">订单详情</a></p>
		    		</el-col>
	    		</el-row>
	    	</el-card>
			<el-row class="page">
				<el-col :span="24">
					<el-pagination
				      @current-change="handleCurrentChange"
				      :current-page="1"
				      :page-size="10"
				      layout="total,  prev, pager, next, jumper"
				      :total="12">
				    </el-pagination>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				activeName:'all',
			}
		},
		methods: {
			handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },
		    handleClick(tab, event) {
		        console.log(tab, event);
		    },
		    //商品详情
		    toGoodsInfo(bookId){
		    	this.$router.push({ path: '/shopping', query: { bookId: '003' }});
		    }
		},
		computed: {
	    },
		mounted() {
			const user = sessionStorage.getItem('user');
			this.$store.dispatch('getUser',{userCode:'001'}).then((res)=>{
				this.editForm = res;
			});
		},
		components: {
		}
	}

</script>

<style scoped lang="scss">
.my-retrieve{
	.title{
		padding:0 10px 0 30px;
		border-right: 3px solid #c7161c;
	}
	.my-retrieve-detail{
		padding-top: 10px;
		width: 90%;
		margin: auto;
		.order-info{
			margin-bottom: 10px;
			padding: 10px;
			height: 150px;
			width: 95%;
			.info-detail{
				margin-top: 10px;
				p{
					margin: 5px 0;
					white-space:nowrap; 
                    overflow:hidden;
                    text-overflow:ellipsis;
				}
			}
			.info-title{
				padding-bottom: 10px;
				border-bottom: 1px solid #D1DBE5;
			}
			img{
				float: left;
				margin-top: 10px;
				width: 90px;
				height: 90px;
			}
		}
		.page{
	        text-align: center;
	        margin: 30px 0;
	    }
	}
}
</style>