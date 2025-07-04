let express=require("express");
const { slider, homeProduct, megaMenu } = require("../../controllers/web/homePageController");
let homePageRoute=express.Router();

homePageRoute.get('/slider',slider)
homePageRoute.get('/home-product',homeProduct)
homePageRoute.get('/mega-menu',megaMenu)
module.exports={homePageRoute}






