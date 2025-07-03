import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function Order() {

    let [viewOrder, setviewOrder] = useState(false)
    return (
        <>

            <section className={`w-[1320px] mx-auto bg-white shadow-2xl rounded-xl  fixed left-20 top-2  ${viewOrder ? '' : 'hidden'}`}>
                <div className='w-full flex items-center justify-between p-5 border-b-1 border-gray-400' id='orderHeading'>
                    <h3 className='text-xl font-semibold'>Product Image's & Price</h3>
                    <span className='text-5xl cursor-pointer text-gray-500  hover:text-black rounded-[50%] flex items-center justify-center' onClick={() => setviewOrder(false)}>&times;</span>
                </div>
                <div className='w-full my-2 grid grid-cols-[70%_auto] ' >
                    <div className='w-full m-5' id='items'>
                        <div className='flex gap-5 mb-2 '>
                            <div id='itemsImage'>
                                <figure>
                                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" className='w-28' alt="" />
                                </figure>
                            </div>
                            <div id='itemsContent'>
                                <div id='itemsContentHeading'>
                                    <h3 className='text-red-600 font-semibold'>Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt</h3>
                                </div>
                                <div className='my-3'>
                                    <ul>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Price : &nbsp;
                                                <span className='font-normal'>₹ 1500</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Quantity :   &nbsp;
                                                <span className='font-normal'>1</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Size :   &nbsp;
                                                <span className='font-normal'>Xl</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Color :   &nbsp;
                                                <span className='font-normal'>Red</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-2 '>
                            <div id='itemsImage'>
                                <figure>
                                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" className='w-28' alt="" />
                                </figure>
                            </div>
                            <div id='itemsContent'>
                                <div id='itemsContentHeading'>
                                    <h3 className='text-red-600 font-semibold'>Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt</h3>
                                </div>
                                <div className='my-3'>
                                    <ul>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Price : &nbsp;
                                                <span className='font-normal'>₹ 1500</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Quantity :   &nbsp;
                                                <span className='font-normal'>1</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Size :   &nbsp;
                                                <span className='font-normal'>Xl</span>
                                            </p>
                                        </li>
                                        <li className='pb-1'>
                                            <p className='text-[17px] font-semibold'>Color :   &nbsp;
                                                <span className='font-normal'>Red</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg border-2 m-5 border-gray-200 rounded-md bg-white mr-3' id='productDetails' >
                        <div className='p-3' id='productDetails'>
                            <h3 className='text-[20px] font-semibold'>Product Details</h3>
                            <p className='py-1'>Roshan Chaurasia, First Floor , Laxmi  Tower, Bhaskar Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India</p>
                        <div className='my-5' id='orderSummary'>
                            <h3 className='font-semibold text-[20px] py-1'>Order Summary</h3>
                            <ul>
                                <li className='py-1'>
                                    <p className='font-semibold'>Item(s) Subtotal :&nbsp;
                                        <span className='font-normal text-[16px]'>  ₹ 3500</span>
                                    </p>
                                </li>
                                <li  className='py-1'>
                                    <p className='font-semibold'>Cash / Pay on Delivery :  &nbsp;
                                        <span className='font-normal text-[16px]'>  ₹0</span>
                                    </p>
                                </li >
                                <li className='py-1'>
                                    <p className='font-semibold'>Shipping : &nbsp;
                                        <span className='font-normal text-[16px]'>  ₹0</span>
                                    </p>
                                </li>
                                <li className='py-1'>
                                    <p className='font-semibold'>Grand Total: &nbsp;
                                        <span className='font-normal text-[16px]'>  ₹ 3500</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='orders'>
                <div className=' bg-slate-100  p-4  form-heading'>
                    <div className=''>
                        <h3 className='text-[26px] font-semibold'>Order's List</h3>
                    </div>

                </div>
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='w-full text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr className=''>
                                {/* <th className='w-[3%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th> */}

                                <th className='w-[12%] py-3'>
                                    <button className=" px-5 py-3 rounded-sm text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500">
                                        Delete
                                    </button>
                                </th>
                                <th className='w-[10%]'>S. No.</th>
                                <th className='w-[12%]'>Order ID</th>
                                <th className='w-[18%]'>Name</th>
                                <th className='w-[12%]' >Quantity</th>
                                <th className='w-[10%]' >Price</th>
                                <th className='w-[12%]' >Date</th>
                                <th className='w-[12%]' >Status</th>
                                <th className='w-[15%]'>View</th>

                            </tr>
                        </thead>
                        <tbody>


                            <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td className='text-base font-bold  '>1</td>
                                <td className='text-base  '>Frank01</td>
                                <td className='text-base font-semibold'>Roshan Chaurasia</td>
                                <td className='text-start' >2</td>
                                <td className='text-start'>₹ 3500</td>
                                <td className='text-start'>10/06/2024</td>
                                <td className='text-start'>Processing...</td>
                                <td><button className='rounded-3xl border-1 border-gray-400 cursor-pointer hover:text-blue-500 px-4 text-black py-2' onClick={() => setviewOrder(true)}>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
