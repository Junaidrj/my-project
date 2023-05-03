import React from 'react'
// import img1 from "../images/new folder040.png"
// import {TbCalendarTime}  from "react-icons/tb"
import {MdLocationOn} from "react-icons/md"
import img2 from "../images/new folder061.png"
import {AiOutlineClockCircle} from "react-icons/ai"
import img3 from "../images/new folder062.jpg"
import img4 from "../images/new folder063.png"
import img5 from "../images/new folder089.jpg"
import img6 from "../images/new folder065.png"
import img7 from "../images/new folder066.jpg"
import img8 from "../images/new folder060.png"

function Information() {
  return (
    <>
    <div className='h-[150vh] w-[100%] '>
    
      
        
        <div className='flex justify-between w-[90%] ml-[5%] mt-[5%]' >
            <div className='1   h-[270px] w-[170px]  text-center rounded-xl'>
                <img src={img2} className='ml-[60px] mt-[30px]'/>
                <h2 className='font-semibold text-xl'>Agato Ronald</h2>
                <p className='text-red-600'>UI/UX Designer</p><hr className=' mt-[20px] w-[80%] ml-[10%]'/>
                <p className='mt-[20px]'>Coffee & Snacks<br/>
Video Streaming</p>
            </div>
            <div className=' h-[270px] w-[570px]  '>
                <div className='text-red-600 flex'>
                <MdLocationOn className='mt-1'/>
                    <p className='ml-2'>258 Devila Street, London</p>
                    <AiOutlineClockCircle className='mt-1 ml-[20px]'/>
                    <p className='ml-2'>9:30 - 10:30 AM</p>
                </div>
                <h1 className='font-extrabold text-2xl mt-[20px]  hover:text-orange-600'>UI/UX Designer Trened Party 2022</h1>
                <p className='mt-[20px]'>Monotonectally fashion value added growth strategies and friendly alignments. Professionally conceptualize multifunctional information before cross functional partnerships aggregate error free manufactured products</p>
                <div className='mt-[20px]'>
             <button className='bg-orange-600 rounded-full px-6 py-3 text-white font-bold btnnav '>BUU TICKETS</button>
          <button className=' rounded-full px-6 py-3  font-bold border-2 hover:text-white hover:bg-orange-600 '>LEARN MORE</button>
          </div>
            </div>
            <div className='3 h-[260px] w-[400px]  '>
            <img src={img3} className='rounded-2xl'/>

            </div>
        </div>
       
        
        <div className='flex justify-between w-[90%] ml-[5%] mt-[5%]'>
            <div className='  h-[270px] w-[170px]  text-center rounded-xl'>
                <img src={img4} className='ml-[60px] mt-[30px]'/>
                <h2 className='font-semibold text-xl'>David Smith</h2>
                <p className='text-red-600'>UI/UX Designer</p><hr className=' mt-[20px] w-[80%] ml-[10%]'/>
                <p className='mt-[20px]'>Coffee & Snacks<br/>
Video Streaming</p>
            </div>
            <div className=' h-[270px] w-[570px] '>
                <div className='text-red-600 flex'>
                <MdLocationOn className='mt-1'/>
                    <p className='ml-2'>258 Devila Street, London</p>
                    <AiOutlineClockCircle className='mt-1 ml-[20px]'/>
                    <p className='ml-2'>9:30 - 10:30 AM</p>
                </div>
                <h1 className='font-extrabold text-2xl mt-[20px]  hover:text-orange-600'>Createive UI/UX Designer 2022</h1>
                <p className='mt-[20px]'>Monotonectally fashion value added growth strategies and friendly alignments. Professionally conceptualize multifunctional information before cross functional partnerships aggregate error free manufactured products</p>
                <div className='mt-[20px]'>
             <button className='bg-orange-600 rounded-full px-6 py-3 text-white font-bold btnnav '>BUU TICKETS</button>
          <button className=' rounded-full px-6 py-3  font-bold border-2 hover:text-white hover:bg-orange-600 '>LEARN MORE</button>
          </div>
            </div>
            <div className='3 h-[260px] w-[400px]  '>
            <img src={img5} className='h-[103%] w-[100%] rounded-2xl'/>

            </div>
        </div>
        <div className='flex justify-between w-[90%] ml-[5%] mt-[5%]'>
<div className=' h-[270px] w-[170px] text-center rounded-xl'>
    <img src={img6} className='ml-[60px] mt-[30px]'/>
    <h2 className='font-semibold text-xl'>John Done</h2>
    <p className='text-red-600'>UI/UX Designer</p><hr className=' mt-[20px] w-[80%] ml-[10%]'/>
    <p className='mt-[20px]'>Coffee & Snacks<br/>
Video Streaming</p>
</div>
<div className=' h-[270px] w-[570px] '>
    <div className='text-red-600 flex'>
    <MdLocationOn className='mt-1'/>
        <p className='ml-2'>258 Devila Street, London</p>
        <AiOutlineClockCircle className='mt-1 ml-[20px]'/>
        <p className='ml-2'>9:30 - 10:30 AM</p>
    </div>
    <h1 className='font-extrabold text-2xl mt-[20px]  hover:text-orange-600'>UI/UX Designer Researce 2022</h1>
    <p className='mt-[20px]'>Monotonectally fashion value added growth strategies and friendly alignments. Professionally conceptualize multifunctional information before cross functional partnerships aggregate error free manufactured products</p>
    <div className='mt-[20px]'>
 <button className='bg-orange-600 rounded-full px-6 py-3 text-white font-bold btnnav '>BUU TICKETS</button>
<button className=' rounded-full px-6 py-3  font-bold border-2 hover:text-white hover:bg-orange-600 '>LEARN MORE</button>
</div>
</div>
<div className='3 h-[260px] w-[400px]  '>
<img src={img7} className='h-[103%] w-[100%] rounded-2xl'/>

</div>
</div>
    </div>
    <div className='h-[30vh] w-[100%] ' style={{backgroundImage:`url("${img8}")`,backgroundSize:"100% 100%",zIndex:"1"}}></div>
   
    </>
  )
}

export default Information
