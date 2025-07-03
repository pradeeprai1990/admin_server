import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router';
import ResponsivePagination from 'react-responsive-pagination';

export default function Viewmaterials() {
    let [materialList, setMaterialList] = useState([])
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let [ids, setIds] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    let [selectAll, setSelectAll] = useState(false)
    let [materialName,setMaterialName]=useState('')
    let [totalPage,setTotalPage]=useState(0) //4
    let [limit,setLimit]=useState(5) //4


    let getMaterials = () => {
         axios.get(`${apiBaseUrl}material/view/`,{
                params:{
                    materialName,
                    currentPage,
                    limit
                }
             })
            .then((res) => res.data)
            .then((finalRes) => {
                setMaterialList(finalRes.data)
                setTotalPage(finalRes.pages)
            })
    }

    useEffect(() => {
        getMaterials()
    }, [materialName,currentPage,limit])

   

    let getAllCheckedvalue = (event) => {

        if (event.target.checked && !ids.includes(event.target.value)) {
            setIds([...ids, event.target.value])
            
        }
        else {
            // let filnalArray=ids.filter((v)=>v!=event.target.value)
            setIds(ids.filter((v) => v != event.target.value))
        }
      

    }

    let deleteMaterial = () => {
        axios.post(`${apiBaseUrl}material/delete`, { ids })
            .then((res) => res.data)
            .then((finaLres) => {
                console.log(finaLres)
                getMaterials()
                setIds([])
            })
    }

    let changeStatus = () => {
        axios.post(`${apiBaseUrl}material/change-status`, { ids })
            .then((res) => res.data)
            .then((finaLres) => {
                console.log(finaLres)
                getMaterials()
                setIds([])
            })
    }

    let handleAll=(event)=>{


        
        if(event.target.checked){
            let allIds=materialList.map((items)=>items._id)
            setIds(allIds)
        }
        else{
            setIds([])
        }
       
    }


    useEffect(()=>{
      
    if(materialList.length>1){
        //materialList.length3 ==2
        if(materialList.length==ids.length){
            setSelectAll(true)
        }
        else{
            setSelectAll(false)
        }
    }
       

    },[ids])
   

    return (
        <>
        {totalPage}
        <section className='max-w-full my-5 rounded-lg p-5' style={{ border: "1px solid #ccc" }}>
                <div className='w-full'>
                    <form action="" className='flex items-center gap-1'>
                        <input onChange={(e)=>setMaterialName(e.target.value)} type="text" placeholder='Search Name' className='border-1 p-2 w-[350px] rounded-sm bg-[#ffffff] border-[#ccc] h-[40px]' />

                        <div className='bg-blue-600 p-2 h-[40px] cursor-pointer w-[40px] rounded-sm flex justify-center items-center'>
                            <IoIosSearch onClick={getMaterials} className='text-white text-lg font-semibold' />
                        </div>
                    </form>
                </div>
            </section>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <div className=''>
                        <h3 className='text-[26px] font-semibold'>View Material</h3>
                    </div>
                    <div className='flex items-center gap-2 mr-3'>
                        <select onChange={(e)=>setLimit(e.target.value)}>
                            <option value={5}>Change Page Limit</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={12}>12</option>
                        </select>
                        <div className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                            <FaFilter className='' />
                        </div>
                        <button className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white' onClick={changeStatus}>Change Status</button>
                        <button className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white' onClick={deleteMaterial}>Delete</button>
                    </div>
                </div>
                
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr className=''>
                                <th className='lg:w-[3%] sm:w-[8%]'>
                                    <div className='flex items-center'>
                                        <input 
                                            type="checkbox" 
                                            onChange={handleAll}
                                            checked={selectAll}
                                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' 
                                        />
                                    </div>
                                </th>
                                <th scope='col' className='w-[10%]'>Sr No</th>
                                <th scope='col' className='w-[60%]'>Material Name</th>
                                <th scope='col' className='w-[15%]'>order</th>
                                <th scope='col' className='w-[15%]'>status</th>
                                <th scope='col' className='w-[10%]'>action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                materialList.length >= 1
                                    ?
                                    materialList.map((item, index) => {
                                        return (
                                            <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                                <td className='w-[3%] py-7'>
                                                    
                                                    <input 
                                                    onChange={getAllCheckedvalue} 
                                                    checked={ids.includes(item._id)} 
                                                    type="checkbox" value={item._id} 
                                                    className='w-4 h-4' 
                                                  
                                                   />




                                                </td>
                                                <td className='text-base font-semibold text-black '> {
                                                    
                                                    (currentPage-1)*limit+(index+1)
                                                
                                                
                                                } </td>

                                                <td className='text-base font-semibold text-black '> {item.materialName} </td>

                                                <td className='text-start'>  {item.materialOrder} </td>
                                                <td className=''>
                                                    {item.materialStatus
                                                        ?
                                                        <button className=' bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button>
                                                        :
                                                        <button className=' bg-gradient-to-r from-red-400 via-red-500 to-red-600 py-1.5 text-white font-semibold px-5 rounded-sm'>DeActive</button>


                                                    }
                                                </td>
                                                <td>
                                                    <Link to={`/editmaterial/${item._id}`}>
                                                        <button className=' flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-[50%]'>
                                                            <MdEdit className='text-[18px]' />


                                                        </button>
                                                    </Link>

                                                </td>
                                            </tr>
                                        )
                                    })
                                    :

                                    <tr>
                                        <td colSpan={6}>No List Found</td>
                                    </tr>
                            }


                        </tbody>
                    </table>
                    <ResponsivePagination
                    current={currentPage}
                    total={ totalPage }
                    onPageChange={setCurrentPage}
                    />
                </div>
            </section>
        </>
    )
}
