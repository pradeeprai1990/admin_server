
let express=require("express");
const { materialInsert, materialView,  materialmultiDelete, changeStatus, singlematerialView, updatematerial } = require("../../controllers/admin/materialController");
let materialRoutes=express.Router();


materialRoutes.post("/insert",materialInsert)
http://localhost:8000/admin/material/view
materialRoutes.get("/view",materialView)

materialRoutes.post("/delete",materialmultiDelete)
materialRoutes.post("/change-status",changeStatus)
materialRoutes.put("/update/:id",updatematerial)

materialRoutes.get("/edit-row-data/:id",singlematerialView)

module.exports={materialRoutes}