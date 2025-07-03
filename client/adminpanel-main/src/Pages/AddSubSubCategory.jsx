import React, { useEffect, useState } from 'react'
import Dropify from '../Common/Dropify'
import axios from 'axios'

export default function AddSubSubCategory() {
    let pImage=import.meta.env.VITE_PIMAGE
    let [parentCatList, setParentCatList] = useState([])
    let [subCatList, setSubCatList] = useState([])
    let [preview, setPreview] = useState(pImage)


    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let getParentcategory = () => {
        axios.get(`${apiBaseUrl}subsubcategory/parent-category`)
            .then((res) => res.data)
            .then((finalRes) => {
                setParentCatList(finalRes.data)
            })
    }

    let getSubcategory = (id) => {
        axios.get(`${apiBaseUrl}subsubcategory/sub-category/${id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                setSubCatList(finalRes.data)
            })
    }

    let saveCategory=(e)=>{
        e.preventDefault()
        let formValue= new FormData(e.target)  //Form tag
        axios.post(`${apiBaseUrl}subsubcategory/insert`,formValue)
        .then((res)=>{
          console.log(res.data)
          e.target.reset()
          setPreview(pImage)
        })
      }

    useEffect(() => {
        getParentcategory()
    }, [])



    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addsubsubCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div>
                <div>
                    <form action="" className='p-2' onSubmit={saveCategory}>
                        <div className='grid grid-cols-[35%_auto] gap-5'>
                            <div className='' >
                                <img src={preview} className='h-52' alt="" />

                                <input
                                    name="subSubcategoryImage"
                                    type="file"
                                    onChange={(e) => {
                                        setPreview(URL.createObjectURL(e.target.files[0]))
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Parent Category Name</label>
                                <br />
                                <select onChange={(e) => getSubcategory(e.target.value)} name="parentCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>

                                    <option value="">Select Category</option>
                                    {
                                        parentCatList.map((items, index) => <option key={index} value={items._id}> {items.categoryName} </option>)
                                    }

                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Sub Category Name</label>
                                <br />
                                <select name="subCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Sub Category</option>
                                    {
                                        subCatList.map((items, index) => <option key={index} value={items._id}> {items.subcategoryName} </option>)
                                    }
                                </select>
                                <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                                <input type="text" placeholder='Enter Category Name' name="subSubcategoryName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="number" placeholder='Category Order' name="subSubcategoryOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>

                </div>
            </section>
        </>
    )
}
