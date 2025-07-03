const bcrypt = require('bcrypt');
const { userModel } = require('../../models/userModels');
let jwt = require('jsonwebtoken');
const saltRounds = 10;
let register=async (req,res)=>{
    let {email,name,phone,password}=req.body;

    const hashPassword = bcrypt.hashSync(password, saltRounds);
    console.log(hashPassword)
    let resObj
    try{
        let insertObj={
            userName:name,
            userEmail:email,
            userPassword:hashPassword,
            userPhone:phone
        }
        let user=await userModel.insertOne(insertObj)
        resObj={
            status:1,
            msg:"user created",
            user
        }
    }
    catch(error){
        resObj={
            status:0,
            msg:"Email Id Already Exists..."
        }
    }
   

    res.send(resObj)
   
}


let login=async (req,res)=>{
    let {email,password}=req.body;
    let myRes
    //Check Email
    let checkEmail=await userModel.findOne({userEmail:email})
    if(checkEmail){
        let dbPassword=checkEmail.userPassword

        if(bcrypt.compareSync(password, dbPassword)){

            let user={
                userName:checkEmail.userName,
                id:checkEmail._id
            }
            let token = jwt.sign(user,process.env.TOKENKEY);
            myRes={
                status:1,
                msg:"Login Success",
                user,
                token
            }
        } 
        else{
            myRes={
                status:0,
                msg:"Invalid Password"
            }
        }
       
    }
    else{
        myRes={
            status:0,
            msg:"InValid Email Id"
        }
    }
    res.send(myRes)
}

let changePassword=async (req,res)=>{
    //pradeep@123!!!
    let resObj;
    let {oldPassword,newPassword,confirmPassword,userId}=req.body
    let userData=await userModel.findOne({_id:userId})//Data
    let dbPassword=userData.userPassword //DB password
    if(bcrypt.compareSync(oldPassword, dbPassword)){
       
        if(newPassword==confirmPassword){
             //Change Password
             const hashPassword = bcrypt.hashSync(newPassword, saltRounds);
             await userModel.updateOne({_id:userId},{$set:{
                userPassword:hashPassword
             }})
             resObj={
                status:1,
                msg:"Password Changed"
    
            } 
        }
        else{
            resObj={
                status:0,
                msg:"New Password or Confirm  Password Not Matched"
    
            } 
        }

    }
    else{
        resObj={
            status:0,
            msg:"Invalid Old Password"

        }
    }

 
    res.send(resObj)
}

let getUser=async (req,res)=>{
    let {userId}=req.body
    let userData=await userModel.findOne({_id:userId})//Data
    resObj={
        status:1,
        userData
    }
    res.send(resObj)
}

let googleLogincreate=async (req,res)=>{
    let {displayName,email,phoneNumber}=req.body

    let checkEmail=await userModel.findOne({userEmail:email})
    let myRes;
    if(checkEmail){
        let user={
            userName:checkEmail.userName,
            id:checkEmail._id
        }
        let token = jwt.sign(user,process.env.TOKENKEY);
        myRes={
            status:1,
            msg:"Login Success",
            user,
            token
        }
    }
    else{
        let insertObj={
            userName:displayName,
            userEmail:email,
            userPhone:phoneNumber
        }
        let myUser=await userModel.insertOne(insertObj) //Data
        let user={
            userName:myUser.userName,
            id:myUser._id
        }
        let token = jwt.sign(user,process.env.TOKENKEY);
        myRes={
            status:1,
            msg:"Login Success",
            user,
            token
        }
    }


    res.send(myRes)
}
module.exports={register,login,changePassword,getUser,googleLogincreate}