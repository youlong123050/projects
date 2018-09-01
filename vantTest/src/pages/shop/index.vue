<template>
    <div id="shopIndex">
        <van-swipe :autoplay="3000" class="swiper">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
        <div class="userInfo">
            <em>我的积分：<span class="red">21456</span></em>
            <em>会员等级：<span class="gray">普通会员</span></em>
        </div>
        <ul class="typeList">
            <li v-for="item in typeList" :key="item.id"><span><img :src="item.icon"></span><em>{{item.name}}</em></li>
        </ul>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';

//分类图标库：http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=28
export default {
    data(){
        return{
            images:[
                'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
            ],
            typeList:[
                {id:'01001',name:'手机数码',icon:'/static/images/shuma.png'},
                {id:'01002',name:'鞋/箱包',icon:'/static/images/xiebao.png'},
                {id:'01003',name:'居家日用',icon:'/static/images/jiafang.png'},
                {id:'01004',name:'全部',icon:'/static/images/all.png'}
            ]
        }
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    }
}
</script>
<style scoped>
.swiper{height: 30vh;}
.swiper img{max-height: 100%;max-width: 100%;}
.userInfo{height: 10vh;display: flex;align-items: center}
.userInfo em{display:block;flex: 1;padding-left: 5vw;font-size: 3.5vmin;}
.userInfo em:nth-child(2n){text-align: right;padding-right: 5vw;}

.typeList li{width: 25vw;height: 25vw;float: left;}
.typeList::after{clear:both;content:''}
.typeList li span{height: 10vw;display: flex;align-items: center;justify-content: center;width: 100%;}
.typeList li em{text-align: center;display: block;font-size: 3.5vmin;line-height: 15vw}

</style>
