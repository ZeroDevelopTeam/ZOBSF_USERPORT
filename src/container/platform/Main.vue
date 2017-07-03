<template>
	<section class="platform-home">
		<!-- 新书上架 -->
		<div class="new-book">
			<el-row class="tags" :gutter="30">
				<el-col :xs="20" :sm="20" :md="19" :lg="19" >
					<el-tabs v-model="activeName1" type="card" @tab-click="handleClick1">
					    <el-tab-pane label="新书上架" disabled name="index"></el-tab-pane>
					    <el-tab-pane label="文学" name="1">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="小说" name="2">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="教育" name="3">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="辅导书" name="4">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="文学" name="5">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="小说" name="6">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="教育" name="7">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					    <el-tab-pane label="辅导书" name="8">
					    	<CommBookList :bookList="newBooks"/>
					    </el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<strong style="font-size: 1.5em;line-height: 70px;">新闻公告</strong>
					<span style="margin-left: 25%;"><a href="">更多>></a></span>
					<div class="right_news">
						<el-card class="box-card">
						  <div v-for="o in 5" :key="o" class="text item">
						    {{'列表内容 ' + o }}
						  </div>
						</el-card>
					</div>
				</el-col>
			</el-row>
			
		</div>
		<!-- 读者推荐 -->
		<div class="people-like">
			<el-row class="tags" :gutter="30">
				<el-col :xs="20" :sm="20" :md="19" :lg="19" >
					<el-tabs v-model="activeName2" type="card" @tab-click="handleClick2">
					    <el-tab-pane label="读者推荐" disabled name="index">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="文学" name="1">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="小说" name="2">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="教育" name="3">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="辅导书" name="4">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="文学" name="5">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="小说" name="6">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="教育" name="7">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					    <el-tab-pane label="辅导书" name="8">
					    	<CommBookList :bookList="peopleLikes"/>
					    </el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<strong style="font-size: 1.5em;line-height: 70px;">图书风云榜</strong>
					<span style="margin-left: 25%;"><a href="">更多>></a></span>
					<div class="right_news">
						<el-card class="box-card">
						  <div v-for="o in 5" :key="o" class="text item">
						    {{'列表内容 ' + o }}
						  </div>
						</el-card>
					</div>
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
					<CommBookList :bookList="youLikes"/>
				</el-col>
				<el-col :xs="4" :sm="4" :md="5" :lg="5" class="right_news">
					<strong style="font-size: 1.5em;line-height: 70px;">教辅资料</strong>
					<span style="margin-left: 25%;"><a href="">更多>></a></span>
					<div class="right_news">
						<el-card class="box-card">
						  <div v-for="o in 5" :key="o" class="text item">
						    {{'列表内容 ' + o }}
						  </div>
						</el-card>
					</div>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
import CommBookList from '../../components/CommBookList';
	export default {
		data() {
		    return {
		    	a:[],
		    	activeName1:'1',
		    	activeName2:'1',
		    	newBooks:[{
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
	        	}],
	        	
	        	peopleLikes:[{
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
	        	}],
	        	
	        	youLikes:[{
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
	        	}],
		    }
		  },
		methods: {
		    handleClick1(tab, event) {
		        console.log(tab, event);
		    },
		    handleClick2(tab, event) {
		        console.log(tab, event);
		    },
		    //商品详情
		    /*toGoodsInfo(bookId){
		    	this.$router.push({ path: '/shopping', query: { bookId: '003' }});
		    }*/
  		},
  		mounted(){
  		},
  		components: {
  			CommBookList,
		}
	}

</script>
<style scoped lang="scss">

</style>