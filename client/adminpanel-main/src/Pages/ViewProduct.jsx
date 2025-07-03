import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
export default function ViewProduct() {
    let [viewProduct, setviewProduct] = useState(null)
    let [productDetails, setproductDetails] = useState(false)

    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let [productList, setProductList] = useState([])
    let [imagePath, setImagepath] = useState('')
    let getProduct = () => {
        axios.get(`${apiBaseUrl}product/view/`, {

        })
            .then((res) => res.data)
            .then((finalRes) => {
                setProductList(finalRes.data)
                setImagepath(finalRes.staticPath)

            })
    }

    useEffect(() => {
        getProduct()
    }, [])


    let getsingleProducts = (id) => {
        axios.get(`${apiBaseUrl}product/view/${id}`, {

        })
            .then((res) => res.data)
            .then((finalRes) => {

                if (finalRes.status) {
                    setproductDetails(finalRes.data)
                    setviewProduct(true)
                }



            })
    }


    return (
        <>
            {productDetails &&

                <section className={`w-[1200px] mx-auto bg-white shadow-2xl rounded-xl fixed top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2 z-50 ${viewProduct ? '' : 'hidden'}`}>
                    <div className='w-full flex items-center justify-between p-5 border-b-1 border-gray-400' id='orderHeading'>
                        <h3 className='text-xl font-semibold'>Product Image's & Price</h3>
                        <span className='text-5xl cursor-pointer text-gray-500 hover:text-black rounded-[50%] flex items-center justify-center' onClick={() => setviewProduct(false)}>&times;</span>
                    </div>
                    <div className='w-full my-2 grid grid-cols-[60%_auto] ' >
                        <div className='mb-6'>
                            <h4 className='font-semibold mb-3'>Product Images</h4>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='border rounded-lg p-2'>
                                    <p className='text-sm font-medium mb-2'>Main Image</p>
                                    <img
                                        src={imagePath + productDetails.productImage}
                                        alt="Main Product"
                                        className='w-full h-48 object-cover rounded-md'
                                    />
                                </div>
                                <div className='border rounded-lg p-2'>
                                    <p className='text-sm font-medium mb-2'>Back Image</p>
                                    <img
                                        src={imagePath + productDetails.productBackimage}
                                        alt="Back View"
                                        className='w-full h-48 object-cover rounded-md'
                                    />
                                </div>
                            </div>

                            {/* Gallery Images */}
                            <div className='mt-4'>
                                <p className='text-sm font-medium mb-2'>Gallery Images</p>
                                <div className='grid grid-cols-4 gap-2'>
                                    {productDetails.productGallery.map((imagename) => {
                                        return (
                                            <img
                                            src={imagePath + imagename}
                                                alt="Gallery 1"
                                                className='w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-75'
                                            />
                                        )
                                    })}


                                </div>
                            </div>
                        </div>
                        <div className='shadow-lg border-2 m-5 border-gray-200 rounded-md bg-white mr-3' id='productDetails' >
                            <div className='p-3' id='productDetails'>
                                <h3 className='text-[20px] font-semibold mb-4'>Product Details</h3>

                                {/* Image Gallery Section */}


                                <div className='space-y-3'>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>Category:</span>
                                        <span className='text-gray-700'>
                                            {productDetails.parentCategory.categoryName}
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>SubCategory:</span>
                                        <span className='text-gray-700'>
                                            {productDetails.subCategory.subcategoryName}
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>SubSubCategory:</span>
                                        <span className='text-gray-700'>
                                            {productDetails.subSubCategory.subSubcategoryName}
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>Colors:</span>
                                        <div className='flex gap-2'>
                                            {
                                                productDetails.productColor.map(
                                                    (colorItems, index) => {
                                                        return (
                                                            <span className={`px-2 py-1  text-white rounded-md`} style={{ background: colorItems.colorName }}>
                                                                {colorItems.colorName}
                                                            </span>
                                                        )
                                                    })
                                            }


                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>productMeterial:</span>
                                        <div className='flex gap-2'>
                                            {
                                                productDetails.productMeterial.map(
                                                    (Meterial, index) => {
                                                        return (
                                                            <span className={`px-2 py-1  text-black rounded-md`} >
                                                                {Meterial.materialName}
                                                            </span>
                                                        )
                                                    })
                                            }


                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>Price:</span>
                                        <span className='text-gray-700'>₹ {productDetails.productActualPrice}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='font-semibold w-32'>Sale Price:</span>
                                        <span className='text-gray-700'>₹ {productDetails.productsalePrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            }


            {/* Add overlay when modal is open */}
            {viewProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setviewProduct(false)}
                ></div>
            )}

            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewSubSubCategory'>
                <div className=' bg-slate-100  p-4 form-heading'>

                    <h3 className='text-[26px] font-semibold'>Product Items</h3>


                </div>
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className=' h-[40px] 
                        text-sm text-gray-700 uppercase bg-gray-50 
                        '>
                            <tr className=''>
                                {/* <th className='w-[5%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th> */}

                                <th scope='col' className='w-[8%] font-bold' >Delete</th>
                                <th scope='col' className='w-[8%]' >S. no.</th>
                                <th scope='col' className='w-[15%]' >Product Name</th>

                                <th scope='col' className='w-[18%]' >Short Description</th>
                                <th scope='col' className='w-[15%]'>Thumbnails</th>
                                <th scope='col' className='w-[10%]'>action</th>
                                <th scope='col' className='w-[11%]' >status</th>

                            </tr>
                        </thead>
                        <tbody className='px-6 py-4 text-[16px]  whitespace-nowrap '>

                            {productList.map((items, index) => {
                                return (
                                    <tr key={index} className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                        <td className='w-[3%] py-7'>
                                            <input type="checkbox" className='w-4 h-4' name="" id="" />
                                        </td>
                                        <td > {index + 1} </td>
                                        <td >
                                            {items.productName}
                                        </td>

                                        <td > {items.productDescription} <br />

                                            <span className='text-blue-500 font-semibold' onClick={() => getsingleProducts(items._id)}>Read More</span></td>
                                        <td>
                                            <img src={imagePath + items.productImage} alt="" className='rounded-sm w-16 h-16' /></td>
                                        <td className=''>
                                            <div className='flex items-center gap-2'>
                                                <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                                <FaEdit className='text-md text-yellow-400' />
                                            </div>
                                        </td>
                                        <td>Active</td>
                                    </tr>
                                )
                            })}




                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
