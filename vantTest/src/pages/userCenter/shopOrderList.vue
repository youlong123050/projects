<template>
    <div class="userCenter" id="orderList">
        <van-tabs v-model="active" sticky>
            <van-tab title="全部">
                <div class="orderItem" v-for="order in orders" :key="order.id">
                    <div class="header">
                        <div class="orderId">订单编号：<em class="gray">{{order.id}}</em></div>
                        <div class="orderSatus">状态：<em class="gray">{{order.status}}</em></div>
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
                    <div class="orderBottom">
                        <em>共2件商品</em>
                        <em>消耗积分：<font class="red">30000</font></em>
                        <van-button size="mini" type="danger" tag="a" :href="'shop/'+order.id" plain>查看详情</van-button>
                    </div>
                </div>
            </van-tab>
            <van-tab title="待发货">
                <div class="orderItem" v-for="order in orders" :key="order.id">
                    <div class="header">
                        <div class="orderId">订单编号：<em class="gray">{{order.id}}</em></div>
                        <div class="orderSatus">状态：<em class="gray">{{order.status}}</em></div>
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
                    <div class="orderBottom">
                        <em>共2件商品</em>
                        <em>消耗积分：<font class="red">30000</font></em>
                        <van-button size="mini" type="danger" plain>查看详情</van-button>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已完成">
                <div class="orderItem" v-for="order in orders" :key="order.id">
                    <div class="header">
                        <div class="orderId">订单编号：<em class="gray">{{order.id}}</em></div>
                        <div class="orderSatus">状态：<em class="gray">{{order.status}}</em></div>
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
                    <div class="orderBottom">
                        <em>共2件商品</em>
                        <em>消耗积分：<font class="red">30000</font></em>
                        <van-button size="mini" type="danger" plain>查看详情</van-button>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        
        
    </div>
</template>
<script>
import { Card,Button,Tab, Tabs } from 'vant';

export default {
    components:{
        [Card.name]:Card,
        [Button.name]:Button,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs
    },
    data(){
        return{
            orders:[{
                id:"00001",
                pros:[
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.50",id:'001'},
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.60",id:'002'},
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"128.50",id:'003'}
                ],
                orderPrice:"3512.00",
                status:"待发货"
            },{
                id:"00002",
                pros:[
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.50",id:'001'},
                ],
                orderPrice:"512.00",
                status:"待发货"
            },{
                id:"00003",
                pros:[
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.50",id:'001'},
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.60",id:'002'},
                ],
                orderPrice:"492.00",
                status:"待发货"
            },{
                id:"00004",
                pros:[
                    {imgUrl:'/static/images/icon_shop.png',title:"我是商品标题",desc:"商品描述商品描述商品描述商品描述商品描述商品描述",num:"2",price:"125.50",id:'001'},
                ],
                orderPrice:"512.00",
                status:"待发货"
            },]
        }
    }
}
</script>
<style scoped>
#orderList{background: #f0f0f0;}
.orderItem{background: #fff;margin-bottom: 2vh;padding:0 2vh;display: flex;flex-direction: column;font-size: 3.5vmin;}
.header{display: flex;align-items: center;height: 6vh;}
.orderId{flex: 2}
.orderStatus{flex:1}
.orderPro{height: 80px;display:flex;padding: 2vh 0;box-sizing: content-box;}
.proImg{flex: 1;display: flex;justify-content: center}
.proImg img{width: 80px;height: 80px;display: block;background: #f5f5f5;border-color: rgba(0,0,0,0)}
.proRight{flex: 2;align-items: center;height:80px;font-size: 4vmin;}
.proTitle{line-height: 20px;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;height: 60px;}
.proNum{height: 20px;line-height: 20px;}
.orderBottom{height: 8vh;display: flex;align-items: center;justify-content: flex-end;}
.orderBottom em{padding-right: 4vw;}
</style>
