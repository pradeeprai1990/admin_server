import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { loginContext } from '../Context/MainContext'

export default function Login() {

  let {adminID,setAdminID}=useContext(loginContext)

    let navigation = useNavigate()
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL
    let loginAdmin = (event) => {

        let obj={
            adminEmail:event.target.email.value,
            adminPassword:event.target.password.value
        }
        event.preventDefault()
        axios.post(`${apiBaseUrl}auth/login`,obj)
        .then((res)=>res.data)
        .then((finalRes)=>{
            if(finalRes.status){
                //Login
                setAdminID(finalRes.adminID)
                
            }
            else{
                alert(finalRes.msg)
                //Invalid userName or Password
            }
        })
    }


    useEffect(()=>{
        if(adminID!=""){
            navigation("/dashboard")
        }
        
    },[adminID])

    return (
        <section className='max-w-full h-screen bg-gray-50'>
          
            <div className='absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <div className='w-full'>
                    <figure>
                        <img src="/Images/wscube-tech-logo-2.svg" className='mx-auto' alt="WsCube Tech Logo" />
                    </figure>
                </div>

                <div className='my-3 w-[500px] bg-white p-5 shadow-lg'>
                    <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign in to your account</h2>
                    <div className='w-full my-5' id='signInForm'>
                        <form action="" onSubmit={loginAdmin}>
                            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Email Id</label>
                            <br/>
                            <input type="email" name='email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-3' required placeholder='Enter Email' />

                            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
                            <input type="password" name='password' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-3' placeholder='Enter Password' required/>

                            <div className="flex justify-end mb-4">
                                <Link to={'/forgot-password'} className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</Link>
                            </div>

                            <button type='submit' className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 cursor-pointer' >Sign In</button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}
