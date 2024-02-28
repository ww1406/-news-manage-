const ProductService = require("../../services/web/ProductService")

const ProductController = {

    //NEW增删改查
        getList:async (req,res)=>{
                const result = await ProductService.getList({_id:req.params.id})
                res.send({
                    ActionType:"OK",
                    data:result
                })
            },
            // getTopList:async (req,res)=>{
            //     const result =await NewsService.getTopList({limit:req.query.limit})
            //     res.send({
            //         ActionType:"OK",
            //         data:result
            //     })
            // },
}

module.exports = ProductController