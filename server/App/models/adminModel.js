let mongoose=require("mongoose")
let adminSchema= new mongoose.Schema({
    adminName:String,
    adminEmail:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:50,
       
    },
    adminPassword:String,
    adminPhone:String,
    adminImage:String,
    
})

let adminModel=mongoose.model("admin",adminSchema)
module.exports={adminModel}
