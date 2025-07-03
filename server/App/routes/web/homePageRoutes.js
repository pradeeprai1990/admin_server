let express=require("express");
const { slider, homeProduct } = require("../../controllers/web/homePageController");
let homePageRoute=express.Router();

homePageRoute.get('/slider',slider)
homePageRoute.get('/home-product',homeProduct)
module.exports={homePageRoute}






