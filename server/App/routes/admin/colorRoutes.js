
let express=require("express");
const { colorInsert, colorView, colorDelete, colormultiDelete, updateColor, singleColorView } = require("../../controllers/admin/colorController");
let colorRoutes=express.Router();


colorRoutes.post("/insert",colorInsert)
http://localhost:8000/admin/color/view
colorRoutes.get("/view",colorView)
colorRoutes.get("/view/:id",singleColorView)
colorRoutes.delete("/delete/:id",colorDelete)
colorRoutes.post("/multi-delete",colormultiDelete)
colorRoutes.put("/update/:id",updateColor)



module.exports={colorRoutes}