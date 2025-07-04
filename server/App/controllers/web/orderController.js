const orderModel = require("../../models/orderModels")
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { cartModel } = require("../../models/cartModel");
var instance = new Razorpay({
   key_id: 'rzp_test_WAft3lA6ly3OBc',
   key_secret: '68E17CNWY8SemCvZ6ylOkuOY',
 });

let saveOrder=async (req,res)=>{
   let {paymentMethod}=req.body
   let obj={...req.body}
   if(paymentMethod==1){ //COD
        
        obj['orderStatus']='process'
        await orderModel.insertOne(obj)
         //Delete Cart Items CartModel
         await cartModel.deleteMany({userId:obj.userId})
        res.send({status:1,msg:"Order Save",paymentMethod})
       
   }
   else{ //Online
      //DB Order Create
      obj['orderStatus']='pending' 
      obj['paymentStatus']='1'
      let orderData=await orderModel.insertOne(obj)
      //RazorPay
      //Amount 500*100,
      //"currency": "INR",
      //"receipt": orderData._id,

      let orderObj={
         "amount": req.body.orderAmount*100,
         "currency": "INR",
         "receipt": orderData._id
      }

      let ordersRes=await instance.orders.create(orderObj)

      await orderModel.updateOne({_id:orderData._id},{$set:{
         razorpayOrderId:ordersRes.id
      }})

     
      res.send({status:1,msg:"Order Save",paymentMethod,ordersRes})

   }  
}

let verifyOrder=async (req,res)=>{
   let {razorpay_order_id,razorpay_payment_id,razorpay_signature,userId}=req.body
   
   const hmac = crypto.createHmac('sha256', "68E17CNWY8SemCvZ6ylOkuOY"); //
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');


    if (generated_signature == razorpay_signature) {
         await orderModel.updateOne({razorpayOrderId:razorpay_order_id},{
            $set:{
               paymentStatus:"2",
               orderStatus:"2",
               razorpayPayment:razorpay_payment_id 
            }
         })
         await cartModel.deleteMany({userId:userId})
         res.send({status:1,msg:"Order Save"})
     }
     else{

     }
}



let viewOrder=async (req,res)=>{
   let {userId}=req.body
   let orders=await orderModel.find({userId:userId})
   let resObj={
      status:1,
      data:orders,
      staticPath:process.env.PRODUCTIMAGEPATH,
   }
   res.send(resObj)
}
module.exports={saveOrder,verifyOrder,viewOrder}