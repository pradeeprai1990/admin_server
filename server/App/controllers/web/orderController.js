const orderModel = require("../../models/orderModels")

let saveOrder=async (req,res)=>{
   let {paymentMethod}=req.body
  
   if(paymentMethod==1){ //COD
        let obj={...req.body}
        obj['orderStatus']='process'
        await orderModel.insertOne(obj)
         //Delete Cart Items CartModel
        res.send("Order Save")
       
   }
   else{ //Online
        
   }
}

module.exports={saveOrder}