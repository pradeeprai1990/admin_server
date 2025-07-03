
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

export let dropDownData = [
    {
        id: 1,
        title: "User",
        icon: <FaUser className="text-black text-2xl" />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "View User",
        link1:'/viewuser'
    },
    {
        id: 2,
        title: "Enquirys",
        icon: <IoChatbox className="text-black text-2xl" />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Contact Enquirys",
        innerTitle2: "Newsletters",
        link1:'/contact-enquiry',
        link2:'/newslatter'
    },
    {
        id: 3,
        title: "Colors",
        icon: <MdOutlineInvertColors className='text-2xl text-gray-600'/>,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Color",
        innerTitle2: "View Color",
        link1:'/addcolor',
        link2:'/viewcolor'
    },
    {
        id: 4,
        title: "Materials",
        icon: <FaExpandArrowsAlt className=' text-gray-600' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Materials",
        innerTitle2: "View Materials",
        link1:'/addmaterial',
        link2:'/viewmaterial'
    },
    {
        id: 5,
        title: "Parent Categorys",
        icon:  <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Category",
        innerTitle2: "View Category",
        link1:'/addcategory',
        link2:'/viewcategory'
    },
    {
        id: 6,
        title: "Sub Categorys",
        icon: <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Sub Category",
        innerTitle2: "View Sub Category",
        link1:'/addsubcategory',
        link2:'/viewsubcategory'
    },
    {
        id: 7,
        title: "Sub Sub Categorys",
        icon: <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Sub Sub Category",
        innerTitle2: "View Sub Sub Category",
        link1:'/addsubsubcategory',
        link2:'/viewsubsubcategory'
    },
    {
        id: 8,
        title: "Products",
        icon: <FaShoppingBag className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Products",
        innerTitle2: "View Products",
        link1:'/addproduct',
        link2:'/viewproduct'
    },
    {
        id: 9,
        title: "Why Choose us",
        icon: <FaClockRotateLeft className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Why Choose",
        innerTitle2: "View Why Choose",
        link1:'/add-whychoose',
        link2:'/view-whychoose'
    },
    {
        id: 10,
        title: "Orders",
        icon: <LuNotebookPen className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Orders",
        link1:'/orders',
    },
    {
        id: 11,
        title: "Sliders",
        icon: <FaSliders className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Slider",
        innerTitle2: "View Slider",
        link1:'/Slider/add',
        link2:'/Slider/view',
    },
    {
        id: 12,
        title: "Country",
        icon: <FaPaperPlane className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Coutry",
        innerTitle2: "View Coutry",
        link1:'/Country/add',
        link2:'/Country/view'
    },
    {
        id: 13,
        title: "Testimonials",
        icon: <RiContactsFill className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Testimonials",
        innerTitle2: "View Testimonials",
        link1:'/Testimonials/add',
        link2:'/Testimonials/view'
    },
    {
        id: 14,
        title: "Faqs",
        icon: <FcFaq  />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Faq",
        innerTitle2: "View Faq",
        link1:'/Faq/add',
        link2:'/Faq/view'
    },
    {
        id: 15,
        title: "Terms & Conditions",
        icon: <SlNotebook className=' text-[20px] text-gray-600 text-2xl' />
      
    
    },

]