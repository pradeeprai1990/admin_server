let express=require("express");
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/category' })
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"uploads/category")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`) //6515655515pradeep.jpg
                                                    ////6515655519pradeep.jpg
    }
})
const upload = multer({ storage: storage })




const { categoryInsert, categoryView } = require("../../controllers/admin/categoryContoller");
let categoryRoutes=express.Router();


categoryRoutes.post('/insert', upload.single('categoryImage'),  categoryInsert)
categoryRoutes.get('/view',   categoryView  )

module.exports={categoryRoutes}