const { categoryModel } = require("../../models/categoryModel")
const { productModel } = require("../../models/productModel")

let slider = () => {


}

let megaMenu = async (req, res) => {
    let categoryData = await categoryModel.find().select(['categoryName','slug'])
        .populate({
            path: 'subcategories',
            select:["subcategoryName"],
            populate: { path: 'subsubcategories' , select:["subSubcategoryName","slug"] }
        });
    let resObj = {
        status: 1,
        categoryData
    }

    res.send(resObj)
}
let homeProduct = async (req, res) => {
    let productType = req.query.productType ?? 1
    let data = await productModel.find({ productType: productType })
        .populate('parentCategory', 'categoryName')
        .populate('subCategory', 'subcategoryName')
        .populate('subSubCategory', 'subSubcategoryName')
        .populate('productColor', 'colorName')
        .populate('productMeterial', 'materialName')
    let obj = {
        status: 1,
        staticPath: process.env.PRODUCTIMAGEPATH,
        data

    }
    res.send(obj)
}

module.exports = { slider, homeProduct, megaMenu }