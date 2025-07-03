import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function SearchBox() {
    return (
        <>
            <section className='max-w-full my-5 rounded-lg p-5' style={{ border: "1px solid #ccc" }}>
                <div className='w-full'>
                    <form action="" className='flex items-center gap-1'>
                        <input type="text" placeholder='Search Name' className='border-1 p-2 w-[350px] rounded-sm bg-[#ffffff] border-[#ccc] h-[40px]' />

                        <div className='bg-blue-600 p-2 h-[40px] cursor-pointer w-[40px] rounded-sm flex justify-center items-center'>
                            <IoIosSearch className='text-white text-lg font-semibold' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
