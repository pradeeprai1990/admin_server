import React, { useEffect, useState } from 'react'
import Dropify from '../Common/Dropify'
import axios from 'axios'

export default function Addcategory() {
  let pImage=import.meta.env.VITE_PIMAGE
  let [preview,setPreview]=useState(pImage)

  let apiBaseUrl=import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
  let saveCategory=(e)=>{
    e.preventDefault()
    let formValue= new FormData(e.target)  //Form tag
    axios.post(`${apiBaseUrl}category/insert`,formValue)
    .then((res)=>{
      console.log(res.data)
      e.target.reset()
      setPreview(pImage)
    })
  }

  return (
    <>
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addCategory'>

        <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
          <h3 className='text-[26px] font-semibold'>Add Category</h3>
        </div>
        <div>
          <form onSubmit={saveCategory} action="" className='p-2'>
            <div className='grid grid-cols-[32%_auto] gap-5'>
              <div className='' >
                  <img src={preview} className='h-52' alt="" />

                  <input
                    name="categoryImage"
                    type="file"
                    onChange={(e)=>{
                      setPreview(URL.createObjectURL(e.target.files[0]))
                    }}
                    
                />
              </div>
              <div>
                <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                <input  name="categoryName" type="text" placeholder='Enter Category Name'  id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                <input name="categoryOrder"  type="number" placeholder='Order' id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
              </div>
            </div>


            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
          </form>

        </div>
      </section>
    </>
  )
}
