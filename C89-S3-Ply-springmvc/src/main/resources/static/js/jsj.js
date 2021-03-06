// 注册Vue自定义组件： 组件名大小写不敏感，不能使用驼峰命名法
// `` （反引号）可以定义大段的包含换行的字符串
Vue.component(
	'luc',
	{
		data : function(){
			return { list : [] };
		},
		created(){
			axios.get("NewReg.do").then(res=>{
				this.list=res.data;
			})
		},
		template : `<div class="side_block" id="E05">
						<div class="title">新注册用户</div>
						<div class="separate"></div>
						<div class="side_user_list">
							<ul>
								<li v-for="n in list">
								<a target="_blank" :href="'user.html#'+n.id">
								<img :src="n.headImg" :title="n.school">
								</a>
								</li>							
							</ul>
						</div>
						<div class="clearfloat"></div>
					</div>`
	}
)

Vue.component(
	'hotperson',
	{
		template : `<div class="side_block">
					<div class="title">热门个人</div>
					<div class="separate"></div>
					<div class="hot_seller">
						<ul>
							<li><a href="user/26332672/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26332672_dsjyhphalu0w1kui.jpg!tiny" alt="呼LL"
									title="呼LL"></a><a
								href="user.html#26332672"
								target="_blank">呼LL&nbsp;&nbsp;(98)</a></li>
							<li><a href="user/26257747/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/default.jpg!tiny" alt="孔文明" title="孔文明"></a><a
								href="user/26257747/sell.html"
								target="_blank">孔文明&nbsp;&nbsp;(98)</a></li>
							<li><a href="user/21551094/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/21551094_fmmmmatn23vqyd98.jpg!tiny" alt="kongquegege"
									title="kongquegege"></a><a
								href="user/21551094/sell.html"
								target="_blank">kongquegege&nbsp;&nbsp;(97)</a></li>
							<li><a href="user/26455368/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/default.jpg!tiny" alt="奇琪轩" title="奇琪轩"></a><a
								href="user/26455368/sell.html"
								target="_blank">奇琪轩&nbsp;&nbsp;(96)</a></li>
							<li><a href="user/19022825/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/82717568_btrd8ju0x1303bnx.jpg!tiny" alt="二宮漣"
									title="二宮漣"></a><a
								href="user/19022825/sell.html"
								target="_blank">二宮漣&nbsp;&nbsp;(96)</a></li>
							<li><a href="user/22511421/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/22511421_quy1jxfo9o18f04v.jpg!tiny" alt="sippen"
									title="sippen"></a><a
								href="user/22511421/sell.html"
								target="_blank">sippen&nbsp;&nbsp;(95)</a></li>
							<li><a href="user/26249879/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/default.jpg!tiny" alt="jnsht0535" title="jnsht0535"></a><a
								href="user/26249879/sell.html"
								target="_blank">jnsht0535&nbsp;&nbsp;(93)</a></li>
							<li><a href="user/25660862/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/64265162_alksikhxuv354n87.jpg!tiny" alt="冷月孤心"
									title="冷月孤心"></a><a
								href="user/25660862/sell.html"
								target="_blank">冷月孤心&nbsp;&nbsp;(92)</a></li>
							<li><a href="user/21151884/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/21151884_jjgxvn74bc8hdtcp.jpg!tiny" alt="我的书库"
									title="我的书库"></a><a
								href="user/21151884/sell.html"
								target="_blank">我的书库&nbsp;&nbsp;(92)</a></li>
							<li><a href="user/19142673/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/71610350_7ih19wkjvm9k6jqh.jpg!tiny" alt="吟风为歌"
									title="吟风为歌"></a><a
								href="user/19142673/sell.html"
								target="_blank">吟风为歌&nbsp;&nbsp;(92)</a></li>
						</ul>
					</div>
				</div>`
	}
)

Vue.component(
	'ltusers',
	{
		data : function(){
			return { users : [] };
		},
		created(){
			axios.get("getlastTimeUsers.do").then(res=>{
				this.users = res.data;
			});
		},
		template : `<div class="side_block" id="lastLoginedUsers">
						<div class="title">最近登录用户</div>
						<div class="separate"></div>
						<div class="side_user_list">
							<ul>
								<li v-for="u in users"><a target="_blank"
									:href="'user.html#'+u.id"><img
										:src="u.headImg"
										:title="u.account+' ♀ '+u.school"></a></li>
							</ul>
						</div>
						<div class="clearfloat"></div>
					</div>`

	}
)

Vue.component(
	'cate',
	{
		data : function(){
			return { calist : {} };
		},
		created(){
			axios.get("selectAllCate.do").then(res=>{
				this.calist=res.data;
			})
		},
		template : `<div class="side_block">
					<div class="title">书籍分类</div>
					<div class="separate"></div>
					<div id="booktype_sidebar_div">
						<a v-for="c in calist" :href="'category.html?'+c.id" category_key="1000">{{c.name}}</a> 
					</div>
				</div>`
	}
)

