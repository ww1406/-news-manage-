<template>
    <div >
        <el-carousel
            height="calc(100vh - 59px)"
            direction="vertical"
            :autoplay="false"
            v-if="looplist.length"
        >
            <el-carousel-item
                v-for="item in looplist"
                :key="item._id"
            >
              <div 
              class="image-container" 
              :style="{backgroundImage:`url(http://localhost:3000${item.cover})`}">
              
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <h2>{{item.title}}</h2>
                  </div>
                </template>
                <div>{{ item.introduction }}</div>
                
                <div  class="detail">{{ item.detail }}</div>
                <div class="more">
                  更多信息，请咨询：
                  <br>
                  http://wzk/8080
                </div>
              </el-card>
            </div>
            </el-carousel-item>
        </el-carousel>
        <el-empty description="暂无产品" v-else/>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref,onMounted } from "vue";

const looplist = ref([])

onMounted(async()=>{
    const res = await axios.get(`/webapi/product/list`)
    //console.log(res);
    looplist.value = res.data.data
})
</script>

<style scoped lang="scss">
.image-container {
  width: 100%; /* 设置容器宽度 */
  height: 100vh; /* 设置容器高度 */
  background-repeat: no-repeat; /* 不重复平铺背景图像 */
  background-size: cover; /* 按比例缩放背景图像以完全覆盖容器 */
  background-position: center center; /* 水平和垂直都居中显示背景图像 */
  /* 其他样式设置... */
}
.box-card{
  width:50%;
  height:100%;
  background-color: rgba(255,255,255,0.7);
}
.detail,.more{
  margin-top: 20%;
}
</style>