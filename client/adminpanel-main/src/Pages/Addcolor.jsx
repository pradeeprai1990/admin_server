import React, { useState } from 'react'

import { SketchPicker } from 'react-color';
export default function Addcolor() {

  const [color, setColor] = useState('#ffffff');

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
  };


  
  return (
    <>
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addColor'>
        <div className=' bg-slate-100 flex p-2 justify-between items-center form-heading'>
          <h3 className='text-[20px] font-semibold'>Add Colors</h3>
        </div>
        <div>
          <form action="" className='p-2'>
            <label htmlFor="" className='text-[16px] font-semibold'>Color Name</label>
            <input type="text" placeholder='Enter Color Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
            <div className='my-4'>
              <label htmlFor="" className='text-[16px] font-semibold'>Color Picker</label>
              <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
            </div>
            <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
            <input type="number" placeholder='Enter Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Color</button>
          </form>

        </div>
      </section>

    </>
  )
}
