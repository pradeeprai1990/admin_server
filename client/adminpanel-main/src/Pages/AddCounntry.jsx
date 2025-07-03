import React from 'react'

export default function AddCounntry() {
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addMetrials'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Country</h3>
                </div>
                <div>
                    <form action="" className='p-2'>
                        <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                        <input type="text" placeholder='Enter Color Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" placeholder='Enter Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Country</button>
                    </form>

                </div>
            </section>
        </>
    )
}
