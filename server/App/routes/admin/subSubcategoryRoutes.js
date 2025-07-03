let express=require("express");
const { subSubcategoryInsert, parentCategory, subCategory } = require("../../controllers/admin/subSubcategoryContoller");
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/category' })
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"uploads/subsubcategory")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`) //6515655515pradeep.jpg
                                                    ////6515655519pradeep.jpg
    }
})
const upload = multer({ storage: storage })

let subSubcategoryRoutes=express.Router();

subSubcategoryRoutes.get('/parent-category',parentCategory)
subSubcategoryRoutes.get('/sub-category/:parentid',subCategory)

subSubcategoryRoutes.post('/insert',upload.single('subSubcategoryImage'),subSubcategoryInsert)


module.exports={subSubcategoryRoutes}
