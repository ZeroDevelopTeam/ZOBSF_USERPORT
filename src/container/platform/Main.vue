<template>
	<section class="platform-home">
		<!-- 新书上架 -->
		<div class="new-book">
			<el-row class="tags" :gutter="30">
				<el-col :xs="20" :sm="20" :md="19" :lg="19" >
					<el-tabs v-model="activeName1" type="card" @tab-click="handleClick1">
					    <el-tab-pane label="新书上架" disabled name="index"></el-tab-pane>
					    <template v-for="bookType in bookTypeTree" >
					    	<el-tab-pane :label="bookType.typeName" :name="bookType.typeId" :key="bookType.typeId">
					    		<CommBookList :books="bookListByType.list"/>
						    </el-tab-pane>
					    </template>
					</el-tabs>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<CommCard :books="bookList.list" title="图书风云榜"/>
				</el-col>
			</el-row>
			
		</div>
		<!-- 读者推荐 -->
		<div class="people-like">
			<el-row class="tags" :gutter="30">
				<el-col :xs="20" :sm="20" :md="19" :lg="19" >
					<el-tabs v-model="activeName1" type="card" @tab-click="handleClick2">
					    <el-tab-pane label="读者推荐" disabled name="index"></el-tab-pane>
					    <template v-for="bookType in bookTypeTree" >
					    	<el-tab-pane :label="bookType.typeName" :name="bookType.typeId" :key="bookType.typeId">
					    		<CommBookList :books="bookListByType.list"/>
						    </el-tab-pane>
					    </template>
					</el-tabs>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<CommCard :books="bookList.list" title="文学著作"/>
				</el-col>
			</el-row>
		</div>
		<!-- 猜您喜欢 -->
		<div class="you-like">
			<el-row class="tags" :gutter="30">
				<el-col :xs="20" :sm="20" :md="19" :lg="19" class="like-box">
					<span class="like-title">猜您喜欢</span>
					<span class="like-next"><a href="">换一批</a></span>
					<div style="width: 100%;border-bottom: 1px solid #C7161C;"></div>
					<CommBookList :books="bookListByType.list"/>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<CommCard :books="bookList.list" title="信息技术"/>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
import CommBookList from '../../components/CommBookList';
import CommCard from '../../components/CommCard';
import { mapGetters } from 'vuex';
	export default {
		data() {
		    return {
		    }
		  },
		methods: {
		    handleClick1(tab, event) {
		    	//根据分类获取前五本书
  				this.$store.dispatch('getBookListByTypeId',{pageNum:1,pageSize:5,typeId:tab.name});
		    },
		    handleClick2(tab, event) {
		        console.log(tab, event);
		    },
		    //根据分类获取图书
		    getBooks(){
		    	console.log(this.bookTypeTree);
		    },
		    //商品详情
		    /*toGoodsInfo(bookId){
		    	this.$router.push({ path: '/shopping', query: { bookId: '003' }});
		    }*/
  		},
  		mounted(){
  			//获取分类树
  			this.$store.dispatch('getBookTypeTree').then((res) => {
  				this.$store.dispatch('getBookListByTypeId',{pageNum:1,pageSize:5,typeId:res[0].typeId});
  			});
  			//获取书籍列表
  			this.$store.dispatch('getBookList',{pageNum:1,pageSize:5,keyWord:''});
  		},
  		computed: {
		 ...mapGetters([
		 		'bookTypeTree',//获取分类
		 		'bookListByType',//根据分类获取图书列表
		 		'bookList',//随机获取图书列表
   			]),
   			activeName1(){
   				return this.bookTypeTree.length>0?this.bookTypeTree[0].typeId:'';
   			}
	    },
  		components: {
  			CommBookList,
  			CommCard,
		}
	}

</script>
<style scoped lang="scss">

</style>