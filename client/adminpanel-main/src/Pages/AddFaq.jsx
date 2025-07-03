import React from 'react'

export default function AddFaq() {
    return (
        <>
           <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addFaq'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Faq</h3>
                </div>
                <div>
                    <form action="" className='p-2'>
                        <label htmlFor="" className='text-[16px] font-semibold'>Question</label>
                        <input type="text" placeholder='Question' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5 mt-1' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Answer</label>
                        <textarea type="number" placeholder='Answer' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[150px] p-2 rounded-sm mt-1 resize-none' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Faq</button>
                    </form>

                </div>
            </section>
        </>
    )
}
