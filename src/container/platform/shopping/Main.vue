<template>
	<section class="shopping-container">
		<el-row class="shop-info">
			<el-col :xs="4" :sm="4" :md="5" :lg="5">
				<img src="../../../image/xiaowangzi.png"/>
			</el-col>
			<el-col :xs="12" :sm="12" :md="10" :lg="10">
				<span><strong class="title">小王子(65周年纪念版)</strong></span>
				<span>圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)</span>
				<span style="height: 50px;overflow:hidden;display:block;text-overflow:ellipsis;">《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理</span>
				<span style="display: inline-flex;">
					<el-rate
					  v-model="rate"
					  disabled
					  text-color="#ff9900"
					  show-text
					  style="margin-right: 20px;"
					  >
					</el-rate>
					共100条评论
				</span>
				<span class="price">
					<p>价格 ：&nbsp;&nbsp;&nbsp;<del>￥19.00</del></p>
					<p>促销价：&nbsp;&nbsp;&nbsp;<strong class="price-font">￥19.00</strong></p>
				</span>
				<!--<span>
					配送至：
					<el-select v-model="value" placeholder="请选择"  style="width:150px">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					&nbsp;&nbsp;满39元免运费
				</span>-->
				<span>
					数量：&nbsp;&nbsp;
					<el-input-number size="small" @change="handleChange" v-model="num" :min="1" :max="10"></el-input-number>
					&nbsp;&nbsp;库存10000件
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
			<el-card v-for="o in 6" :key="o" class="buy-last">
				<a href=""><img src="../../../image/book1.png" ></a>
		      	<div class="buy-intro">
			        <div class="price-font">￥18</div>
			        <div><a href="">小王子{{o}}（作者诞辰115周年双语珍藏版）</a></div>
			        <div>(法)圣埃克苏佩里著;罗成译.</div>
		      	</div>
		    </el-card>
		</el-row>
		<el-row class="goods-box">
			<el-col :xs="4" :sm="4" :md="4" :lg="4" class="goods-advice">
				<h2 style="height: 42px;line-height: 60px;">同类商品推荐</h2>
				<el-card :key="o" v-for="o in 5">
					<div align="center">
						<a href=""><img src="../../../image/book1.png" ></a>
					</div>
			      <div>
			        <span class="price-font">￥18</span>
			        <span><a href="">小王子{{o}}（作者诞辰115周年双语珍藏版）</a></span>
			        <span>(法)圣埃克苏佩里著;罗成译.</span>
			      </div>
			    </el-card>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="20" >
				<el-row class="buy">
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					    <el-tab-pane label="商品详情" name="info">
					    	<div class="goods-info">
					    		<p><h3>基本信息</h3></p>
								<p>出版社: 天津人民出版社; 第1版 (2013年1月1日)</p>
								<p>外文书名: Le Petit Prince</p>
								<p>精装: 118页</p>
								<p>读者对象: 7-10岁</p>
								<p>语种： 简体中文</p>
								<p>开本: 32</p>
								<p>ISBN: 7201077643, 9787201077642</p>
								<p>条形码: 9787201077642</p>
								<p>商品尺寸: 21 x 14.5 x 1 cm</p>
								<p>商品重量: 399 g</p>
								<p>品牌: 杭州果麦</p>
								<p>ASIN: B00ANFMU8W
								<p>用户评分: 平均4.7 星  浏览全部评论 (1,868 条商品评论)</p>
								<p>亚马逊热销商品排名: 图书商品里排第155名 (查看图书商品销售排行榜)</p>
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="商品评论" name="comment">
					    	<div class="goods-comment">
					    		<el-row class="comment-info">
									<el-col :xs="4" :sm="4" :md="5" :lg="5">
										<el-rate
										  v-model="rate"
										  disabled
										  text-color="#ff9900"
										  show-text
										  >
										</el-rate>
									</el-col>
									<el-col :xs="20" :sm="20" :md="19" :lg="19">
										<el-radio class="radio" v-model="stateRadio" label="1">全部</el-radio>
	  									<el-radio class="radio" v-model="stateRadio" label="2">图片</el-radio>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<el-row class="comment-list" v-for="o in 5" :key="o">
								    			<div>
								    				质量很好，有塑胶封套，没损坏。闻了一下，是正版。这价格超值，有需要的图书还会回购。
								    			</div>
								    			<div>
								    				<img src="../../../image/xiaowangzi.png"/>
								    				<img src="../../../image/xiaowangzi.png"/>
								    				<img src="../../../image/xiaowangzi.png"/>
								    			</div>	
								    	</el-row>
									</el-col>
								</el-row>
								<el-row class="page">
									<el-col :span="24">
										<el-pagination
									      @current-change="handleCurrentChange"
									      :current-page="1"
									      :page-size="10"
									      layout="total,  prev, pager, next, jumper"
									      :total="5">
									    </el-pagination>
									</el-col>
								</el-row>
					    	</div>
					    </el-tab-pane>
					</el-tabs>
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
		    	num:1,
		    	activeName:'info',
		    	rate:5,
		    	stateRadio: '1',
		    	options: [{
			          value: 'hunan',
			          label: '湖南省'
			        }, {
			          value: 'guangdong',
			          label: '广东省'
			        }, {
			          value: 'beijing',
			          label: '北京市'
			        }, {
			          value: 'shanghai',
			          label: '上海市'
			        }],
		        goods:{
		        	bookId:'01',
		        	bookName:'小王子',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
			        price: 19,
			        num:1,
		        }
		    }
		},
		methods: {
			handleClick(e){
				
			},
			//计数器
			handleChange(value) {
				this.goods.num=value;
		    },
			handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    },
		    //加入购物车
		    toCart(){
		    	this.cartGoods.push(this.goods);
		    	//this.$store.dispatch('toCart',this.multipleSelection);
		    	this.$message('成功加入购物车！');
		    },
		    //立即购买
		    toBuy(){
		    	let goods = [];
		    	goods.push(this.goods);
		    	this.$store.dispatch('toBuy',goods)
		    	this.$router.push({ path: '/shoppingOrder', query: { flag: 'fromBuy' }});
		    },
  		},
  		computed: {
		 ...mapGetters([
			'bookInfo',
			'cartGoods',
   		 ]),
	    },
  		mounted(){
  			/*const bookId=this.$route.query.bookId;
			this.$store.dispatch('getBook',{bookId:bookId});*/
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
            .goods-comment{
            	.comment-info{
            		margin-bottom: 10px;
            		padding: 0 0 10px 0;
            		border-bottom: 1px solid #bfcbd9;
            		
            	}
            	.radio{
            		display: inline-block;
            		margin-top: 10px;
            	}
            	.el-rate {
				    line-height: 3;
				}
				.comment-list{
					height: 100px;
					margin: 10px 0;
					border-bottom: 1px solid #bfcbd9;
					img{
						margin-top: 10px;
						width:50px;
						height: 50px;
					}
				}
            }
        }
    }
    .page{
    	text-align: right;
        margin-bottom: 30px;
    }
}
</style>