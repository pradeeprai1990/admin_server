
let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoutes")
const { subcategoryRoutes } = require("./subcategoryRoutes")
const { adminauthRoutes } = require("./adminauthRoute")
const { productRoutes } = require("./productRoutes")
const { subSubcategoryRoutes } = require("./subSubcategoryRoutes")

let adminRoutes=express.Router()
adminRoutes.use("/auth",adminauthRoutes)

adminRoutes.use("/color",colorRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/material",materialRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/category",categoryRoutes) //http://localhost:8000/admin/category/
adminRoutes.use("/subcategory",subcategoryRoutes) //http://localhost:8000/admin/subcategory/parentcategory

adminRoutes.use("/subsubcategory",subSubcategoryRoutes) //http://localhost:8000/admin/subsubcategory/


adminRoutes.use("/product",productRoutes) //http://localhost:8000/admin/product/

module.exports={adminRoutes}
