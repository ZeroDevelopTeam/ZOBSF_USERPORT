<template>
	<section class="shopping-container">
		<el-row class="shop-info">
			<el-col :xs="4" :sm="4" :md="5" :lg="5">
				<img src="../../../image/xiaowangzi.png"/>
			</el-col>
			<el-col :xs="12" :sm="12" :md="10" :lg="10">
				<span><strong class="title">{{bookInfo.bookName}}</strong></span>
				<span>{{bookInfo.author}}</span>
				<span style="height: 50px;overflow:hidden;display:block;text-overflow:ellipsis;">{{bookInfo.bookDesc}}</span>
				<span class="price">
					<p>价格 ：&nbsp;&nbsp;&nbsp;<del>{{bookInfo.price}}</del></p>
					<p>促销价：&nbsp;&nbsp;&nbsp;<strong class="price-font">{{(bookInfo.price*bookInfo.discount).toFixed(2)}}</strong></p>
				</span>
				<span>
					数量：&nbsp;&nbsp;
					<el-input-number size="small" @change="handleChange" v-model="buyNum" :min="1" :max="10"></el-input-number>
					&nbsp;&nbsp;库存{{bookInfo.storeNum}}件
				</span>
				<span>
					<el-button type="danger" @click="toCart">加入购物车</el-button>
					<el-button type="warning" @click="toBuy">立即购买</el-button>
				</span>
			</el-col>
			<el-col :xs="8" :sm="8" :md="9" :lg="9">
				<!--<img src="../../../image/xiaowangzi.png"/>-->
			</el-col>
		</el-row>
		<div class="line"></div>
		<!-- 详情页 -->
		<el-row class="other-buy">
			<div class="other-title">购买过该商品的人还买了</div>
			<el-card v-for="book in bookListByType.list" :key="book" class="buy-last">
				<a  @click="toGoodsInfo(book.bookId,book.typeId)"><img src="../../../image/book1.png" ></a>
		      	<div class="buy-intro">
			        <div><span class="price-font">￥{{(book.price*book.discount).toFixed(2)}}</span>&nbsp;(<s>{{book.price}}</s>)</div>
			        <div><a @click="toGoodsInfo(book.bookId,book.typeId)">{{book.bookName}}</a></div>
			        <div>{{book.author}}</div>
		      	</div>
		    </el-card>
		</el-row>
		<el-row class="goods-box">
			<el-col :xs="4" :sm="4" :md="4" :lg="4" class="goods-advice">
				<h2 style="height: 42px;line-height: 60px;">同类商品推荐</h2>
				<el-card :key="book" v-for="book in bookList.list">
					<div align="center">
						<a  @click="toGoodsInfo(book.bookId,book.typeId)"><img src="../../../image/book1.png" ></a>
					</div>
			      <div>
			        <span class="price-font">￥{{(book.price*book.discount).toFixed(2)}} &nbsp;<s style="color: black;font-size: 12px;">({{book.price}})</s></span>
			        <span><a  @click="toGoodsInfo(book.bookId,book.typeId)">{{book.bookName}}</a></span>
			        <span>{{book.author}}</span>
			      </div>
			    </el-card>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="20" >
				<el-row class="buy">
					<div class="goods-info">
			    		<p><h3>基本信息</h3></p>
						<p>出版社: {{bookInfo.press}}; 第{{bookInfo.edition}}版 ({{bookInfo.publishTime}})</p>
						<p>外文书名: Le Petit Prince</p>
						<p>精装: {{bookInfo.pageNum}}页</p>
						<p>读者对象: 7-10岁</p>
						<p>语种： 简体中文</p>
						<p>开本: {{bookInfo.bookSize}}</p>
						<p>ISBN: 7201077643, 9787201077642</p>
						<p>条形码: 9787201077642</p>
						<p>商品尺寸: 21 x 14.5 x 1 cm</p>
						<p>商品重量: 399 g</p>
						<p>品牌: 杭州果麦</p>
						<p>ASIN: B00ANFMU8W
						<p>用户评分: 平均4.7 星  浏览全部评论 (1,868 条商品评论)</p>
						<p>亚马逊热销商品排名: 图书商品里排第155名 (查看图书商品销售排行榜)</p>
			    	</div>
				</el-row>
			</el-col>
		</el-row>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
		data() {
		    return {
		    	buyNum:1,
		    }
		},
		methods: {
			handleClick(e){
				
			},
			//商品详情
		    toGoodsInfo(bookId,typeId){
		    	this.$router.push({ path: '/shopping', query: { bookId: bookId,typeId: typeId}});
		    },
			//计数器
			handleChange(value) {
				this.buyNum=value;
				console.log(typeof(value));
		    },
		    //加入购物车
		    toCart(){
		    	let param = {
		    		bookId:this.bookInfo.bookId,
		    		shopCartId:'',
		    		bookNum:this.buyNum,
		    	};
		    	this.$store.dispatch('addToShopCart',param).then((res)=>{
		    		if(res.status == 200){
		    			this.$message({
				          	message: '成功加入购物车',
				          	type: 'success'
				        });
		    		}else{
		    			this.$message({
				          	message: '加入购物车失败',
				          	type: 'error'
				        });
		    		}
		    	});
		    },
		    //立即购买
		    toBuy(){
		    	this.$router.push({ path: '/shoppingOrder', query: { flag: 'fromBuy',bookId : this.bookInfo.bookId , num : this.buyNum }});
		    },
  		},
  		computed: {
		 ...mapGetters([
			'bookInfo',//当前书籍信息
			'bookListByType',//分类书籍列表
			'bookList',//随机获取图书列表
			
   		 ]),
	    },
  		mounted(){
  			const {bookId,typeId}=this.$route.query;
  			//获取当前书籍
			this.$store.dispatch('getBook',{bookId:bookId});
			//获取同类书籍
			this.$store.dispatch('getBookListByTypeId',{pageNum:1,pageSize:6,typeId:typeId});
			//获取推荐书籍（目前是随机推荐）
  			this.$store.dispatch('getBookList',{pageNum:1,pageSize:5,keyWord:''});
  		},
  		components: {
		}
	}

