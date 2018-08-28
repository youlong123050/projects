<template>
    <div id="userHome">
        <div class="userHeader">
            <div class="userLeft">
                <div class="userPhoto"><img src="" alt=""></div>
                <div class="userName">MR. Hello kitty</div>
            </div>
            <ul class="userRight">
                <li>13551236548</li>
                <li>普通会员</li>
                <!-- 会员等级对应的折扣信息，和消费相关说明(配图文) -->
                <li><van-button tag="a" href="https://www.baidu.com" type="primary" size="small" plain>查看会员权益 </van-button></li>
            </ul>
        </div>
        <div class="userList">
            <van-cell-group>
                <van-cell icon="points-mall" to="/user/shop" title="商城订单" is-link />
                <van-cell icon="pending-deliver" to="/user/yuyue" title="预约订单" is-link />
                <van-cell icon="records" to="/user/tijian" title="体检数据" is-link />
                <van-cell icon="wechat" to="/user/hyCard" title="微信会员卡" is-link />
            </van-cell-group>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { Button,Cell, CellGroup } from 'vant';

export default {
    components:{
        [Button.name]:Button,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
#userHome{background: #f0f0f0;}
.userHeader{height: 21vh;display: flex;margin-bottom: 2vh;background: #fff;padding-bottom: 1vh;}
.userLeft{flex: 3;display: flex;flex-direction: column;padding-left: 10vw;}
.userPhoto{display: flex;flex: 3;justify-content: center;align-items: center;}
.userPhoto img{display: block;height:80px;width:80px;border-radius: 50%;border: solid 1px #e5e5e5;}
.userName{flex: 1;align-items: center;justify-content: center;display:flex;font-size: 1.4vmin;color: #666}
.userRight{flex:5;display: flex;flex-direction: column;padding-left: 5vw;}
.userRight li{flex: 1;align-items: center;display:flex;font-size: 4vmin;color: #666}
.userRight li:first-child{flex:1.5;color: #000;}

.userList{background: #fff;}

</style>

