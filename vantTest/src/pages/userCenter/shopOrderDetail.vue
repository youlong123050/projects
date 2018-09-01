<template>
    <div id="shopOrderDetail">
        <div class="header">
            <div class="headerLine">
                <div class="name">收件人：<em class="gray">{{order.receiver.name}}</em></div>
                <div class="phone">电话：<em class="gray">{{order.receiver.phone}}</em></div>
            </div>
            <div class="headerLine line2">
                <van-icon name="location" class="leftIcon" />
                <div class="address"><em class="gray">{{order.receiver.city+order.receiver.address}}</em></div>
            </div>
            
        </div>
        <div class="orderPro" v-for="item in order.pros" :key="item.id">
            <div class="proImg">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="proRight">
                <div class="proTitle">{{item.title}}</div>
                <div class="proNum gray">x{{item.num}}</div>
            </div>
        </div>
        <van-cell-group class="bottomInfo">
            <van-cell title="订单编号" :value="order.id" />
            <van-cell title="下单时间" :value="order.time" />
            <van-cell title="支付积分" :value="order.price" />
        </van-cell-group>
    </div>
</template>
<script>
import { Icon,Cell, CellGroup } from 'vant';
export default {
    components:{
        [Icon.name]:Icon,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup
    },
    data(){
        return {
            order:{
                id:"00001",
                pros:[
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.50",id:'001'},
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.60",id:'002'},
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"128.50",id:'003'}
                ],
                orderPrice:"3512.00",
                status:"待发货",
                time:'2018-9-12 14:25:32',
                price:'40000',
                receiver:{
                    name:'欧阳少恭',
                    phone:'13254789652',
                    city:'四川省遂宁市大英县',
                    address:'老县城东大街128号西城阳光小区1栋1单元1304'
                }
            }
        }
    },
    created() {
        console.log(this.$route.params.id);//id参数
    },
}
</script>
<style scoped>
#shopOrderDetail{background: #f0f0f0;font-size: 3.5vmin;}
.header{display: flex;align-items: center;height: 12vh;margin-bottom: 2vh;padding:0 2vh;background: #fff;flex-direction: column}
.headerLine{display: flex;width: 100%;flex:1;align-items: center;}
.line2{flex:2;}
.name{flex: 1}
.phone{flex:1}
.leftIcon{flex:1;}
.address{flex:10}
.orderPro{height: 80px;display:flex;padding: 2vh 0;box-sizing: content-box;background: #fff;}
.proImg{flex: 1;display: flex;justify-content: center}
.proImg img{width: 80px;height: 80px;display: block;background: #f5f5f5;border-color: rgba(0,0,0,0)}
.proRight{flex: 2;align-items: center;height:80px;font-size: 4vmin;}
.proTitle{line-height: 20px;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;height: 60px;}
.proNum{height: 20px;line-height: 20px;}
.bottomInfo{margin-top: 2vh}
</style>
