<template>
    <div>
        <el-page-header 
        @back="handleBack()" 
        title="新闻管理">
        
            <template #content>
            <span class="text-large font-600 mr-3"> 编辑新闻 </span>
            </template>
        </el-page-header>

        <el-form
            ref="newsFormRef"
            :model="newsForm"
            :rules="newsFormRules"
            label-width="80px"
            class="demo-ruleForm"
        >
        <el-form-item
                label="标题"
                prop="title"
            >
                <el-input v-model="newsForm.title" />
            </el-form-item>
            <el-form-item
                label="内容"
                prop="content"
            >
                <editor 
                @event="handleChange"
                :content="newsForm.content"
                v-if="newsForm.content"/>
            </el-form-item>
            
            <el-form-item
                label="类别"
                prop="category"
            >
                <el-select
                    v-model="newsForm.category"
                    class="m-2"
                    placeholder="Select"
                    style="width:100%"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            
            <el-form-item
                label="封面"
                prop="cover"
            >
            <Upload
                    :avatar="newsForm.cover"
                    @wzkchange="handleUploadChange"
                />
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="submitForm()"
                >更新新闻</el-button>
            </el-form-item>

            </el-form>
    </div>   
</template>     
<script setup>
//defineProps 用来接受内容数据
import { ref, reactive,onMounted } from "vue";
import editor from "@/components/editor/Editor";
import Upload from "@/components/upload/Upload";
import upload from '@/util/upload'
import {useRouter,useRoute} from 'vue-router'
import axios from "axios";
const router = useRouter()//整个路由对象
const route  = useRoute()//当前路由对象

//访问表单 引用对象
const newsFormRef = ref();
//表单元素 表单
const newsForm = reactive({
    title:"",
    content:"",
    category:1,  // 1-最新动态 2-典型案例 3-通知公告
    cover:"",
    file:null,  //提供二进制file对象到后端
    isPublish:0 // 0未发布 1已发布
});
//表单规则  -对每个元素进行校验
const newsFormRules = reactive({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }],
  category: [{ required: true, message: "请选择分类", trigger: "blur" }],
  cover: [{ required: true, message: "请上传图片", trigger: "blur" }]
});

//每次editor内容改变的回调
const handleChange = data => {
  // console.log(data)
  newsForm.content = data;
};
//新闻类别
const options = [
  {
    label: "最新动态",
    value: 1
  },
  {
    label: "典型案例",
    value: 2
  },
  {
    label: "通知公告",
    value: 3
  }
];

const handleUploadChange = (file)=>{
    newsForm.cover = URL.createObjectURL(file);
    newsForm.file = file
}

const submitForm = ()=>{
    newsFormRef.value.validate(async (valid)=>{
        if(valid){
            // console.log(newsForm)
            //后台通信,
            // await upload("/adminapi/news/add",newsForm)
            // router.push(`/news-manage/newslist`)
            //文件上传用upload来传入newsfrom
            await upload("/adminapi/news/list",newsForm)
            router.back()
        }
    })
}

const handleBack= ()=>{
    router.back()
}
onMounted(async()=>{
    //console.log(route.params.id)

    const res = await axios.get(`/adminapi/news/list/${route.params.id}`)

    console.log(res.data.data[0])

    Object.assign(newsForm,res.data.data[0])
})

</script>
<style lang="scss" scoped>
.el-form {
  margin-top: 50px;
}
</style>