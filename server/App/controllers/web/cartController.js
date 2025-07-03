const { cartModel } = require("../../models/cartModel")

let addToCart=async (req,res)=>{
    let {color,id,image,price,qty,title,userId}=req.body

    let checkProductinCart=await cartModel.findOne({productId:id,color,userId})
    let resobj
    if(checkProductinCart){
        resobj={
            status:0,
            msg:"Item Already in Cart"
        }
        res.send(resobj)
    }
    else{
        let obj={
            color,
            productId:id,
            image,
            price,
            qty,
            title,
            userId
        }
        let cart=await cartModel.insertOne(obj)
    
         resobj={
            status:1,
            msg:"Item add in Cart",
            cart
        }
        res.send(resobj)
       
    }
   

}   


let viewCart=async (req,res)=>{
    let {userId}=req.body
    let cartData=await cartModel.find({userId}).populate("color","colorName")
    let obj={
        status:1,
        cartData,
        staticPath:process.env.PRODUCTIMAGEPATH,
    }

    res.send(obj)

}

let deleteCart=async (req,res)=>{
    let cartid=req.params.cartid
    let cart=await cartModel.deleteOne({_id:cartid})
    let obj={
        status:1,
        msg:"Cart Item Deleted",
        cart
    }

    res.send(obj)

}


module.exports={addToCart,viewCart,deleteCart}