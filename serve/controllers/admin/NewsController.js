const NewsService = require("../../services/admin/NewsService")

const NewsController = {

    //NEW增删改查

    add:async (req,res)=>{
        // console.log(req.file,req.body)
        const cover = req.file?`/newsuploads/${req.file.filename}`:""
        const {title,content,category,isPublish} = req.body
        //调用 service进行添加
        await NewsService.add({
            title,content,
            category:Number(category),
            isPublish:Number(isPublish),
            cover,
            editTime:new Date()
        })
        res.send({
            ActionType:"OK"
        })
    },
    updataList:async (req,res)=>{
        const cover = req.file?`/newsuploads/${req.file.filename}`:""
        const {title,content,category,isPublish,_id} = req.body
        //调用 service进行添加
        await NewsService.updataList({
            _id,
            title,content,
            category:Number(category),
            isPublish:Number(isPublish),
            cover,
            editTime:new Date()
        })
        res.send({
            ActionType:"OK"
        })
    },
    getList:async (req,res)=>{
        const result = await NewsService.getList({_id:req.params.id})
        res.send({
            ActionType:"OK",
            data:result
        })
    },
    publish:async (req,res)=>{
        await NewsService.publish({
            ...req.body,
            editTime:new Date()
        })
        res.send({
            ActionType:"OK",
        })
    },
    delList:async (req,res)=>{
        await NewsService.delList({_id:req.params.id})
        res.send({
            ActionType:"OK",
        })
    }
}

module.exports = NewsController