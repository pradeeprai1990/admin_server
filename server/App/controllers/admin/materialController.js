const { materialModel } = require("../../models/materialModel")

let materialInsert=async (req,res)=>{

    let {materialName,materialOrder}=req.body
    let obj
    try{
        let inserObj={
            materialName,
            materialStatus:true,
            materialOrder
        }
        let materialRes=await materialModel.insertOne(inserObj)
        obj={
            status:1,
            mgs:"material Save",
            materialRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"Material name already exist...",
            error
        }
        res.send(obj)
    }
  
    
   
}

let materialView=async (req,res)=>{

    

    let searchObj={
       
    }
    
  
    let  {currentPage,limit}=req.query  //3

    if(req.query.materialName!=""){
        // searchObj['materialName']=    { $regex:req.query.materialName , $options: "i" }
       searchObj['materialName']=   new RegExp(req.query.materialName,"i")
        
    }
                
                //  3-1 = 2*4   =8 
    let finalSkip=(currentPage-1)*limit  // 0

    
                                                   //4     
    let data=await materialModel.find(searchObj).skip(finalSkip).limit(limit) //4


    let AllNumberRec=await materialModel.find(searchObj)

    let obj={
        status:1,
        AllNumberRec:AllNumberRec.length,
        pages:Math.ceil(AllNumberRec.length/limit),
        mgs:"material View",
        data,
       
      
    }
    res.send(obj)
}
// let materialDelete=async (req,res)=>{
//     let {id}=req.params;
//     let delRes=await materialModel.deleteOne({_id:id})
//     let obj={
//         status:1,
//         mgs:"material Delete",
//         delRes
//     }
//     res.send(obj)
// }

let materialmultiDelete=async (req,res)=>{
    let {ids}=req.body;

    let delRes=await materialModel.deleteMany({_id:ids})
    let obj={
        status:1,
        mgs:"material Multi Delete",
        delRes
       
    }
    res.send(obj)

}

let updatematerial=async (req,res)=>{
    let {id}=req.params;
    let {materialName,materialOrder}=req.body

    let updObj={
        materialName,
        materialOrder
    }

    let updRes=await materialModel.updateOne({_id:id},{$set:updObj})

    let obj={
        status:1,
        mgs:"material Updated",
        updRes
       
    }
    res.send(obj)

}


let changeStatus=async (req,res)=>{
    let {ids}=req.body;
    
    let updateRes=await materialModel.updateMany(
        {_id:ids},
        [
            {
                $set: {
                    materialStatus: { $not: "$materialStatus" }
                }
            }
        ]
    )
    // let allmateria=await materialModel.find({_id:ids}).select('materialStatus')

    // for(let items of allmateria){
    //     await materialModel.updateOne({_id:items._id},{$set:{ materialStatus:!items.materialStatus }})
    // }

    // console.log(allmateria)
    let obj={
        status:1,
        mgs:"Status Change",
        updateRes
       
    }
    res.send(obj)


}

let singlematerialView=async (req,res)=>{
    let {id}=req.params
    let data=await materialModel.findOne({_id:id})
    let obj={
        status:1,
        mgs:"material View",
        data
    }
    res.send(obj)
}

module.exports={materialInsert,materialView,materialmultiDelete,updatematerial,singlematerialView,changeStatus}