import React, { useEffect, useState } from 'react'
import Dropify from '../Common/Dropify'
import axios from 'axios'

export default function AddSubCategory() {
    let pImage=import.meta.env.VITE_PIMAGE
    let [preview,setPreview]=useState(pImage)
    let [parentCatList,setParentCatList]=useState([])
    let apiBaseUrl=import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let getParentcategory=()=>{
        axios.get(`${apiBaseUrl}subcategory/parentcategory`)
        .then((res)=>res.data)
        .then((finalRes)=>{
            setParentCatList(finalRes.data)
        })
    }

  
  let savesubCategory=(e)=>{
    e.preventDefault()
    let formValue= new FormData(e.target)  //Form tag
    axios.post(`${apiBaseUrl}subcategory/insert`,formValue)
    .then((res)=>{
      console.log(res.data)
      e.target.reset()
      setPreview(pImage)
    })
  }


    useEffect(()=>{
        getParentcategory()
    },[])
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addCategory'> 
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div>
                <div>
                    <form onSubmit={savesubCategory} action="" className='p-2'>
                        <div className='grid grid-cols-[35%_auto] gap-5'>
                            <div className='' >
                                <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                <div className='' >
                                    <img src={preview} className='h-52' alt="" />

                                    <input
                                        name="subcategoryImage"
                                        type="file"
                                        onChange={(e) => {
                                            setPreview(URL.createObjectURL(e.target.files[0]))
                                        }}

                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Parent Category Name</label>
                                <br />
                                <select name="parentCategory" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Category</option>
                                    {
                                        parentCatList.map((items,index)=>  <option key={index} value={items._id}> {items.categoryName} </option>)
                                    }
                                  
                                   
                                </select>
                                <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                                <input type="text" placeholder='Enter Category Name' name="subcategoryName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="text" placeholder='Category Order' name="subcategoryOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>

                </div>
            </section>
        </>
    )
}
