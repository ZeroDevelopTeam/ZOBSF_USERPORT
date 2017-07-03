<template>
	<section class="online-retrieve">
		<el-row class="retrieve-person">
			<el-col :span="24" >
				<h2>回收人信息</h2>
				<el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
					<el-form-item label="姓名" prop="name">
						<el-input v-model="addForm.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="phone">
						<el-input v-model="addForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="常用地址" prop="address">
						<el-input v-model="addForm.address"></el-input>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<el-row class="retrieve-info">
			<el-col :span="24" >
				<h2>回收书籍信息</h2>
				<div style="margin: 10px 0">
				    <el-button @click="add">新增</el-button>
				    <el-button @click="del">删除</el-button>
				</div>
				<el-table
			      :data="tableData"
			      style="width: 100%"
			      @selection-change="handleSelectionChange">
			      <el-table-column
				      type="selection"
				      width="180">
				  </el-table-column>
			      <el-table-column
			        prop="bookName"
			        label="图书名称">
			        <template scope="scope">
			        	<el-input v-model="scope.row.bookName"></el-input>
			      	</template>
			      </el-table-column>
			      <el-table-column
			        prop="num"
			        label="图书数量">
			        <template scope="scope">
				      	<el-input-number size="small" @change="handleChange" v-model="scope.row.num" :min="1" :max="10"></el-input-number>
			      	</template>
			      </el-table-column>
			    </el-table>
			</el-col>
		</el-row>
		<el-row class="retrieve-total">
			<el-col :span="24" >
				<h2>总数量:{{this.tableData.length}}</h2>
				<div style="float: right; margin-bottom: 20px;">
				    <el-button @click="addRetrieve" type="info">提交</el-button>
				</div>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	export default {
		data() {
		    return {
		    	book:{
		    		bookName:'',
		    		num:1
		    	},
		    	tableData: [],
		    	addForm:{
		    		name:'',
		    		phone:'',
		    		address:'',
		    	},
		    	addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'change' }
					],
					phone: [
						{ required: true, message: '请输入手机号', trigger: 'change' },
						{ pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确的手机号（例如：13101030301）' , trigger: 'blur,change' }
					],
					address: [
						{ required: true, message: '请输入地址', trigger: 'change' }
					]
				},
		    }
		  },
		methods: {
			//数量计数器
			handleChange(value){
				this.book.num=value;
			},
			handleSelectionChange(val) {
		        this.multipleSelection = val;
		    },
		    //提交回收单
		    addRetrieve(){
		   		console.log(this.tableData);
		    },
		    //新增回收书籍
		    add(){
		   		this.tableData.push(this.book);
		   		this.book={
		   			bookName:'',
		    		num:1
		   		}
		    },
		    //删除回收书籍
		    del(){
		   		for(var i=0;i< this.multipleSelection.length;i++){
		    		this.tableData.splice(this.tableData.indexOf(this.multipleSelection[i]), 1);
                }
		    },
  		},
  		mounted(){
  		},
  		components: {
		}
	}

</script>

<style scoped lang="scss">
.online-retrieve{
	margin: 20px auto;
	width: 90%;
	.retrieve-person,.retrieve-info{
		margin-bottom: 10px;
		h2 {
			padding-bottom: 10px;
			border-bottom: 2px solid #c7161c;
		}
		.el-input{
			width:250px;
		}
		
	}
}
</style>