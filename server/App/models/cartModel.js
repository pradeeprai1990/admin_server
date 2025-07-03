let mongoose=require("mongoose")
let cartSchema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
    productId:{type: mongoose.Types.ObjectId, ref: "product"},
    image:String,
    price:Number,
    qty:Number,
    color:{type: mongoose.Types.ObjectId, ref: "color"},
    userId:{type: mongoose.Types.ObjectId, ref: "user"}
})

let cartModel=mongoose.model("cart",cartSchema)
module.exports={cartModel}