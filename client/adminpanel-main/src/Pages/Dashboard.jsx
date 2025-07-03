import React, { useState } from 'react'
import { Link } from 'react-router'
import { RiDashboard2Fill } from "react-icons/ri";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
export default function Dashboard() {

    let [innerItems, setinnerItems] = useState(false)
    let [enquiryInnerItems, setenquiryInnerItems] = useState(false)
    return (
        <>

            <div className='max-w-full mt-5'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='bg-[rgb(89,86,211)] w-full h-48  rounded-md shadow-lg border-0 dashboardItems'>
                        <div className='dashboardItemsContent p-5'>
                            <div className='dashboradItemsContent-Heading flex items-center justify-between'>
                                <h3 className='text-[25px] text-white font-bold'>26K&nbsp;
                                    <span className='text-[18px]'>(-12.4% ↓)</span>
                                </h3>
                                <SlOptionsVertical className='text-white' />
                            </div>
                            <h3 className='text-[22px] font-semibold text-white'>Users</h3>
                        </div>
                    </div>

                    <div className='bg-[rgb(41,152,254)] w-full h-48  rounded-md shadow-lg border-0 dashboardItems'>
                        <div className='dashboardItemsContent p-5'>
                            <div className='dashboradItemsContent-Heading flex items-center justify-between'>
                                <h3 className='text-[25px] text-white font-bold'>$6,200&nbsp;
                                    <span className='text-[18px]'>(40.9% ↑)</span>
                                </h3>
                                <SlOptionsVertical className='text-white' />
                            </div>
                            <h3 className='text-[22px] font-semibold text-white'>Product</h3>
                        </div>
                    </div>


                    <div className='bg-[rgb(252,176,30)] w-full h-48  rounded-md shadow-lg border-0 dashboardItems'>
                        <div className='dashboardItemsContent p-5'>
                            <div className='dashboradItemsContent-Heading flex items-center justify-between'>
                                <h3 className='text-[25px] text-white font-bold'>2.49%&nbsp;
                                    <span className='text-[18px]'>(84.7% ↑)</span>
                                </h3>
                                <SlOptionsVertical className='text-white' />
                            </div>
                            <h3 className='text-[22px] font-semibold text-white'>Category</h3>
                        </div>
                    </div>

                    <div className='bg-[rgb(233,83,83)] w-full h-48  rounded-md shadow-lg border-0 dashboardItems'>
                        <div className='dashboardItemsContent p-5'>
                            <div className='dashboradItemsContent-Heading flex items-center justify-between'>
                                <h3 className='text-[25px] text-white font-bold'>44K&nbsp;
                                    <span className='text-[18px]'>(-23.6% ↓</span>
                                </h3>
                                <SlOptionsVertical className='text-white' />
                            </div>
                            <h3 className='text-[22px] font-semibold text-white'>Orders</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
