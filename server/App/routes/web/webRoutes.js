let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")
const { homePageRoute } = require("./homePageRoutes")
const { cartRoute } = require("./cartRoutes")
const { orderRoute } = require("./orderRoutes")
let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes)  // http://localhost:8000/web/user
webRoutes.use('/home',homePageRoute)  // http://localhost:8000/web/user
webRoutes.use('/cart',cartRoute)  // http://localhost:8000/web/user
webRoutes.use('/order',orderRoute)  // http://localhost:8000/web/user

module.exports={webRoutes}