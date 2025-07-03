
import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import { RiDashboard2Fill } from "react-icons/ri";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineInvertColors } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { FaSliders } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FcFaq } from "react-icons/fc";
import { SlNotebook } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import Footer from '../Common/Footer';
import { dropDownData } from '../Data/DropDownList';
import { IoMdContact } from "react-icons/io";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { loginContext } from '../Context/MainContext';
export default function Home() {

    // let [innerItems, setinnerItems] = useState(false)
    // let [enquiryInnerItems, setenquiryInnerItems] = useState(false)
    // let [colorInnterItems, setcolorInnerItems] = useState(false)
    // let [materialsInnerItems, setmaterialsInnerItems] = useState(false)
    // let [parentCategory, setparentCategory] = useState(false)
    // let [subCategory, setsubCategory] = useState(false)
    // let [subSubCategory, setsubSubCategory] = useState(false)
    // let [products, setproducts] = useState(false)
    // let [whyChoose, setwhyChoose] = useState(false)
    // let [orders, setorders] = useState(false)
    // let [sliders, setsliders] = useState(false)
    // let [country, setcountry] = useState(false)
    // let [testimonials, settestimonials] = useState(false)
    // let [faq, setfaq] = useState(false)
    // let [termsAndConditions, settermsAndConditions] = useState(false)


    let [dropdownMenu, setdropdownMenu] = useState(-1)


    let [dashBoradMenu, setdashBoradMenu] = useState(false)

    let { adminID, setAdminID } = useContext(loginContext)
    let navigate = useNavigate()
    useEffect(() => {
        if (adminID == '') {
            navigate('/')  //Login page
        }
    }, [adminID])

    return (
        <section className='max-w-full' id='dashboard'>
            <div className='w-full grid lg:grid-cols-[18%_auto]'>
                <div className={`h-screen lg:z-0 sm:z-999 overflow-y-scroll sm:fixed lg:static duration-1000 ${dashBoradMenu ? 'left-[0%]' : 'left-[-100%]'}  bg-gray-50`}>
                    <div className='border-b-1 border-gray-400 p-2 w-[95%] mx-auto sm:flex sm:justify-end lg:justify-center'>
                        <figure>
                            <img src="/Images/wscube-tech-logo-2.svg" className='mx-auto mb-5 ' alt="" />

                        </figure>
                        <IoCloseSharp className='text-3xl lg:hidden sm:block hidden' onClick={() => setdashBoradMenu(false)} />
                    </div>
                    <div id='pages' className='m-5'>
                        <nav>
                            <ul>
                                <li className='flex items-center gap-2  hover:bg:rounded-2xl py-4 text-black font-medium lg:text-lg sm:text-sm'>
                                    <RiDashboard2Fill />
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                </li>

                                {
                                    dropDownData.map((value, index) => {

                                        let { id, title, icon, innerIcon, innerTitle, link1, link2, innerTitle2 } = value


                                        return (
                                            <div className='maniItems'>
                                                <li className='flex items-center gap-2 cursor-pointer  hover:bg:rounded-2xl py-2 text-black font-medium lg:text-lg sm:text-sm' >
                                                    {icon}
                                                    <p className='w-full flex justify-between items-center' onClick={() => setdropdownMenu(dropdownMenu == id ? -1 : id)}>{title} {dropdownMenu == id ? <RiArrowDropUpLine className='text-[25px]' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                                    </p>

                                                </li>
                                                <div className={`flex  items-center gap-2 innetItems my-2 ${dropdownMenu == id && innerTitle != undefined ? '' : 'hidden'} `}>
                                                    <FaRegDotCircle /><Link to={link1} onClick={() => setdashBoradMenu(false)} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>{innerTitle}
                                                    </Link>
                                                </div>
                                                <div className={`flex  items-center gap-2 innetItems my-2 ${dropdownMenu == id && innerTitle2 != undefined ? '' : 'hidden'} `}>
                                                    <FaRegDotCircle /><Link to={link2} onClick={() => setdashBoradMenu(false)} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>{innerTitle2}
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                                {/* 
                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <IoChatbox className='text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 2 ? -1 : 2)}>Enquirys {dropdownMenu == 2 ? <RiArrowDropUpLine className='text-[25px] font-normal' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 2 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/contact-enquiry'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Contact Enquirys
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 2 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/newslatter'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>Newsletterss
                                        </Link>
                                    </div>
                                </div>

                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <MdOutlineInvertColors className='text-2xl text-gray-600' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 3 ? -1 : 3)}>Colors {dropdownMenu == 3 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 3 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Color
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 3 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Color
                                        </Link>
                                    </div>
                                </div>

                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <FaExpandArrowsAlt className=' text-gray-600' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 4 ? -1 : 4)}>Materials {dropdownMenu == 4 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 4 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addmaterial'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Materials
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 4 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewmaterial'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Materials
                                        </Link>
                                    </div>
                                </div>

                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <RiMenu3Fill className=' text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 5 ? -1 : 5)}>Parent Categorys {dropdownMenu == 5 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 5 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcategory'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Category
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 5 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewcategory'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Category
                                        </Link>
                                    </div>
                                </div>


                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <RiMenu3Fill className=' text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 6 ? -1 : 6)}>Sub Categorys {dropdownMenu == 6 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 6 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addsubcategory'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Sub Category
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 6 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewsubcategory'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Sub Category
                                        </Link>
                                    </div>
                                </div>


                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <RiMenu3Fill className=' text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 7 ? -1 : 7)}>Sub Sub Categorys {dropdownMenu == 7 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 7 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Sub Sub Category
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 7 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewsubsubcategory'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Sub Sub Category
                                        </Link>
                                    </div>
                                </div>

                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <FaShoppingBag className=' text-[20px] text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 8 ? -1 : 8)}>Products {dropdownMenu == 8 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 8 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Products
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 8 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Products
                                        </Link>
                                    </div>
                                </div>


                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <FaClockRotateLeft className=' text-[20px] text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 9 ? -1 : 9)}>Why Choose us {dropdownMenu == 9 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 9 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Why Choose
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 9 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/viewcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>View Why Choose
                                        </Link>
                                    </div>
                                </div>


                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <LuNotebookPen className=' text-[20px] text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 10 ? -1 : 10)}>Orders {dropdownMenu == 10 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 10 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Orders
                                        </Link>
                                    </div>
                                </div>

                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <RiContactsFill className=' text-[20px] text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 11 ? -1 : 11)}>Testimonials {dropdownMenu == 11 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 11 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>Add Testimonials
                                        </Link>
                                    </div>
                                    <div className={`flex  items-center gap-2 innetItems my-3 ${dropdownMenu == 11 ? '' : 'hidden'} `}>
                                        <FaRegDotCircle /><Link to={'/addcolor'} className='w-full flex justify-between items-center font-semibold  text-[14px] '>View Testimonials
                                        </Link>
                                    </div>
                                </div>


                                <div className='maniItems'>
                                    <li className='flex items-center gap-2  hover:bg:rounded-2xl py-2 text-black font-medium text-lg' >
                                        <SlNotebook className=' text-[20px] text-gray-600 text-2xl' />
                                        <Link className='w-full flex justify-between text-[16px] items-center' onClick={() => setdropdownMenu(dropdownMenu == 12 ? -1 : 12)}>Terms & Conditions {dropdownMenu == 12 ? <RiArrowDropUpLine className='text-[25px] font-normal text-gray-600' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                        </Link>


                                    </li>
                                </div> */}

                            </ul>
                        </nav>
                    </div>
                </div>
                <div id='dashBoardContent' className='h-screen overflow-y-scroll'>
                    <div className='w-[95%] mx-auto flex items-center justify-between my-2' id='heading'>
                        <p className='flex items-center gap-4 text-xl text-gray-500 font-medium'>
                            <AiOutlineMenu className='font-bold text-2xl' onClick={() => setdashBoradMenu(true)} />
                            Dashboard</p>
                        <div className='cursor-pointer relative group'>
                            <figure>
                                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='w-12 h-12 rounded-full object-cover' alt="" />
                            </figure>

                            <div className='w-48 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-2xl absolute right-0 hidden group-hover:block ' id='profile'>
                                <nav>
                                    <ul>
                                        <li className='p-2 border-b border-gray-200 hover:text-blue-600 hover:bg-gray-100'>
                                            <Link to={'/profile'} className='flex items-center font-semibold gap-2'><IoMdContact className='text-lg' />Profile</Link>
                                        </li>
                                        <li className='p-2 border-b hover:text-blue-600 hover:bg-gray-100' >
                                            <Link to={'/company-profile'} className='flex items-center font-semibold gap-2'><HiOutlineOfficeBuilding className='text-lg' />Company Profile</Link>
                                        </li>
                                        <li className='p-2 border-b-1 border-gray-200 hover:text-blue-600 hover:bg-gray-100'>
                                            <button onClick={() => setAdminID('')} className='flex items-center font-semibold gap-2'><FaLock className='text-lg' />Logout</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-[#ccc] h-px border-0 my-2" />
                    <div className='w-[95%] mx-auto text-md font-medium my-3 text-gray-700'>
                        <p>Home / Dashboard</p>

                    </div>
                    <hr className="bg-[#ccc] h-px border-0 my-2" />
                    <div className='max-w-[95%] mx-auto  '>
                        <Outlet />
                        <div className='mt-12'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
