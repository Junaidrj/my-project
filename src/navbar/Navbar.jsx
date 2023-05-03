import React from 'react'
import {FaPhoneAlt} from "react-icons/fa"
import {FiFacebook} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
const Navbar = () => {
  return (
    <>
    <div className='h-14 w-[100%] bg-orange-500 rounded rounded-b-full flex items-center'>
      <div className='h-6 w-[25%] ml-80 flex justify-between'>
        < FaPhoneAlt className='text-white mt-[3px]'/>
        <p className='font-semibold text-white'>Call for any information: <span className='hover:text-slate-200 hover:duration-75' >+256 259 21589</span></p>
      </div>
      <div className='h-6 w-[15%] ml-[67vh] flex '>
        <p className='font-semibold text-white'>Follow Us:</p>
        <FiFacebook className='ml-4 mt-[3px] text-white hover:text-slate-200 cursor-pointer'/>
        <BsTwitter className='ml-3 mt-[3px] text-white hover:text-slate-200 cursor-pointer'/>
        <AiOutlineInstagram className='ml-3 mt-[3px] text-white hover:text-slate-200 cursor-pointer'/>
        <GrLinkedinOption className='ml-3 mt-[3px] text-white hover:text-slate-200 cursor-pointer'/>
      </div>
    </div>
    
    </>
  )
}

export default Navbar