Vue.component(
		'yetou',
		{
			data : function(){
				return { 
					lu : {}
				};
			},
			created(){
				axios.get("getLoginedUser.do").then(res=>{
					this.lu = res.data.data;
				})
			},
			methods : {
				logout(){
					if(confirm("确定要退出登录?")){
						axios.get("logout.do").then(res=>{
							alert(res.data.msg);
							location.href = "index.html";
						});
					}
				}
			},
			template : `<div class="site_top_row">
							<div class="center_980">
								<div class="school_location" style="float: left;">
									[<a href="javascript:void(0)"
										onclick="showSchoolList();return false;">所有学校</a>]
								</div>
								<div id="top_user_info" style="float: right;">
									<a v-if="lu.account" href="user-01set.html">{{lu.account}}</a>
									<a v-else href="login.html">登录</a>
									|
									<a v-if="lu.account" @click="logout">退出|</a>
									<a href="sell.html/create">出售</a>|
									<a style="color: rgb(254, 137, 0);" href="register.html">立即注册</a>|
									<a class="app_mobile" target="_blank" href="site/app">下载APP</a>
								</div>
								<div class="clearfloat"></div>
							</div>
						</div>`
		}
	)
	
Vue.component(
	'hbs',
	{
		template : `<div class="side_block">
					<div class="title">热门书店</div>
					<div class="separate"></div>
					<div class="hot_seller">
						<ul>
							<li><a href="user/26398619/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26398619_u8qh0icocnbarbes.jpg!tiny" alt="启航ing"
									title="启航ing"></a><a
								href="user.html#26398619"
								target="_blank">启航ing&nbsp;&nbsp;(409738)</a></li>
							<li><a href="user/26226787/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/93860536_pvmk0snsd9fxqkmu.jpg!tiny" alt="一方书店"
									title="一方书店"></a><a
								href="user.html#26226787"
								target="_blank">一方书店&nbsp;&nbsp;(102913)</a></li>
							<li><a href="user/26256434/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26256434_stxmrnzp8s19jyun.jpg!tiny" alt="zxsd69"
									title="zxsd69"></a><a
								href="user.html#26256434"
								target="_blank">zxsd69&nbsp;&nbsp;(94131)</a></li>
							<li><a href="user/26323795/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26323795_9cqz7krwnhdcbyj5.jpg!tiny" alt="友佳特价书店"
									title="友佳特价书店"></a><a
								href="user.html#26323795"
								target="_blank">友佳特价书店&nbsp;&nbsp;(93289)</a></li>
							<li><a href="user/16982378/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/8692929230_1504180972.jpg!tiny" alt="上游" title="上游"></a><a
								href="user.html#16982378"
								target="_blank">上游&nbsp;&nbsp;(90381)</a></li>
							<li><a href="user/26438497/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/1803262834_1606718236.jpg!tiny" alt="honestyisgold"
									title="honestyisgold"></a><a
								href="user.html#26438497"
								target="_blank">honestyisgold&nbsp;&nbsp;(46459)</a></li>
							<li><a href="user/26257385/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26257385_dzjjvwws5m6omira.jpg!tiny" alt="三未书屋"
									title="三未书屋"></a><a
								href="user.html#26257385"
								target="_blank">三未书屋&nbsp;&nbsp;(35416)</a></li>
							<li><a href="user/24099523/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/24099523_pn70je326thqjkic.jpg!tiny" alt="倾城小小"
									title="倾城小小"></a><a
								href="user.html#24099523"
								target="_blank">倾城小小&nbsp;&nbsp;(23582)</a></li>
							<li><a href="user/25158186/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/25158186_dzg5rxx0nj36dwel.jpg!tiny" alt="激素脸啊"
									title="激素脸啊"></a><a
								href="user.html#25158186"
								target="_blank">激素脸啊&nbsp;&nbsp;(13373)</a></li>
							<li><a href="user/26154282/sell.html"
								target="_blank"><img class="user_pic_tiny"
									src="res/26154282_0epqtcprt6t3c2mo.jpg!tiny" alt="拼搏精灵"
									title="拼搏精灵"></a><a
								href="user.html#26154282"
								target="_blank">拼搏精灵&nbsp;&nbsp;(12558)</a></li>
						</ul>
					</div>
				</div>`
	}
)


Vue.component(
	'mul',
	{
		data : function(){
			return { list : [] };
		},
		created(){
			axios.get("selectMostFans").then(res=>{
				this.list = res.data;
			});
		},
		template : 
			`<div class="side_block">
					<div class="title">最多人关注</div>
					<div class="separate"></div>
					<div class="side_user_list">
						<ul>
							<li v-for="u in list"><a target="_blank"
								:href="'user.html#'+u.user.id"><img
									:src="u.user.headImg"
									:title="u.user.account+' ♀ '+u.user.schoolObj.name"></a></li>
							
						</ul>
					</div>
					<div class="clearfloat"></div>
				</div>
			`
	}
)

