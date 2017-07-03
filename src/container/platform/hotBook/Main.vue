<template>
	<section class="hot-book-main">
		<el-row class="tags" :gutter="30">
			<el-col :xs="20" :sm="20" :md="19" :lg="19" >
				<el-tabs v-model="hotBook" type="card" @tab-click="handleClick">
				    <el-tab-pane label="热门书籍" disabled name="index"></el-tab-pane>
				    <el-tab-pane label="文学" name="1"></el-tab-pane>
				    <el-tab-pane label="小说" name="2"></el-tab-pane>
				    <el-tab-pane label="教育" name="3"></el-tab-pane>
				    <el-tab-pane label="辅导书" name="4"></el-tab-pane>
				    <el-tab-pane label="文学" name="5"></el-tab-pane>
				    <el-tab-pane label="小说" name="6"></el-tab-pane>
				    <el-tab-pane label="教育" name="7"></el-tab-pane>
				    <el-tab-pane label="辅导书" name="8"></el-tab-pane>
				</el-tabs>
			</el-col>
			<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
				<strong style="line-height: 70px;">热门书籍</strong>
				<span style="margin-left: 25%;"><a href="">更多>></a></span>
			</el-col>
		</el-row>
		<el-row :gutter="30" class="book-list">
			<el-col :xs="20" :sm="20" :md="19" :lg="19" class="result-book">
				<el-card  :key="book" v-for="book in books" class="col">
					<div align="center"><a @click="toGoodsInfo(book.bookId)"><img src="../../../image/xiaowangzi.png"/></a></div>
					<span :title="book.bookName"><a @click="toGoodsInfo(book.bookId)">{{book.bookName}}</a></span>
					<span :title="book.author">{{book.author}}</span>
					<span><strong  class="price-font">{{book.price}}</strong>&nbsp;&nbsp;(<s>23.00</s>)</span>
				</el-card>
			</el-col>
			<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
				<el-card class="box-card">
				  <div v-for="o in 10" :key="o" class="text item">
				    {{'列表内容 ' + o }}
				  </div>
				</el-card>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	export default {
		data() {
		    return {
		        search: '',
		        hotBook:'1',
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
	        	}],
		    }
		  },
		methods: {
		    handleClick(tab, event) {
		        console.log(tab, event);
		    },
		    //商品详情
		    toGoodsInfo(bookId){
		    	this.$router.push({ path: '/shopping', query: { bookId: '003' }});
		    }
  		},
  		mounted(){
  		},
  		components: {
		}
	}

</script>
<style scoped lang="scss">
	
</style>
