组长：林青璇
	负责内容：1.购物车页面实现各商品的结算、删除和数量的增减，当商品数量为1时，再点击减少数量，则会		弹出提示框，是否要删除该商品；以及通过点击地址栏显示的遮罩层跳转至新增地址和修改地址页面。
		2.我的果园页面实现判断用户是否在登录状态，以登录则显示用户登录的手机号，未登录显示提醒登		录的信息，点击手机号可以跳转至个人信息页面，点击提示信息则跳转至登陆页面。
		3.注册页面实现通过正则判断手机号码是否正确，并和数据库数据相匹配，如果数据库已存在该号码		，则提醒该号码已被注册；只有当输入号码满足以上两个条件并不为空时，获取验证码的按钮才会出		现，获取验证码被点击后，需要过1分钟后才能再次点击获取随机四位数验证码，该验证码就是登陆		时需要的密码。
		4.登陆页面通过匹配数据库是否存在该用户的信息来实现是否等正常登陆。
		5.确认订单页面通过缓存拿到从购物车页面点击结算传来的数据，并显示在页面上。
组员：
	周会军：
		负责内容：1.首页实现点击加号将商品加入购物车，轮播图、以及通过左右滑动查看溢出的商品图片；在购物车页面可以查看
			2.分类页面实现各类商品的切换
			3.新增地址页面通过点击首页顶部左上角跳转至该页面，通过该页面，用户可以添加自己的收获地址
			4.搜索页面通过点击首页右上角搜索图标进入搜索页面，在搜索栏输入内容点击搜索即可查看要搜索的内容。
	龙飞宇：
		负责内容：1.列表页通过点击分类页面的任意类型，对应跳转至对应商品类别列表页，可以点击右边的加号图标实现将商品添加至购物车的功能，并在左下角购物车图片显示加入购物车的数量
			2.详情页，点击任意商品，可以跳转至相应商品的详情页面；然后点击购物车即可将商品加入购物车功能、通过获取数据库评论数据动态显示商品相应评论内容
	
	韦职丽：
		负责内容：1.我的订单页面，在我的果园页面点击我的订单进入该页面，该页面包括了用户下的全部订单、待付款、待发货、待收货、待评价的订单，通过改变订单状态分别显示。
			2.订单详情页面，通过点击确认订单的提交订单按钮，进入该页面。该页面实现了付款详情的遮罩层弹窗，以及将下单的数据写入数据库orderproduct表和order表。