Vue.component(
	'foot',
	{
		template : `<div class="bottom">
		<div class="center_980">
			<div class="bottom_left">
				<ul>
					<li><a href="site/about">关于我们</a></li>
					<li><a href="site/joinus">申请合作</a></li>
					<li><a href="site/privacy">隐私政策</a></li>
					<li><a href="site/term">服务条款</a></li>
					<li><a href="site/help">帮助</a></li>
					<li><a href="link.html">友情链接</a></li>
				</ul>
			</div>
			<div id="copyright">
				© 2020 by 旧书街 <a href="http://beian.miit.gov.cn/">蜀ICP备16007902号-2</a>
			</div>
		</div>
	</div>`
	}
)

Vue.component(
	'top',
	{
		template : `<div id="top">
		<div class="center_980">
			<div id="logo">
				<a href=""> <img
					src="res/jiushujie-logo.png" alt="买卖二手书,就上旧书街" title="买卖二手书,就上旧书街">
				</a>
			</div>
			<div style="float: left;">
				<img src="res/slogan1124.png">
			</div>
			<div id="top-nav">
				<ul class="top_menu">
					<li><a id="home_tab" href="/"
						class="selectedtab">首页</a></li>
					<li><a id="sell_tab" href="sell.html">出售</a>
					</li>
					<li><a id="buy_tab" href="buy">求购</a>
					</li>
				</ul>
			</div>
		</div>
	</div>`
	}
)

Vue.component(
	'pc',{
		props: ['uid'],
		template : `<div  class="content_left">
				<div id="patent" class="padding_10 border_white">
					<div class="user_setting_block">
						<div class="title">个人设置</div>
						<ul>
							<li><a id="1" href="user-01set.html" v-bind:class="{  active_link : '1' == uid }">头像&amp;基本信息</a></li>
							<li><a id="2" href="user-02intro.html" v-bind:class="{  active_link : '2' == uid }">签名档</a></li>
							<li><a id="3" href="user-03changepwd.html" v-bind:class="{  active_link : '3' == uid }">修改密码</a></li>
							<li><a id="4" href="user-04inviteLink.html" v-bind:class="{  active_link : '4' == uid }">我的邀请链接</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">我是卖家</div>
						<ul>
							<li><a id="5" href="user-05sellOrderList.html" v-bind:class="{  active_link : '5' == uid }">收到的订单</a></li>
							<li><a id="6" href="user-06mailFee.html" v-bind:class="{  active_link : '6' == uid }">运费设置</a></li>
							<li><a id="7" href="user-07bankAccount.html" v-bind:class="{  active_link : '7' == uid }">收款账号设置</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">我是买家</div>
						<ul>
							<li><a id="8" href="user-08orderList.html" v-bind:class="{  active_link : '8' == uid }">我下的订单</a></li>
							<li><a id="9" href="user-09address.html" v-bind:class="{  active_link : '9' == uid }">收货信息</a></li>
							<li><a id="40" href="user-40address.html" v-bind:class="{  active_link : '40' == uid }">添加收货地址</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">动态</div>
						<ul>
							<li><a id="10" href="user-10newsList.html" v-bind:class="{  active_link : '10' == uid }">我的动态</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">书籍</div>
						<ul>
							<li><a id="11" href="user-11mysell.html" v-bind:class="{  active_link : '11' == uid }">我的出售</a></li>
							<li><a id="12" href="user-12soldout.html" v-bind:class="{  active_link : '12' == uid }">我的售罄</a></li>
							<li><a id="13" href="user-13mybuy.html" v-bind:class="{  active_link : '13' == uid }">我的求购</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">留言</div>
						<ul>
							<li><a id="14"
								href="user-14commsell.html" v-bind:class="{  active_link : '14' == uid }">留言-出售</a></li>
							<li><a id="15" href="user-15commbuy.html" v-bind:class="{  active_link : '15' == uid }">留言-求购</a></li>
							<li><a id="16"
								href="user-16commnews.html" v-bind:class="{  active_link : '16' == uid }">留言-动态</a></li>
						</ul>
					</div>
					<div class="user_setting_block">
						<div class="title">消息</div>
						<ul>
							<li><a id="17" href="user-17inbox.html" v-bind:class="{  active_link : '17' == uid }">收件箱</a></li>
							<li><a id="18" href="user-18outbox.html" v-bind:class="{  active_link : '18' == uid }">发件箱</a></li>
						</ul>
					</div>
					
					<div id="guanzhu" class="user_setting_block">
						<div class="title">用户</div>
						<ul>
							<li><a id="19" href="user-19follow.html" v-bind:class="{  active_link : '19' == uid }">我的关注</a></li>
							<li><a id="20" href="user-20fans.html" v-bind:class="{  active_link : '20' == uid }">我的粉丝</a></li>
						</ul>
					</div>
				</div>
			</div>`
	}
)