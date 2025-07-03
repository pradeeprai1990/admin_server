let express=require("express");
const { register, login, changePassword, getUser, googleLogincreate } = require("../../controllers/web/userAuthController");
const multer = require("multer");
const { checkToken } = require("../../middleware/checkToken");

let userauthRoutes=express.Router();
let uploads=multer()
userauthRoutes.post('/regsiter',uploads.none() ,register)
userauthRoutes.post('/login',uploads.none() ,login)
userauthRoutes.post('/create-user-google-login',googleLogincreate)
userauthRoutes.post('/change-password',checkToken,changePassword)
userauthRoutes.post('/data',checkToken,getUser)

module.exports={userauthRoutes}