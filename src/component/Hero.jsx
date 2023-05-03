import React from 'react'
import img from "../images/newfolder064.jpg"

import img1 from "../images/aaaa.png"
import {FaCalendarAlt} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
import {BsFillPlayFill} from "react-icons/bs"



export default function Hero() {

  return (
    <>
   <section class="text-gray-600 body-font h-[106vh]">
  <div class="container mx-auto flex  md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:ml-8 lg:w-full ml-5 md:w-1/2  mb-10 md:mb-0 rounded-3xl h-[570px] relative w-full flex items-end" style={{backgroundImage:`url(${img})`,backgroundSize:"100% 100%"}}>
        <div className='h-[140px] w-[170px] rounded-3xl  mb-[-35px] ml-[-40px] absolute bg-orange-600  '>
            <div className="mt-4 ">
            <h1 className='text-white font-bold text-6xl ml-6'>15</h1>
            <p className='text-white font-bold ml-6'>Iconic Speakers</p>
            </div>

        </div>
    </div >
    <div class="lg:flex-grow md:w-1/2 lg: md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div className='flex'>
      <h2 class="text-2xl font-bold text-red-400  mb-4 "><i>More About Us</i></h2>
        <img src={img1}/>
        </div>
      <h1 class=" sm:text-4xl mb-4 font-bold " style={{fontSize:"40px"}}>About The Event</h1>

      <p class="mb-8 leading-relaxed">Enthusiastically envisioneer user friendly benefits before resource maximizing total linkage. Professionally unleash magnetic alignments after an expanded commerce thusiastically innovate 24/7 users before high-payoff e-commerce.</p>
      <div class="flex w-full md:justify-start justify-center items-end border-b border-t">
      <div class="p-4 md:w-[50%] flex  ">
        <div class="w-20 h-20  inline-flex items-center mt-2 justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
        <FaCalendarAlt className='text-4xl'/>
        </div>
        <div class="flex-grow w-full mb-6">
          <h2 class="text-gray-900  text-xl font-bold title-font font-medium mb-2  ml-3">When</h2>
          <p class="leading-relaxed text-base ml-3  ">Tuesday - Friday 15 - 20 August, 2019</p>
       
        </div>
      </div>
      <div class="p-4 md:w-[50%] flex ">
        <div class="w-20 h-20 inline-flex items-center mt-3 justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
      <MdLocationOn className='text-4xl'/>
        </div>
        <div class="flex-grow w-full">
          <h2 class="text-gray-900 text-xl font-bold title-font font-medium mb-2 ml-3">Location</h2>
          <p class="leading-relaxed text-base ml-3">Queenbay Mall 4217 Nickel Diamond Road, NYC</p>
       
        </div>
      </div>
      </div>
      <div class="flex lg:flex-row md:flex-col mt-3">
      <button className='bg-orange-600 rounded-full px-8 py-3 text-white font-bold btnnav '>BUU TICKETS NOW</button>
      <button className='ml-5 flex justify-center items-center text-orange-600 font-bold '><BsFillPlayFill className='bg-orange-600 rounded-full p-1 text-5xl mr-5 text-white font-bold btnnav '/> WATCH VIDEO</button>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}