import React from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function ViewCountry() {
    return (
        <>
               <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewCategory'>
                        <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                            <div className=''>
                                <h3 className='text-[26px] font-semibold'>View Country</h3>
                            </div>
                            <div className='flex items-center gap-2 mr-3'>
                                <div className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                                    <FaFilter className='' />
                                </div>
                                <button className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                                <button className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                            </div>
                        </div>
                        <div className='form px-4 '>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr className=''>
                                        <th className='lg:w-[3%] sm:w-[8%]'>
                                            <div className='flex items-center'>
                                                <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                            </div>
                                        </th>
        
                                        <th scope='col' className='lg:w-[60%] sm:w-[40%]'>Country Name</th>
                                        <th scope='col' className='w-[15%]'>order</th>
                                        <th scope='col' className='lg:w-[15%] sm:w-[18%]'>status</th>
                                        <th scope='col' className='w-[10%]'>action</th>
        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        <td className='w-[3%] py-7'>
                                            <input type="checkbox" className='w-4 h-4' name="" id="" />
                                        </td>
                                        <td className='text-base font-semibold text-black '>Neil Sims</td>
        
                                        <td className='text-start'>1</td>
                                        <td className=''><button className=' bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button></td>
                                        <td><button className=' flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-[50%]'>
                                            <MdEdit className='text-[18px]' />
                                        </button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
        </>
    )
}
