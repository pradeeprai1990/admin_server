const { colorModel } = require("../../models/colorModel")

let colorInsert=async (req,res)=>{

    let {colorName,colorCode,colorStatus,colorOrder}=req.body
    let obj
    try{
        let inserObj={
            colorName,
            colorCode,
            colorStatus,
            colorOrder
        }
        let colorRes=await colorModel.insertOne(inserObj)
        obj={
            status:1,
            mgs:"Color Save",
            colorRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            error
        }
        res.send(obj)
    }
  
    
   
}

let colorView=async (req,res)=>{
    let data=await colorModel.find()
    let obj={
        status:1,
        mgs:"Color View",
        data
    }
    res.send(obj)
}
let colorDelete=async (req,res)=>{
    let {id}=req.params;
    let delRes=await colorModel.deleteOne({_id:id})
    let obj={
        status:1,
        mgs:"Color Delete",
        delRes
    }
    res.send(obj)
}

let colormultiDelete=async (req,res)=>{
    let {ids}=req.body;

    let delRes=await colorModel.deleteMany({_id:ids})
    let obj={
        status:1,
        mgs:"Color Multi Delete",
        delRes
       
    }
    res.send(obj)

}

let updateColor=async (req,res)=>{
    let {id}=req.params;
    let {colorName,colorCode,colorStatus,colorOrder}=req.body

    let updObj={
        colorName,
        colorCode,
        colorStatus,
        colorOrder
    }

    let updRes=await colorModel.updateOne({_id:id},{$set:updObj})

    let obj={
        status:1,
        mgs:"Color Updated",
        updRes
       
    }
    res.send(obj)

}

let singleColorView=async (req,res)=>{
    let {id}=req.params
    let data=await colorModel.findOne({_id:id})
    let obj={
        status:1,
        mgs:"Color View",
        data
    }
    res.send(obj)
}

module.exports={colorInsert,colorView,colorDelete,colormultiDelete,updateColor,singleColorView}