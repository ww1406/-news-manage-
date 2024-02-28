import { reactive } from "vue";

//表单元素 表单
export const userForm = reactive({
username: "",
password: "",
role: 2, //1 是管理员 ,2编辑
introduction: "",
avatar: "",
file: null,
gender: 0 //保密
});
