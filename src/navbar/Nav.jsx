import React from 'react'
import Img from "../images/new folder034.png"
import { FaChevronDown } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import Btn from './btn'
const Nav = () => {
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //     if (window.scrollY >= 10) {
  //         setColorchange(true);
  //     }
  //     else {
  //         setColorchange(false);
  //     }
  // };
  // window.addEventListener('scroll', changeNavbarColor);


  return (
    <>
      <div className='h-28 w-[100%] flex'>
        <div className='logoborder h-28 w-52  ml-[68px] mt-[-30px] flex items-center justify-center bg-white rounded-2xl'>
          <img src={Img} className="h-6 w-36" />
        </div>
        <div className='h-28 w-[42%]  ml-3'>
          <ul className='flex justify-around mt-12  w-[100%] h-10'>
            <div class="dropdown">
              <button class="dropbtn p-2  text-lg cursor-pointer flex items-center font-bold  hover:text-orange-600">HOME<FaChevronDown className='mt-2 h-3 w-4' /></button>
              <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[150px]">
                <li className="hover:text-orange-600 cursor-pointer ">HOME ONE</li>
                <li className="hover:text-orange-600 cursor-pointer">HOME TWO</li>
                <li className="hover:text-orange-600 cursor-pointer">HOME THREE</li>
                <li className="hover:text-orange-600 cursor-pointer">HOME FIVE</li>
              </div>
            </div>
            <li className='flex items-center font-bold mt-1 cursor-pointer  hover:text-orange-600'>ABOUT</li>

            <div class="dropdown">
              <button class="dropbtn p-2  hover:text-orange-600 text-lg cursor-pointer flex items-center font-bold">EVENT<FaChevronDown className='mt-2 h-3 w-4' /></button>
              <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[150px]">
                <li className="hover:text-orange-600 cursor-pointer ">EVENT</li>
                <li className="hover:text-orange-600 cursor-pointer">CLASSIC EVENT</li>

              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn p-2  hover:text-orange-600 text-lg cursor-pointer flex items-center font-bold">PAGES<FaChevronDown className='mt-2 h-3 w-4' /></button>
              <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[150px]">
                <li className="hover:text-orange-600 cursor-pointer ">SHOP</li>
                <li className="hover:text-orange-600 cursor-pointer">GALLERY</li>
                <li className="hover:text-orange-600 cursor-pointer">MALL</li>
                <li className="hover:text-orange-600 cursor-pointer">COUNTRY</li>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn p-2  text-lg cursor-pointer  hover:text-orange-600 flex items-center font-bold">BLOG<FaChevronDown className='mt-2 h-3 w-4' /></button>
              <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[150px]">
                <li className="hover:text-orange-600 cursor-pointer ">BLOG</li>
                <li className="hover:text-orange-600 cursor-pointer">BLOG DETAILS</li>

              </div>
            </div>
            <li className='flex items-center font-bold mt-1 cursor-pointer  hover:text-orange-600'>CONTACT</li>
          </ul>
        </div>
        <div className='h-28 w-[19%]  ml-36 flex items-center justify-between '>
          <AiOutlineSearch className='h-6 w-6 hover:text-slate-500   text-orange-600 hover:duration-500' />
          <Btn />

          <div className='navimg h-8 w-8'>
          </div>
        </div>

      </div>

    </>
  )
}

export default Nav