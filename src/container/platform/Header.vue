<template>
	<header class="platform-header">
		<el-row>
			<el-col :xs="4" :sm="4" :md="5" :lg="5" class="logo"></el-col>
  			<el-col :xs="14" :sm="14" :md="14" :lg="14">
  				<div class="search">
	  				<el-input
						placeholder="请选择书籍"
						icon="search"
						v-model="search.search"
						:on-icon-click="searchBook">
						<template slot="prepend">
							<el-select v-model="search.value" style="width: 110px;">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						</template>
						<template slot="append">
							<el-button  icon="search" @click="searchBook">搜索</el-button>
						</template>
					</el-input>
				</div>
  			</el-col>
  			<el-col :xs="6" :sm="6" :md="5" :lg="5" class="login">
  				<span v-show="sysUserName"><a href="/person">{{sysUserName}}</a></span>
  				<span v-show="!sysUserName"><a href="/platformLogin">登入</a></span>
  				<span>|</span>
  				<span v-show="sysUserName"><a @click="logout">注销</a></span>
  				<span v-show="!sysUserName"><a href="/regist">注册</a></span>
  			</el-col>
		</el-row>
	</header>
</template>

<script>
	export default {
		data() {
		    return {
		    	sysUserName:'',
		    	activeIndex:'homePlatform',
		    	flag:'nav-middle',
		    	options: [{
		          value: '001',
		          label: '全部分类'
		          
		        }, {
		          value: '002',
		          label: '中国文学'
		        }, {
		          value: '003',
		          label: '外国文学'
		        },
		    	{
		          value: '003',
		          label: '历史文献'
		        }],
		        search:{
		        	search:'',
		        	value: '001'
		        }
		    }
		  },
		methods: {
		    searchBook(){
		   		this.$router.push({ path: '/search'});
		    },
		    logout(){
		    	var _this = this;
				sessionStorage.removeItem('platformUser');
				_this.$router.push('/');
				window.location.reload();
		    }
  		},
  		computed:{
        },
  		mounted() {
			let platformUser = sessionStorage.getItem('platformUser');
			if (platformUser) {
				platformUser = JSON.parse(platformUser);
				this.sysUserName = platformUser.userName || '';
			}
		},
		watch:{
			
		}
	}

</script>
<style scoped lang="scss">
	/*头部样式*/
.platform-header{
    margin: 8px auto;
    width: 90%;
    .logo{
        height:78px;
        background: url(../../image/logo.png);
        background-size:100% 100%;
    }
    .search{
        line-height: 90px;
        width:70%;
        text-align: right;
        padding-left:70px;
    },
    .login{
        line-height: 90px;
        span{
            margin-left: 10px;
            font-size: 1.1em;
        }
    }
}
</style>
