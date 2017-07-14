<template>
	<div class="right_news">
		<strong style="font-size: 1.5em;line-height: 70px;">{{title}}</strong>
		<span style="margin-left: 25%;"><a @click="getMore">更多>></a></span>
		<div class="right_news">
			<el-card class="box-card">
			  <div v-for="(book,index) in books" :key="book" class="text item">
			    <a @click="toGoodsInfo(book.bookId,book.typeId)">{{index +'. ' + book.bookName }}</a>
			  </div>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'books',
			'title'
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
		    //更多
		    getMore(){
		    	
		    },
		    
		}
	}
</script>
<style scoped lang="scss">
.right_news{
    max-height: 500px;
    .item {
    	text-align: left !important;
        padding: 9% 0;
        border-bottom: 1px dashed #BFCBD9;
        white-space:nowrap; 
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .clearfix:before,.clearfix:after {
        display: table;
        content: "";
      }
    .clearfix:after {
        clear: both
    }
    .box-card {
        width: 85%;
        height: 100%;
    }
}
</style>
