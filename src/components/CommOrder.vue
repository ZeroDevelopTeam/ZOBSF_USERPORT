<template>
	<section>
		<el-card class="order-info" v-for="order in dataList.list" :key="order">
			<el-row class="info-title">
				<strong>{{order.createDate}}</strong>&nbsp;&nbsp;&nbsp;订单号: {{order.orderId}}
			</el-row>
			<el-row :gutter="20" class="info-detail" v-for="book in order.books" :key="book">
	    		<el-col :span="4">
	    			<a @click="toGoodsInfo(book.bookId,book.typeId)"><img src="../image/xiaowangzi.png"/></a>
	    		</el-col>
	    		<el-col :span="10">
	    			<p><strong :title="book.bookName"><a @click="toGoodsInfo(o)">{{book.bookName}}</a></strong></p>
					<p :title="book.author">{{book.author}}</p>
					<p>数量：{{book.bookNum}}</p>
					<p>单价：￥{{(book.price*book.discount).toFixed(2)}}(<s>{{book.price}}</s>)</p>
	    		</el-col>
	    		<el-col :span="5">
	    			<p><h2>总金额：￥{{(book.price*(book.discount)*book.bookNum).toFixed(2)}}</h2></p>
					<p>运费：￥0</p>
	    		</el-col>
	    		<el-col :span="5">
	    			<p><h2>{{order.state==-1?'废止订单':(order.state==0?'交易成功':(order.state==1?'已付款':order.state==2?'配送中':order.state==3?'交易关闭':order.state==4?'待付款':'未知'))}}</h2></p>
					<p><a @click="goOrderInfo(order.orderId)">订单详情</a></p>
	    		</el-col>
			</el-row>
			<el-row class="info-result">
				<strong>合计：￥{{order.price.toFixed(2)}}</strong>
			</el-row>
		</el-card>
		<el-row class="page">
			<el-col :span="24">
				<el-pagination
			      @current-change="handleCurrentChange"
			      :current-page="1"
			      :page-size="10"
			      layout="total,  prev, pager, next, jumper"
			      :total="dataList.total==undefined? 0: dataList.total">
			    </el-pagination>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	export default {
		props: [
			'dataList',
			'state',
			'user',
			'dispatch',
		],
		data() {
			return {
			}
		},
		watch:{
		},
		methods: {
			//商品详情
		    toGoodsInfo(bookId,typeId){
		    	this.$router.push({ path: '/shopping', query: { bookId: bookId,typeId: typeId}});
		    },
		    //订单详情
		    toGoodsInfo(orderId){
		    	this.$router.push({ path: '/orderDetail', query: { orderId: orderId}});
		    },
		    //分页
		    handleCurrentChange(){
		        this.$store.dispatch(this.dispatch,{userCode:this.user.userCode,pageSize:10,pageNum:val,state:this.state});
		    }
		}
	}
</script>
<style scoped lang="scss">
.order-info{
	margin-bottom: 10px;
	padding: 10px;
	width: 95%;
	.info-detail{
		border-bottom: 1px solid #D1DBE5;
		padding: 10px 0;
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
	.info-result{
		padding: 10px 10px 0 0;
		text-align: right;
	}
	img{
		float: left;
		margin-top: 10px;
		width: 80px;
		height: 100px;
	}
}
.page{
    text-align: center;
    margin: 30px 0;
}
</style>
