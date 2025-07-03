import React from 'react'
import Dropify from '../Common/Dropify'

export default function CompnayProfile() {
    return (
        <>
            <section className='max-w-full shadow-xl border-1 border-gray-200 bg-white rounded-lg  mt-12'>
                <div className='w-full p-5'>
                    <form action="">
                        <div className='grid grid-cols-[35%_auto] gap-5'>
                            <div className=''>
                                <label htmlFor="" className='text-base font-semibold'>Category Image</label>
                                <Dropify />
                            </div>
                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Name</label>
                                <input type="text" placeholder='Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                                <label htmlFor="" className='text-[16px] font-semibold'>Email</label>
                                <input type="email" placeholder='Email' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                                <label htmlFor="" className='text-[16px] font-semibold'>Mobile Number</label>
                                <input type="number" placeholder='Mobile Number' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>
                        <label htmlFor="" className='text-[16px] font-semibold'>Address</label>
                        <textarea type="text" placeholder='Address' name="" id="" className='text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Google Map URL</label>
                        <textarea type="text" placeholder='Google Map URL' name="" id="" className='text-sm h-24 w-full border-2 shadow-sm border-gray-300 p-2 rounded-sm mt-1 resize-none' />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>

                        <button type='submit' className='focus:outline-none my-8 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer'>Update Your Profile</button>
                    </form>
                </div>
            </section>
        </>
    )
}
