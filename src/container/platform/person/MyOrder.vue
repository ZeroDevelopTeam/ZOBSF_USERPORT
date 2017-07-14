<template>
	<section class="my-order">
		<h2 ><strong class="title">{{$route.name}}</strong></h2>
		<div class="my-order-detail">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			    <el-tab-pane label="全部订单" name="-2">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			    <el-tab-pane label="待付款" name="4">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			    <el-tab-pane label="待发货" name="1">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			    <el-tab-pane label="待收货" name="2">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			    <el-tab-pane label="交易关闭" name="3">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			    <el-tab-pane label="废止订单" name="-1">
			    	<CommOrder :dataList="myOrderList" :user="user" :state="state" :dispatch="dispatch"/>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex';
	import CommOrder from '../../../components/CommOrder';
	export default {
		data() {
			return {
				user:'',//当前用户
				state:-2,//分类状态(//类别  -2获取所有, -1废止，0已完成，1已付款待配送，2配送中，3取消订单，4未付款)
				activeName:'-2',
				dispatch:'getMyOrderList'
			}
		},
		methods: {
			//标签切换
		    handleClick(tab, event) {
		        this.state = Number(tab.name);
		        this.$store.dispatch('getMyOrderList',{userCode:this.user.userCode,pageSize:10,pageNum:1,state:this.state});
		    },
		},
		computed: {
		 ...mapGetters([
		 		'myOrderList',
   			]),
	    },
		mounted() {
			const platformUser = JSON.parse(sessionStorage.getItem('platformUser'));
			if(platformUser){
				this.user = platformUser;
				this.$store.dispatch('getMyOrderList',{userCode:platformUser.userCode,pageSize:10,pageNum:1,state:-2});
			}
		},
		components: {
			CommOrder,
		}
	}

</script>

<style scoped lang="scss">
.my-order{
	.title{
		padding:0 10px 0 30px;
		border-right: 3px solid #c7161c;
	}
	.my-order-detail{
		padding-top: 10px;
		width: 90%;
		margin: auto;
	}
}
</style>