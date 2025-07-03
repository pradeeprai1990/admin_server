const { default: slugify } = require("slugify")
const { categoryModel } = require("../../models/categoryModel")

let categoryInsert=async (req,res)=>{

    let {categoryName,categoryOrder}=req.body //MEN
    let obj={
        categoryName,
        categoryOrder,
        // slug:slugify(categoryName, { lower: true }) //men
    }

    if(req.file){
        if(req.file.filename){
            obj['categoryImage']=req.file.filename
        }
    }
    try{
       
        let categoryRes=await categoryModel.insertOne(obj)
        obj={
            status:1,
            mgs:"category Save",
            categoryRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"category name already exist...",
            error
        }
        res.send(obj)
    }

  
}


let categoryView=async (req,res)=>{

    let data=await categoryModel.find()
    let obj={
        status:1,
        mgs:"material View",
        staticPath:process.env.CATEGORYIMAGEPATH,
        data
        
    }
    res.send(obj)
}

module.exports={categoryInsert,categoryView}