<template>
	<el-row class="book-list">
		<el-card :key="book" v-for="book in books" class="col">
			<div align="center"><a @click="toGoodsInfo(book.bookId,book.typeId)"><img src="../image/xiaowangzi.png"/></a></div>
			<span :title="book.bookName"><a @click="toGoodsInfo(book.bookId,book.typeId)">{{book.bookName}}</a></span>
			<span :title="book.author">{{book.author}}</span>
			<span><strong  class="price-font">{{book.price}}</strong>&nbsp;&nbsp;(<s>23.00</s>)</span>
		</el-card>
	</el-row>
</template>

<script>
	export default {
		props: [
			'books',
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
		    }
		}
	}
</script>
<style scoped lang="scss">
.book-list{
    max-height: 500px;
    margin-bottom: 50px;
    .col{
        width: 18%;
        height: 20%;
        margin:5px;
        float:left;
        span{
            margin-top: 5px;
            display:block;
            white-space:nowrap; 
            overflow:hidden;
            text-overflow:ellipsis;
            text-align: center;
        }
        img{
            width:80%;
            height:80%;
        }
    }
    .col:hover{
        border: 1px solid #C7161C
    }
}
</style>
