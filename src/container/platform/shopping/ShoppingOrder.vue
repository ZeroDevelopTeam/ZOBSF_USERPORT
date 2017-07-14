<template>
	<section class="shopping-order">
		<h1 ><strong class="title">{{$route.name}}</strong></h1>
		<el-steps class="regist-step" :space="300" :align-center="alignCenter" :center="center" :active="2">
		  	<el-step title="我的购物车"></el-step>
		 	<el-step title="我的订单"></el-step>
		 	<el-step title="完成订单"></el-step>
		</el-steps>
		<el-row style="margin-bottom: 30px;">
			<h2>收货人信息</h2>
			<el-card class="box-card" style="width: 40%;float: left;">
			  	<div class="text item">
			    	<p>收货人姓名：{{orderForm.receiver}}</p>
			    	<p>收货人电话：{{orderForm.phone}}</p>
			    	<p>收货人地址：{{orderForm.address}}</p>
			  	</div>
			</el-card>
			<el-button style="float: left;margin:100px 0 0 20px;" size="small" type="danger" @click="dialogFormVisible=true">新增收货人信息</el-button>
		</el-row>
		<el-row style="margin-bottom: 30px;">
			<h2>送货清单</h2>
			<el-table :data="orderBookList" tooltip-effect="dark" style="width: 100%;margin-bottom: 30px;" class="order-goods">
			    <el-table-column label="书籍信息" show-overflow-tooltip>
			      	<template scope="scope">
				      	<img src="../../../image/xiaowangzi.png"/>
				      	<p><h3>{{ scope.row.bookName }}</h3></p>
						<p>{{ scope.row.author }}</p>
			      	</template>
			    </el-table-column>
			    <el-table-column label="单价" width="180">
			      	<template scope="scope">
			      		￥{{ (scope.row.price*scope.row.discount).toFixed(2) }}&nbsp;(<s>原价：{{scope.row.price}}</s>)
			      	</template>
			    </el-table-column>
			    <el-table-column label="数量" width="100">
			    	<template scope="scope">
			      		{{originFlag == 0 ? totalNum : scope.row.num}}
			      	</template>
			    </el-table-column>
			    <el-table-column label="总价" width="100">
			      	<template scope="scope">
			      		￥{{ originFlag == 0 ? (scope.row.price*scope.row.discount*totalNum).toFixed(2) : (scope.row.price*(scope.row.discount/10)*scope.row.num).toFixed(2)}}
			      	</template>
			    </el-table-column>
			</el-table>
		</el-row>
		<hr />
		<!-- 统计 -->
		<el-row class="statistics">
			<el-col :span="24">
					<table>
						<tr>
							<td>商品数量：</td>
							<td>{{totalNum}}</td>
						</tr>
						<tr>
							<td>商品金额：</td>
							<td>{{sumPrice}}</td>
						</tr>
						<tr>
							<td>运费：</td>
							<td>0.00</td>
						</tr>
						<tr>
							<td>应付金额：</td>
							<td><span class="price-font">{{sumPrice}}</span></td>
						</tr>
					</table>
			</el-col>
		</el-row>
		
		
		<el-row class="settlement">
			<span>
				<span style="float: left;padding-right: 30px;">本网站目前支付方式仅支持<strong color="red">货到付款</strong></span>
				寄送至：{{orderForm.address}} &nbsp;&nbsp;&nbsp;{{orderForm.receiver}}&nbsp;&nbsp;{{orderForm.phone}}
				<el-button style="margin-left: 20px;width: 100px;" size="small" type="danger" @click="addOrder">提交订单</el-button>
			</span>
		</el-row>
		
		<!--新增收货人信息-->
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible" size="tiny">
		  	<el-form :model="orderForm" :rules="orderFormRules" ref="orderForm">
		    	<el-form-item label="收货人姓名：" :label-width="formLabelWidth">
		      		<el-input v-model="orderForm.receiver" auto-complete="off"></el-input>
	    		</el-form-item>
	    		<el-form-item label="收货人电话：" :label-width="formLabelWidth">
		      		<el-input v-model="orderForm.phone" auto-complete="off"></el-input>
	    		</el-form-item>
	    		<el-form-item label="收货人地址：" :label-width="formLabelWidth">
		      		<el-input v-model="orderForm.address" auto-complete="off"></el-input>
	    		</el-form-item>
		  	</el-form>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button @click="dialogFormVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="addInfo">确 定</el-button>
		  	</div>
		</el-dialog>
		
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
		data() {
		    return {
		    	originFlag:0,//0来自立即购买，1来自购物车结算
		    	totalNum:0,//商品总数
		    	formLabelWidth: '120px',
		    	dialogFormVisible:false,
		    	alignCenter:true,
		    	center:true,
		    	//订单信息
		    	orderForm:{
		    		orderId:'',
		    		state:1,//-1废止，0已完成，1已付款待配送，2配送中，3取消订单，4未付款
		    		receiver:'张三',//收货人
		    		phone:'13111111111',//收货人电话
		    		address:'广东省广州市天河区xxxxxxxx',
		    		delivery:'',//送货人
		    		deliveryDate:'',//送货时间
		    		receviverDate:'',//收货时间
		    	},
		    	orderFormRules: {
					receiver: [
						{ required: true, message: '请输入收货人姓名', trigger: 'change' }
					],
					phone: [
						{ required: true, message: '请输入收货人电话', trigger: 'change' }
					],
					address: [
						{ required: true, message: '请输入收货人地址', trigger: 'change' },
					]
				},
				orderBookList: [],
		    }
		},
		methods: {
			//增加收货人信息
			addInfo(){
				this.$refs.orderForm.validate((valid) => {
					if (valid) {
						this.$refs['orderForm'].resetFields();
						this.dialogFormVisible = false;
					}
				});
				
			},
			//提交订单 
			addOrder(){
				let orderBooks = [];
				this.orderBookList.map(item=>{
					let orderBook = {
						bookId : item.bookId,
						bookNum : this.totalNum
					};
					orderBooks.push(orderBook);
				});
				let para = Object.assign(this.orderForm,{orderBookList:orderBooks});
				this.$store.dispatch('addOrder',para).then((res)=>{
					console.log(res);
					if(res.status == 200){
						this.$router.push({path:'/shoppingSuccess'});
					}else{
						this.$message({
							message: res.msg,
							type: 'error'
						});
					}
				});
			}
  		},
  		computed:{
  			...mapGetters([
		 		'orderGoods',
		 		'cartGoods',
		 		'buyGoods',
		 		'bookInfo',//当前书籍
   			]),
   			//价格计算统计
	        sumPrice(){
	            let sum = 0 ;
	            if(this.orderBookList[0]){
	            	if(this.originFlag == 0){//立即购买
		            	sum += parseFloat((this.orderBookList[0].price*this.orderBookList[0].discount*this.totalNum).toFixed(2));
		            }else{//购物车购买
		            	for(var i=0;i< this.orderBookList.length;i++){
			                sum += parseFloat((this.orderBookList[i].price*this.orderBookList[i].discount*this.orderBookList[i].num).toFixed(2));
		                }
		            }
	            }
	            return sum;
            }
        },
  		mounted(){
  			const {flag,bookId,num}=this.$route.query;
  			if(flag == 'fromBuy'){//立即购买
  				//获取当前书籍
				this.$store.dispatch('getBook',{bookId:bookId}).then((res)=>{
					this.orderBookList.push(res); 
				});
				this.totalNum = num;
				this.originFlag=0;
  			}
  			if(flag == 'fromCart'){//购物车结算
  				this.orderBookList= this.orderGoods; 
  				this.originFlag=1;
				for(var i=0;i< this.orderBookList.length;i++){
	                this.totalNum+=this.orderBookList[i].num;
	            }
  			}
			
  		},
  		components: {
		}
	}

</script>

<style scoped lang="scss">
.shopping-order{
	width:90%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    .title{
		padding:0 10px 0 0;
		border-right: 3px solid #c7161c;
	}
	.order-goods{
		margin-top: 30px;
		img{
			padding: 10px;
			float:left;
		  	width:90px;
		  	height:90px;
		}
	}
	
	h2 {
		padding-bottom: 10px;
		border-bottom: 2px solid #c7161c;
	}
	.statistics{
		float: right;
		margin:10px 10px 10px 0;
		table td:first-child{
			text-align: right;
		}
		table td{
			text-align: left;
		}
	}
	.line{
		width: 100%;
		float: right;
		border-bottom: 2px solid #eef1f6;
	}
	.settlement{
		width: 100%;
		margin-bottom: 30px;
		float: right;
		background-color: #eef1f6;
		height: 50px;
		line-height: 50px;
		span{
			line-height: 50px;
			float: right;
			margin-right: 10px;
		}
	}
	.el-input{
		width: 90%;
	}
	
}
</style>