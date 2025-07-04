let express=require("express");
const { checkToken } = require("../../middleware/checkToken");
const { saveOrder, verifyOrder, viewOrder } = require("../../controllers/web/orderController");
let orderRoute=express.Router();

orderRoute.post("/order-save",checkToken,saveOrder)
orderRoute.post("/verify-order",checkToken,verifyOrder)
orderRoute.post("/view-order",checkToken,viewOrder)


module.exports={orderRoute}
