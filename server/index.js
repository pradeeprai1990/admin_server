let express=require("express");
let mongoose=require("mongoose")
const { adminRoutes } = require("./App/routes/admin/adminRoutes");
let app=express();
let cors=require("cors");
const { adminModel } = require("./App/models/adminModel");
const { webRoutes } = require("./App/routes/web/webRoutes");
app.use(cors())
app.use(express.json())
require("dotenv").config()

app.use("/admin",adminRoutes) //http://localhost:8000/admin
app.use("/web",webRoutes)  //http://localhost:8000/web
app.use("/uploads/category",express.static("uploads/category"))
app.use("/uploads/product",express.static("uploads/product"))
//Folder Allow Path Frontend  

//Url Change
mongoose.connect(`mongodb://127.0.0.1:27017/ecomfurniture`)
.then(  async (res)=>{

   let checkAdmin = await adminModel.find() //[] ==0

   if(checkAdmin.length==0){ //True
        adminModel.insertOne(
            {
                adminEmail:process.env.ADMINEMAIL,
                adminPassword:process.env.ADMINPASSWORD
            }
        )
   }

    console.log("DB Connect")
    app.listen(process.env.PORT)

})
//http://localhost:8000