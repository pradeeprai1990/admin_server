import React, { useEffect, useRef, useState } from 'react'
import Dropify from '../Common/Dropify'
import { RichTextarea } from "rich-textarea";


import axios from 'axios';
export default function AddProduct() {
    let pImage = import.meta.env.VITE_PIMAGE
    let [preview, setPreview] = useState(pImage)
    let [preview2, set2Preview] = useState(pImage)
    let [preview3, set3Preview] = useState([])

    let [parentCatList, setParentCatList] = useState([])
    let [subCatList, setSubCatList] = useState([])
    let [subSubCatList, setSubSubCatList] = useState([])
    let [colorList, setColorList] = useState([])
    let [meterialList, setMeterialList] = useState([])
    const editorRef = useRef(null);
   

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let getParentcategory = () => {
        axios.get(`${apiBaseUrl}product/parent-category`)
            .then((res) => res.data)
            .then((finalRes) => {
                setParentCatList(finalRes.data)
            })
    }

    let getSubcategory = (id) => {
        axios.get(`${apiBaseUrl}product/sub-category/${id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                setSubCatList(finalRes.data)
            })
    }

    let getsubSubcategory = (id) => {
        axios.get(`${apiBaseUrl}product/sub-sub-category/${id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                setSubSubCatList(finalRes.data)
            })
    }


    let getColor = () => {
        axios.get(`${apiBaseUrl}product/product-color`)
            .then((res) => res.data)
            .then((finalRes) => {
                setColorList(finalRes.data)
            })
    }

    let getMeterial = () => {
        axios.get(`${apiBaseUrl}product/product-meterial`)
            .then((res) => res.data)
            .then((finalRes) => {
                setMeterialList(finalRes.data)
            })
    }







   


    useEffect(() => {

        getParentcategory()
        getColor()
        getMeterial()

        
    
    }, []);

   
  let productSave=(e)=>{
  
    e.preventDefault()
    let formValue= new FormData(e.target)  //Form tag
    axios.post(`${apiBaseUrl}product/insert`,formValue)
    .then((res)=>{
      console.log(res.data)
     
      setPreview(pImage)
    })
  }
  


    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>
                {/* <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div> */}
                <div>
                    <form action="" className='p-2' onSubmit={productSave}>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Product Image</label>

                                    <img src={preview} className='h-52' alt="" />

                                    <input
                                        name="productImage"
                                        type="file"
                                        onChange={(e) => {
                                            setPreview(URL.createObjectURL(e.target.files[0]))
                                        }}
                                    />

                                </div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Back Image</label>

                                    <img src={preview2} className='h-52' alt="" />

                                    <input
                                        name="productBackimage"
                                        type="file"
                                        onChange={(e) => {
                                            set2Preview(URL.createObjectURL(e.target.files[0]))
                                        }}
                                    />

                                </div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Gallery Image</label>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        {

                                            preview3.map((img, index) => (
                                                <div key={index} className="relative">
                                                    <img src={img} className='h-32 w-full object-cover' alt={`Gallery ${index + 1}`} />

                                                </div>
                                            ))

                                        }
                                    </div>

                                    <input
                                        name="productGallery"
                                        type="file"
                                        multiple
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            const newPreviews = files.map(file => URL.createObjectURL(file));
                                            set3Preview([...preview3, ...newPreviews]);
                                        }}
                                    />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
                                <input type="text" placeholder='Product Name' name="productName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
                                <br />
                                <select onChange={(e) => getsubSubcategory(e.target.value)} name="subCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Sub Category</option>
                                    {
                                        subCatList.map((items, index) => <option key={index} value={items._id}> {items.subcategoryName} </option>)
                                    }
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
                                <br />
                                <select multiple name="productMeterial[]" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300  p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    {
                                        meterialList.map((items, index) => <option key={index} value={items._id}> {items.materialName} </option>)
                                    }
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
                                <br />
                                <select name="productType" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="1">Featured</option>
                                    <option value="2">New Arrival</option>
                                    <option value="3">OnSale</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
                                <br />
                                <select name="productTopRated" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>


                                <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
                                <input type="number" placeholder='Actual Price' name="productActualPrice" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
                                <input type="number" placeholder='Total In Stocks' name="productStocks" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>


                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
                                <br />
                                <select onChange={(e) => getSubcategory(e.target.value)} name="parentCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>

                                    <option value="">Select Category</option>
                                    {
                                        parentCatList.map((items, index) => <option key={index} value={items._id}> {items.categoryName} </option>)
                                    }

                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                                <br />
                                <select name="subSubCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                     <option value="">Select Sub Sub Category</option>
                                    {
                                        subSubCatList.map((items, index) => <option key={index} value={items._id}> {items.subSubcategoryName} </option>)
                                    }
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
                                <br />
                                <select multiple name="productColor[]" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300  p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    {
                                        colorList.map((items, index) => <option key={index} value={items._id}> {items.colorName} </option>)
                                    }
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
                                <br />
                                <select name="productbestSelling" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
                                <br />
                                <select name="productUpsell" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
                                <input type="number" placeholder='Sale Price' name="productsalePrice" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="number" placeholder='Order' name="productOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>

                        <div className='my-5'>
                            <label htmlFor="" className='text-[16px] font-semibold'>Description</label>
                                    

                            <textarea name="productDescription" className='w-[100%] h-[250px] border-2' id=""></textarea>
                        </div>
                        <button className=' mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer'> Create Product </button>
                    </form>

                </div>
            </section>
        </>
    )
}
