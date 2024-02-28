<template>
    <div class="container">
        <el-carousel height="calc(100vh - 59px)">
            <el-carousel-item
                :key="1"
            >
                <div :style="{backgroundImage:`url(${require('@/assets/home1.jpg')})`}"></div>
            </el-carousel-item>
             <el-carousel-item
                :key="2"
            >
                <div :style="{backgroundImage:`url(${require('@/assets/home2.jpg')})`}"></div>
            </el-carousel-item>
             <el-carousel-item
                :key="3"
            >
                <div :style="{backgroundImage:`url(${require('@/assets/home3.jpg')})`}"></div>
            </el-carousel-item>
        </el-carousel>
        <div class="center">互联网+时代</div>
        
        <div class="common-layout">
            <el-container>
            <el-aside width="200px">
                <h2>企业门户官网</h2>
            </el-aside>
            <el-main>
                <div class="introduction">
                    <h3>联系我们</h3>
                    <ul>
                        <li><a href="#">咨询电话：13421166045</a></li>
                        <li><a href="#">邮箱地址：1406228819@qq.com</a></li>
                    </ul>
                </div>
            </el-main>
            </el-container>
        </div>
   </div>
</template>

<style scoped lang="scss">
.el-carousel div{
    width: 100%;
    height:100%;
    background-size: cover;
}

.container{
    position: relative;
}
.center{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    height: 100px;
    line-height: 100px;
    font-size: 60px;
    color:white;
    text-align: center;
}
.common-layout{
     max-width: 1440px;
     background-color: #303133;
     color: #000000;
     margin: 0 auto;
     padding: 30px 0 0;
     display: flex;
     flex-direction: row;
     align-items: flex-start;
}

</style>
