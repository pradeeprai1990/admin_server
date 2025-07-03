let express=require("express");
const { checkToken } = require("../../middleware/checkToken");
const { addToCart, viewCart, deleteCart } = require("../../controllers/web/cartController");
let cartRoute=express.Router();

cartRoute.post('/add-to-cart',checkToken,addToCart)
cartRoute.post('/view-cart',checkToken,viewCart)
cartRoute.delete('/delete-cart/:cartid',deleteCart)


module.exports={cartRoute}