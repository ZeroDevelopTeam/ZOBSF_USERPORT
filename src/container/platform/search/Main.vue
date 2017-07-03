<template>
	<section class="search-container">
		<el-col :xs="4" :sm="4" :md="5" :lg="5">
			<el-row class="filter-book" >
				<h2>图书筛选条件</h2>
				<table border="0" >
					<tr>
						<td>价格：</td>
						<td>
							<el-input v-model="lowest" style="width:50px"></el-input>
							~
							<el-input v-model="highest"  style="width:50px"></el-input>
						</td>
					</tr>
					<tr>
						<td>配送至：</td>
						<td>
							<el-select v-model="value" placeholder="请选择"  style="width:150px">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						</td>
					</tr>
					<tr>
						<td>作者：</td>
						<td>
							<el-input v-model="lowest" style="width:150px"></el-input>
						</td>
					</tr>
					<tr>
						<td>出版社：</td>
						<td>
							<el-input v-model="lowest" style="width:150px"></el-input>
						</td>
					</tr>
					<tr>
						<td>出版时间：</td>
						<td>
							<el-input v-model="lowest" style="width:150px"></el-input>
						</td>
					</tr>
				</table>
			</el-row>
		</el-col>
		<el-col :xs="20" :sm="20" :md="19" :lg="19" class="result">
			<el-row  class="result-count">
				<el-col :span="19">
					显示： 1-{{books.length>9?9:books.length}}条， 共{{books.length}}条 
					<strong style="color: red;">&nbsp;&nbsp;&nbsp;"小王子"</strong>
				</el-col>
				<el-col :span="5">
					排序
				</el-col>
			</el-row>
			<el-row   class="result-book">
				<el-card  :key="book" v-for="book in books" class="col">
					<div align="center"><a @click="toGoodsInfo(book.bookId)"><img src="../../../image/xiaowangzi.png"/></a></div>
					<span :title="book.bookName">书名：<a @click="toGoodsInfo(book.bookId)">{{book.bookName}}</a></span>
					<span :title="book.author">作者：{{book.author}}</span>
					<span>价格：<strong  class="price-font">{{book.price}}</strong>&nbsp;&nbsp;(原价：<s>23.00</s>)</span>
				</el-card>
			</el-row>
			<el-row class="page">
				<el-col :span="24">
					<el-pagination
				      @current-change="handleCurrentChange"
				      :current-page="1"
				      :page-size="12"
				      layout="total,  prev, pager, next, jumper"
				      :total="12">
				    </el-pagination>
				</el-col>
			</el-row>
		</el-col>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
		data() {
		    return {
		    	highest:'',
		    	lowest:'',
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
		        value: '',
		        books:[{
		        	bookId:'01',
		        	bookName:'小王子1',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'02',
		        	bookName:'小王子2',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'03',
		        	bookName:'小王子3',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'04',
		        	bookName:'小王子4',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'05',
		        	bookName:'小王子5',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'06',
		        	bookName:'小王子6',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'07',
		        	bookName:'小王子7',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'08',
		        	bookName:'小王子8',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'09',
		        	bookName:'小王子9',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'10',
		        	bookName:'小王子10',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'11',
		        	bookName:'小王子11',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	},{
	        		bookId:'12',
		        	bookName:'小王子12',
		        	author:'圣埃克苏佩里(Saint-Exupery) (作者), 林秀清 (译者)',
		        	bookDesc:'《小王子》用孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出人类的孤独寂寞、没有根基随风流浪的命运，用温馨、真挚的情感表达出对真善美的讴歌。《小王子》每一行文字都充满诗意的忧郁、淡淡的哀愁，彰显出语言的魅力、思想的高度。伴随一代又一代孩子的成长，引发一代又一代成人的感悟。一个永远也不会长大的小王子，为我们演绎了一个最温馨、最真挚、最感人的故事。每一行文字都充满着诗意的忧郁、淡淡的哀愁，并且彰显出思想的高度、生活和生命的哲理',
		        	price:'19.00',
		        	image_s:'../../../image/xiaowangzi.png',
	        	}],
		    }
		},
		methods: {
			handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		  	},
		  	//商品详情
			toGoodsInfo(bookId){
				this.$router.push({ path: '/shopping', query: { bookId: '003' }});
			},
  		},
  		computed: {
		 ...mapGetters([
			'cartGoods'
   		 ]),
	    },
  		mounted(){
  		},
  		components: {
		}
	}

</script>

<style scoped lang="scss">
/*搜索*/
.search-container{
    width:90%;
    margin: auto;
    margin-top: 20px;
    .filter-book{
        margin-left: 10px;
        table{
            width:90%;
            border-collapse:   separate;
            border-spacing:  0 20px; 
        }
        h2{
            margin-bottom: 10px;
        }
    }
    .result{
        border-left: 1px solid #bfcbd9;
    }
    .result-count{
        margin-left: 30px;
        height: 30px;
        line-height: 30px;
    }
    .result-book{
        margin:0 0 30px 30px;
        .col{
			width: 23%;
        	margin:5px;
        	float:left;
	        span{
	            margin-top: 15px;
	            display:block;
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
    .page{
        text-align: center;
        margin-bottom: 30px;
    }
}
</style>