import Vue from 'vue'
import Router from 'vue-router'

//会员中心
import userHome from '@/pages/userCenter/index'
import shopOrderList from '@/pages/userCenter/shopOrderList'
import shopOrderDetail from '@/pages/userCenter/shopOrderDetail'
import yuyueList from '@/pages/userCenter/yuyueList'
import tijianList from '@/pages/userCenter/tijianList'
import hyCard from '@/pages/userCenter/hyCard'

//积分商城
import shopIndex from '@/pages/shop/index'

Vue.use(Router)

const rounter= new Router({
	mode: 'history',
  	routes: [
			{
	      path: '/',
	      meta: {
	      	title: '积分商城'
	      },
				component: shopIndex
			},
			{
	      path: '/user',
	      meta: {
	      	title: '会员中心'
	      },
				component: userHome
			},
			{
	      path: '/user/shop',
	      meta: {
	      	title: '商城订单列表'
	      },
				component: shopOrderList
			},
			{
	      path: '/user/shop/:id',
	      meta: {
	      	title: '商城订单详情'
	      },
				component: shopOrderDetail
			},
			{
	      path: '/user/yuyue',
	      meta: {
	      	title: '预约订单列表'
	      },
				component: yuyueList
			},
			{
	      path: '/user/tijian',
	      meta: {
	      	title: '体检数据'
	      },
				component: tijianList
			},
			{
	      path: '/user/hyCard',
	      meta: {
	      	title: '微信会员卡'
	      },
				component: hyCard
	    },
  	]
})

rounter.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})

export default rounter;