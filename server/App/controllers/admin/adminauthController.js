const { transporter } = require("../../config/mailConfig");
const { adminModel } = require("../../models/adminModel")
let myOTP=new Map() //OTP Store Backend

let adminLogin=async (req,res)=>{
    console.log(req.body)
    let checkAdmin= await adminModel.findOne(req.body)
    let resObj;
    if(checkAdmin)  {
        resObj={
            status:1,
            adminID:checkAdmin._id,
            msg:"Login Success"
        }
    }
    else{
        resObj={
            status:0,
            msg:"InValid UserName or Password!..."
        }
    }
    res.send(resObj)
}



let forgotSendOTP=async (req,res)=>{
    let {email}=req.body
    console.log(email)
    let admin=await adminModel.findOne({adminEmail:email})
    if(admin){
       
        let otp=Math.floor(Math.random()*99999999).toString().slice(0,6)

        myOTP.set("MYOTP",otp) //Backend OTP Store
        const info = await transporter.sendMail({
            from: '"Ecom | Forgot Password OTP" <pradeep.9997@gmail.com>',
            to:email ,
            subject: "OTP Mail | Forgot Password",
            text: "OTP Mail", // plain‑text body
            html: `<b>OTP ${otp}</b>`, // HTML body
          });
        
          res.send({status:1,msg:"OTP SEND"})
    }
    else{
        res.send({status:0,msg:"Invalid Email Id"})
    }

  
}

let verifyOTP=(req,res)=>{
    let {otp}=req.body;
    let backendOTP= myOTP.get("MYOTP") 
    if(backendOTP==otp){
        res.send({status:1,msg:"OTP verified successfully. You can now reset your password."})
    }
    else{
        res.send({status:0,msg:"Invalaid OTP"})   
    }
}
let resetPassword=async (req,res)=>{
    let {email,newPassword}=req.body

    let updateRes=await adminModel.updateOne({adminEmail:email},{$set:{
        adminPassword:newPassword
    }})

    res.send({status:1,msg:"reset your password successfully."})

}


let changePassword=async (req,res)=>{
    let {currentPassword,newPassword,adminID}=req.body;
    let admin=await adminModel.findOne({adminPassword:currentPassword,_id:adminID})
    if(admin){

        if(currentPassword!=newPassword){
            let updateRes=await adminModel.updateOne({_id:adminID},{$set:{
                adminPassword:newPassword
            }})
            res.send({status:1,msg:"Password change successfully."})
        }
        else{
            res.send({status:0,msg:"Old Password or New  password Change."})   
        }
     
    }
    else{
        res.send({status:0,msg:"Invalid Old Password"})
    }
}
module.exports={adminLogin,forgotSendOTP,verifyOTP,resetPassword,changePassword}