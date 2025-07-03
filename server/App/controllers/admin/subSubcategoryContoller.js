const { categoryModel } = require("../../models/categoryModel")
const { subcategoryModel } = require("../../models/subCategoryModel")
const { subSubcategoryModel } = require("../../models/subSubCategoryModel")

let subSubcategoryInsert=async (req,res)=>{
    let obj={...req.body}
    // let {categoryName,categoryOrder}=req.body //MEN
    // let obj={
    //     categoryName,
    //     categoryOrder,
    //     // slug:slugify(categoryName, { lower: true }) //men
    // }

    if(req.file){
        if(req.file.filename){
            obj['subSubcategoryImage']=req.file.filename
        }
    }
   
    try{
       
        let categoryRes=await subSubcategoryModel.insertOne(obj)
        obj={
            status:1,
            mgs:"sub Subcategory Save",
            categoryRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"sub Subcategory category name already exist...",
            error
        }
        res.send(obj)
    }

  
}


let parentCategory=async (req,res)=>{
    let data=await categoryModel.find().select("categoryName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}

let subCategory=async (req,res)=>{
    let {parentid}=req.params; ///68374556e568bbcaa6ba031b
    let data=await subcategoryModel.find( {parentCategory:parentid} ).select("subcategoryName")
    let obj={
        status:1,
        data
       
        
    }
    res.send(obj)
}

module.exports={parentCategory,subSubcategoryInsert,subCategory}