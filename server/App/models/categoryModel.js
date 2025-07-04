let mongoose=require("mongoose");
const { default: slugify } = require("slugify");

let categorySchema= new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
    categoryImage:String,
    categoryOrder:Number,
    categoryStatus:Boolean,
    slug:String
})
//Code 

categorySchema.pre('save', function (next) {
    this.slug = slugify(this.categoryName, { lower: true });
    next();
});
  


// Virtual field to get all subcategories
categorySchema.virtual('subcategories', {
    ref: 'subcategory',
    localField: '_id',
    foreignField: 'parentCategory'
});


categorySchema.set('toJSON', { virtuals: true });

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}
