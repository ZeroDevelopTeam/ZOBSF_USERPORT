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
			    	<p>收货人姓名：{{addForm.name}}</p>
			    	<p>收货人电话：{{addForm.tel}}</p>
			    	<p>收货人地址：{{addForm.address}}</p>
			  	</div>
			</el-card>
			<el-button style="float: left;margin:100px 0 0 20px;" size="small" type="danger" @click="dialogFormVisible=true">新增收货人信息</el-button>
		</el-row>
		<el-row style="margin-bottom: 30px;">
			<h2>送货清单</h2>
			<el-table
			    :data="tableData"
			    tooltip-effect="dark"
			    style="width: 100%;margin-bottom: 30px;"
			    class="order-goods">
			    <el-table-column
			      	label="书籍信息"
			      	show-overflow-tooltip>
			      	<template scope="scope">
				      	<img src="../../../image/xiaowangzi.png"/>
				      	<p><h3>{{ scope.row.bookName }}</h3></p>
						<p>{{ scope.row.author }}</p>
			      	</template>
			    </el-table-column>
			    <el-table-column
			      	prop="price"
			      	label="单价"
			      	width="80">
			    </el-table-column>
			    <el-table-column
			      	prop="num"
			      	label="数量"
			      	width="180">
			    </el-table-column>
			    <el-table-column
			    	prop="totalPrice"
			      	label="总价"
			      	width="80">
			      	<template scope="scope">
			      		{{ scope.row.price*scope.row.num }}
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
							<td>5.00</td>
						</tr>
						<tr>
							<td>应付金额：</td>
							<td><span class="price-font">{{sumPrice+5}}</span></td>
						</tr>
					</table>
			</el-col>
		</el-row>
		
		
		<el-row class="settlement">
			<span>
				<span style="float: left;padding-right: 30px;">本网站目前支付方式仅支持<strong color="red">货到付款</strong></span>
				寄送至：{{addForm.address}} &nbsp;&nbsp;&nbsp;{{addForm.name}}&nbsp;&nbsp;{{addForm.tel}}
				<el-button style="margin-left: 20px;width: 100px;" size="small" type="danger" @click="addOrder">提交订单</el-button>
			</span>
		</el-row>
		
		<!--新增收货人信息-->
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible" size="tiny">
		  	<el-form :model="addForm" :rules="addFormRules" ref="addForm">
		    	<el-form-item label="收货人姓名：" :label-width="formLabelWidth">
		      		<el-input v-model="addForm.name" auto-complete="off"></el-input>
	    		</el-form-item>
	    		<el-form-item label="收货人电话：" :label-width="formLabelWidth">
		      		<el-input v-model="addForm.tel" auto-complete="off"></el-input>
	    		</el-form-item>
	    		<el-form-item label="收货人地址：" :label-width="formLabelWidth">
		      		<el-input v-model="addForm.address" auto-complete="off"></el-input>
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
		    	totalNum:0,
		    	formLabelWidth: '120px',
		    	dialogFormVisible:false,
		    	alignCenter:true,
		    	center:true,
		    	addForm:{
		    		name:'张三',
		    		tel:'13111111111',
		    		address:'广东省广州市天河区xxxxxxxx'
		    	},
		    	addFormRules: {
					name: [
						{ required: true, message: '请输入收货人姓名', trigger: 'change' }
					],
					tel: [
						{ required: true, message: '请输入收货人电话', trigger: 'change' }
					],
					address: [
						{ required: true, message: '请输入收货人地址', trigger: 'change' },
					]
				},
				tableData: [],
		    }
		},
		methods: {
			//增加收货人信息
			addInfo(){
				this.$refs.addForm.validate((valid) => {
					console.log(valid);
					if (valid) {
						this.$refs['addForm'].resetFields();
						this.dialogFormVisible = false;
					}
				});
				
			},
			//提交订单 
			addOrder(){
				this.$message("提交订单");
				this.$router.push({path:'/shoppingSuccess'});
			}
  		},
  		computed:{
  			...mapGetters([
		 		'orderGoods',
		 		'cartGoods',
		 		'buyGoods',
   			]),
	        sumPrice(){
	            var sum = 0 ;
	            for(var i=0;i< this.tableData.length;i++){
	                sum+=this.tableData[i].price*this.tableData[i].num;
                }
	            return sum;
            }
        },
  		mounted(){
  			const flag=this.$route.query.flag;
  			if(flag == 'fromBuy'){
  				this.tableData= this.buyGoods; 
				for(var i=0;i< this.tableData.length;i++){
	                this.totalNum+=this.tableData[i].num;
	            }
  			}
  			if(flag == 'fromCart'){
  				this.tableData= this.orderGoods; 
				for(var i=0;i< this.tableData.length;i++){
	                this.totalNum+=this.tableData[i].num;
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