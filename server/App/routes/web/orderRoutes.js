let express=require("express");
const { checkToken } = require("../../middleware/checkToken");
const { saveOrder } = require("../../controllers/web/orderController");
let orderRoute=express.Router();

orderRoute.post("/order-save",checkToken,saveOrder)


module.exports={orderRoute}