</script>

<style scoped lang="scss">
.shopping-container{
    width:90%;
    margin: auto;
    margin-top: 20px;
    .shop-info{
        margin-bottom:30px;
        img{
            margin-top: 40px;
            width: 90%;
            height: 90%;
        }
        .price{
            width: 100%;
            padding: 10px;
            font-size: 15px;
            background-color: #ebebeb;
        }
        span{
            display: block;
            margin: 20px 0 0 30px;
            
        }
    }
    .line{
        border-bottom: 2px solid #bfcbd9;
    }
    .other-buy{
    	width: 100%;
    	.other-title{
            text-align: center;
            margin: 20px 0;
        }
        .other-title:before,.other-title:after{
            margin-left: 20px;
            margin-right: 20px;
            color: #EBEBEB;
            content: "————————————————————————————";
        }
        .buy-last{
            float: left;
            width: 15%;
            margin-left: 15px;
            img{
                width: 90%;
                height: 90%;
            }
            .buy-intro{
                width: 100%;
                display: block;
                white-space:nowrap; 
                overflow:hidden;
                text-overflow:ellipsis;
            }
        }
	}
    .goods-box{
        .goods-advice{
            padding:0px;
            img{
                width: 95%;
                height: 95%;
            }
            span{
                display: block;
                margin-bottom: 2px;
                
            }
            .price-font{
                color: red;
            }
        }
        .buy{
            width: 95%;
            margin: 20px auto;
            .goods-info{
            	margin-left: 20px;
            }
        }
    }
    .page{
    	text-align: right;
        margin-bottom: 30px;
    }
}
</style>