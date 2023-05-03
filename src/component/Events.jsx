import React from 'react'
import Img from "../images/newfolder054.jpg"
import Img1 from "../images/new folder060.png"
import Img2 from "../images/new folder052.png"
import Img3 from "../images/new folder040.png"
import Img4 from "../images/new folder058.png"
import Img5 from "../images/new folder059.png"
import Img6 from "../images/new folder039.png"
import Img7 from "../images/new folder055.png"
import Img8 from "../images/new folder056.png"
import Img9 from "../images/new folder057.png"









const Events = () => {
  return (
    <>
      <div className='h-[125vh] w-[100%] eventimg' style={{ backgroundImage: `url("${Img}")`, backgroundSize: "100% 100%," }}>
        <img src={Img1} />
        <div className='h-20 w-80  flex items-center justify-around ml-[80vh] mt-20'>
          <h1 className='text-white '>Get Started In Minutes </h1>
          <img className=' ml-3' src={Img3} />
        </div>
        <h2 className='text-white Join-Event ml-[53vh] mt-10 font-bold text-5xl'>Why you should Join Event</h2>
        <img src={Img4} className="ml-12 updown" />
        <div className='h-[350px] w-[100%] flex justify-evenly items-center'>
          <div className='h-80 w-[25%]  flex items-center justify-around flex-col'>
            <img src={Img6} className="clipy h-[50%] text-white hover:rotate-90 hover:duration-700" />
            <img className='mt-[-138px] ml-[-5px]' src={Img7} />
            <h3 className='font-bold text-xl text-white'>Great Speakers</h3>
            <h3 className='text-white font-semibold w-64'>How you transform your business <br /><span className='ml-7'>as technology, consumer</span></h3>
          </div>
          <div className='h-80 w-[25%]  flex items-center justify-around flex-col'>
            <img src={Img6} className="clipy h-[50%] text-white hover:rotate-90 hover:duration-700" />
            <img className='mt-[-138px] ml-[-5px]' src={Img8} />
            <h3 className='font-bold text-xl text-white'>Great Speakers</h3>
            <h3 className='text-white font-semibold w-64'>How you transform your business <br /><span className='ml-7'>as technology, consumer</span></h3>
          </div>
          <div className='h-80 w-[25%]  flex items-center justify-around flex-col'>
            <img src={Img6} className="clipy h-[50%] text-white hover:rotate-90 hover:duration-700 " />
            <img className='mt-[-138px] ml-[-5px]' src={Img9} />
            <h3 className='font-bold text-xl text-white'>Great Speakers</h3>
            <h3 className='text-white font-semibold w-64'>How you transform your business <br /><span className='ml-7'>as technology, consumer</span></h3>
          </div>
          <img src={Img5} className="updowntick" />
        </div>

        <img src={Img2} className="mt-[-1vh]"/>

      </div>
    </>
  )
}

export default Events